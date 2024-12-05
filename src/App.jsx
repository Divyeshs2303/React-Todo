// src/App.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./Feature/TodoSlice";
import List from "./List";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText) {
      dispatch(addTodo(todoText));
      setTodoText(""); // clear input after adding
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Todo App</h1>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter todo"
        style={{
          padding: "10px",
          fontSize: "14px",
          width: "300px",
          marginRight: "10px",
          borderRadius: "4px",
        }}
      />
      <button
        onClick={handleAddTodo}
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        Add Todo
      </button>

      <List />
    </div>
  );
};

export default App;
