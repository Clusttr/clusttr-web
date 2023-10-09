// import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//     // Add other reducers if needed
//   },
// });

// export default store;

import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit/dist";

export const store = configureStore({
  reducer: {
    user: userReducer,
    // Add other reducers if needed
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
