import { createAsyncThunk } from "@reduxjs/toolkit";
import { Web3Auth } from "@web3auth/modal";

const Web3Authentication = createAsyncThunk(
  "web3/auth",
  async (userData: Web3Auth, thunkAPI) => {
    try {
      return userData;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const Web3Provider = createAsyncThunk(
  "web3/provider",
  async (userData: any, thunkAPI) => {
    try {
      return userData;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export { Web3Authentication, Web3Provider };
