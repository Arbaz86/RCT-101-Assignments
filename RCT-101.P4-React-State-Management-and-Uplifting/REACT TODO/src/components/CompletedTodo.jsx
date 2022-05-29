import React, { useState } from "react";
import "./CompletedTodo.css";
import { TiDeleteOutline } from "react-icons/ti";

export const CompletedTodo = ({
  todo,
  onDeleteComplete,
  handleCompletedTodos,
}) => {
  const [isCompleted, setIsCompleted] = useState(true);

  return (
    <div className={isCompleted ? "striked-main-div1" : "todo-list-div1"}>
      <div className="checked-value-div1">
        <input
          className="checkbox-input1"
          type="checkbox"
          disabled={true}
          checked={isCompleted}
          onChange={(e) => {
            setIsCompleted(e.target.checked);
            console.log(e.target.checked);
          }}
        />
        <div className={isCompleted ? "striked1" : "todo-list-value1"}>
          {todo.value}
        </div>
      </div>
      <button
        className="delete-todo-btn1"
        onClick={() => {
          onDeleteComplete(todo.id);
        }}
      >
        <TiDeleteOutline className="delete-icon1" />
      </button>
    </div>
  );
};
