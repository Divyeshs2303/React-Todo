// src/Feature/TodoSlice.js

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  IsEdit: {
    id: "",
    text: "",
  },
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    setEdit: (state, action) => {
      const { id, text } = action.payload;
      state.IsEdit = { id, text };
    },
  },
});

export const { addTodo, removeTodo, updateTodo, setEdit } = TodoSlice.actions;

export default TodoSlice.reducer;
