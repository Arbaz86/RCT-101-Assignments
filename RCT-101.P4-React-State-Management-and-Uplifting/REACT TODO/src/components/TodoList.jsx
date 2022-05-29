import { TodoItem } from "./TodoItem";
import { CompletedTodo } from "./CompletedTodo";
import { useState } from "react";
import "./TodoList.css";

export const TodoList = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCompletedTodos = (complete) => {
    if (complete === false) {
      setCompleteTodos(todos.filter((todo) => todo.isCompleted == complete));
    }
  };

  const onDeleteComplete = (id) => {
    setCompleteTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  const handleTodo = () => {
    setTodos([...todos, { id: Date.now(), value: text, isCompleted: false }]);
    setText("");
  };

  const onKeyPress = (e) => {
    if (text !== "") {
      if (e.key === "Enter") {
        setTodos([
          ...todos,
          { id: Date.now(), value: text, isCompleted: false },
        ]);
        setText("");
      }
    }
  };
  return (
    <>
      <h1 className="todo-heading">What's the Plan for Today?</h1>
      <input
        className="todo-input"
        value={text}
        type="text"
        placeholder="Add a todo"
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
      <button
        className="btn-todo"
        disabled={text === "" ? true : false}
        onClick={handleTodo}
      >
        Add Todo
      </button>

      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleCompletedTodos={handleCompletedTodos}
            onDelete={onDelete}
          />
        ))}
        <br />
        <h3 className="CT-heading">Completed Todos!</h3>

        {completeTodos.map((todo) => (
          <CompletedTodo
            key={todo.id}
            todo={todo}
            handleCompletedTodos={handleCompletedTodos}
            onDeleteComplete={onDeleteComplete}
          />
        ))}
      </div>
    </>
  );
};
