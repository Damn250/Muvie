import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const Slice = createSlice({
  name: "counter",
  initialState,
  reducers :{

      increment: (state) => {
          state.value += 1;
        },
        
        incrementAmount: (state, action) => {
            state.value -= action.payload;
        },
    }
    });
    export const { increment, incrementAmount } = Slice.actions;
    export default Slice.reducer;
    