import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";
import { v4 as uuid } from "uuid";
import "./newTodoForm.css";

function NewTodoForm({ task, createTodo }) {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      task: "",
    }
  );

  const handleChange = (evt) => {
    setUserInput({ [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newTodo = { id: uuid(), task: userInput.task, completed: false };
    createTodo(newTodo);
    setUserInput({ task: "" });
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task">New Goal</label>
      <input
        value={userInput.task}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="-"
      />
      <button style={{ marginTop: "15px" }}>Add Goal</button>
    </form>
  );
}
export default NewTodoForm;
