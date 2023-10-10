import { createSlice } from "@reduxjs/toolkit";
import { Web3Authentication, Web3Provider, Address } from "../service/web3auth";
import { IWebAuthState } from "../type";

const initialState: IWebAuthState = {
  user: null,
  web3auth: null,
  web3provider: null,
  accountKey: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.accountKey = null;
      state.web3auth = null;
      state.web3provider = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Web3Authentication.fulfilled, (state, action) => {
        state.web3auth = action.payload;
      })
      .addCase(Web3Provider.fulfilled, (state, action) => {
        state.web3provider = action.payload;
      })
      .addCase(Address.fulfilled, (state, action) => {
        state.accountKey = action.payload;
      });
  },
});

export const { reset } = userSlice.actions;
export const selectUser = (state: any) => state.user.user;

export default userSlice.reducer;
