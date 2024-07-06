import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import Dashboard from "../Pages/Dashboard";

export const store = configureStore({
  reducer: {
    counter: Dashboard,
  },
});
