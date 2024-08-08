import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  todos: [],
  IsEdit: {
    id: "",
    text : ""
  }
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      todos.map((todo) => {
        if (todo.id == action.payload) {
          return action.payload
        }
        else {
          return state
        }
      })
state.todos= updateTodo
    },
  },
})

export const { addTodo, removeTodo, updateTodo } = TodoSlice.actions

export default TodoSlice.reducer

