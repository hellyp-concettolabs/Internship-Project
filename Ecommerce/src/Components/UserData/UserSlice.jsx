import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
  name: "",
};

const UserSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    userInfo: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { userInfo } = UserSlice.actions;

export default UserSlice.reducer;