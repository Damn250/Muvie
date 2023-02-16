import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { setItemAsync, deleteItemAsync, getItemAsync } from "expo-secure-store";

const initialState = {
  userData: {},
  isLoggedIn: false,
  token: "",
  isLoading: false,
  error: "",
};
const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    initiateLoading: (state) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    signUp: (state, action) => {
      state.userData = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    login: (state, action) => {
      state.userData = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    tokenStore: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.userData = {};
      state.isLoggedIn = false;
      state.token = "";
    },
    edit: (state) => {
      state.userData = {};
      state.isLoggedIn = true;
    },
  },
});

export const {
  logout,
  tokenStore,
  login,
  signUp,
  edit,
  setError,
  initiateLoading,
} = authSlice.actions;
export default authSlice.reducer;

export const LoginUser = (thedata) => async (dispatch) => {
  // try {
  dispatch(initiateLoading());
  // const response =
  await axios({
    method: "POST",
    url: "https://klabapi.onrender.com/api/auth/login",
    data: thedata,
  })
    .then((response) => {
      // console.log(response.data, " Login data");
      dispatch(login(response.data.data));
      setItemAsync("logindata", JSON.stringify(response.data.data));
      dispatch(tokenStore(response.data.token));
      setItemAsync("token", JSON.stringify(response.data.token));
    })
    .catch((error) => {
      console.log(error.response.data.message);
      dispatch(setError(error.response.data.message));
    });

  //   // return thi
  // } catch (error) {

  // }
};

export const LogoutUser = () => async (dispatch) => {
  deleteItemAsync("logindata")
    .then((res) => {
      ("UserData deleted");
    })
    .catch((err) => {
      console.log(err);
    });
  deleteItemAsync("token")
    .then((res) => {
      console.log("Token deleted");
    })
    .catch((err) => {
      console.log(err);
    });
  // deleteItemAsync("signupdata");
  dispatch(logout());
};

export const SignUpUser = (thedata) => async (dispatch) => {
  try {
    dispatch(initiateLoading());
    const response = await axios({
      method: "POST",
      url: "https://klabapi.onrender.com/api/auth/register",
      data: thedata,
    });
    dispatch(signUp(response.data.data));
    setItemAsync("logindata", JSON.stringify(response.data.data));
  } catch (err) {
    console.log(err);
    dispatch(setError());
  }
};

export const EditUser = (data) => async (dispatch) => {
  try {
    let token;
    let userId;
    getItemAsync("token").then((res) => {
     
      token = res;
      console.log (res)
      console.log(typeof token);
    });
    getItemAsync("logindata").then((res) => {
      userId = JSON.parse(res)._id;
    console.log(userId);
    });
    console.log(data);
    const response = await axios({
      method: "PATCH",
      url: `https://klabapi.onrender.com/api/users/update/${data._id}`,
      data: data,
      // headers: {
      //   accept: "application/json",
      //   Authorization: `bearer ${token} `,
      //   "Content-Type": "application/json",
      // },
    });

    console.log(response.data, "Edited user");
    dispatch(edit(response.data));
    setItemAsync("logindata", JSON.stringify(response.data));
  } catch (error) {
    dispatch(setError());
    console.log(error, "errrrrror");
  }
};
