// store.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Feature/TodoSlice"; // Adjust path if necessary

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store; // Default export
