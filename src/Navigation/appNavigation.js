import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Login, SignUp, HomeScreen } from "../Screens";
import { TopNavigation } from "./mainNavigation";
import { MainNavigation } from "./bottomNavigation";
import { Getstarted } from "../Screens/Getstarted";
import { Description } from "../Screens/Description";
import { Profile } from "../Screens/Profile";
import { useSelector, useDispatch } from "react-redux";
import { getItemAsync } from "expo-secure-store";
import {
  login as storeInfo,
  tokenStore,
  signUp as SingUpInfo,
  edit as EditUserData,
} from "../features/authSlice";
import { EditProfile } from "../Screens/EditProfile";

const Stack = createNativeStackNavigator();
const { Screen, Navigator } = Stack;

export const AppNavigation = () => {
  const dispatch = useDispatch();

  const login = useSelector((state) => state.auth.isLoggedIn);
  console.log(login, "login state");
  // console.log(login, "Is it login?");

  useEffect(() => {
    getItemAsync("token").then((res) => {
      console.log(res);
      if (res != null) dispatch(tokenStore(res));
    });
    getItemAsync("logindata").then((res) => {
      console.log(res);
      if (res != null) dispatch(storeInfo(res));
    });
    // getItemAsync("logindata").then((res) => {
    //   console.log(res, "Storing the edituserdata");
    //   if (res != null) dispatch(EditUserData(res));
    // });
  }, []);

  // useEffect(() => {
  //   getItemAsync("signupdata").then((res) => {
  //     console.log(res);
  //     if (res != null) dispatch(SingUpInfo(res));
  //   });
  // }, []);

  return (
    <Navigator>
      {login == true ? (
        <>
          <Screen
            options={{ headerShown: false }}
            name="Topnav"
            component={MainNavigation}
          />

          <Screen
            options={{ headerShown: false }}
            name="Description"
            component={Description}
          />
          <Screen name="Profile" component={Profile} />
          <Screen
            options={{ headerShown: false }}
            name="EditProfile"
            component={EditProfile}
          />
        </>
      ) : (
        <>
          <Screen
            options={{ headerShown: false }}
            name="Home"
            component={Getstarted}
          />

          <Screen
            options={{ headerShown: false }}
            name="login"
            component={Login}
          />
          <Screen
            options={{ headerShown: false }}
            name="SignUp"
            component={SignUp}
          />
        </>
      )}
    </Navigator>
  );
};
