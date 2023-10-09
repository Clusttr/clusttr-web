import { createSlice } from "@reduxjs/toolkit";
import { Web3Authentication, Web3Provider } from "../service/web3auth";
import { IWebAuthState } from "../type";

const initialState: IWebAuthState = {
  user: null,
  web3auth: null,
  web3provider: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Web3Authentication.fulfilled, (state, action) => {
        state.web3auth = action.payload;
      })
      .addCase(Web3Provider.fulfilled, (state, action) => {
        state.web3provider = action.payload;
      });
  },
});

export const { setUser } = userSlice.actions;
export const selectUser = (state: any) => state.user.user;

export default userSlice.reducer;
