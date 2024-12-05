import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo, setEdit } from "./Feature/TodoSlice";

const List = () => {
  const todos = useSelector((state) => state.todos.todos || []); // Default to empty array if undefined
  const editTodo = useSelector((state) => state.IsEdit || {}); // Default to empty object if undefined
  const dispatch = useDispatch();
  const [editText, setEditText] = useState("");

  useEffect(() => {
    if (editTodo.text) {
      setEditText(editTodo.text);
    }
  }, [editTodo]);

  const handleEditClick = (todo) => {
    if (todo && todo.id) {
      // Ensure the todo is defined before accessing 'id'
      dispatch(setEdit({ id: todo.id, text: todo.text }));
    }
  };

  const handleUpdateClick = () => {
    if (editTodo.id && editText) {
      dispatch(updateTodo({ id: editTodo.id, text: editText }));
      dispatch(setEdit({ id: null, text: "" })); // Reset edit state in Redux
      setEditText(""); // Reset the local editText state
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            backgroundColor: "#f9f9f9",
            border: "1px solid #ddd",
            width: "350px",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "'Arial', sans-serif",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "18px", color: "#333" }}>
            TODO: {todo.text}
          </h3>
          <div>
            <button
              onClick={() => handleEditClick(todo)} // Ensure todo is defined before accessing 'id'
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                padding: "6px 12px",
                marginRight: "8px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              style={{
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {editTodo.id && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)} // Set text for editing
            style={{
              padding: "8px",
              fontSize: "14px",
              width: "300px",
              marginRight: "10px",
              borderRadius: "4px",
            }}
          />
          <button
            onClick={handleUpdateClick} // Update the todo when clicked
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              padding: "6px 12px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default List;
