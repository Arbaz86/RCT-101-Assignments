import { useState } from "react";
import "./TodoItem.css";
import { TiDeleteOutline } from "react-icons/ti";
export const TodoItem = ({ todo, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className={isCompleted ? "striked-main-div" : "todo-list-div"}>
      <div className="checked-value-div">
        <input
          className="checkbox-input"
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => {
            setIsCompleted(e.target.checked);
            console.log(e.target.checked);
          }}
        />
        <div className={isCompleted ? "striked" : "todo-list-value"}>
          {todo.value}
        </div>
      </div>
      <button
        className="delete-todo-btn"
        onClick={() => {
          onDelete(todo.id);
        }}
      >
        <TiDeleteOutline className="delete-icon" />
      </button>
    </div>
  );
};
