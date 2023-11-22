import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList.js";
import "font-awesome/css/font-awesome.min.css";

import "./styles.css";

function App() {
  return (
    <div className="ToDoApp">
      <TodoList />
    </div>
  );
}

export default App;
