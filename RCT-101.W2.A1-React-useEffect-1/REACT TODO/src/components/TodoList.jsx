import { TodoItem } from "./TodoItem";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./TodoList.css";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";

export const TodoList = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    getTodos(page);
  }, [page]);

  const getTodos = (page) => {
    fetch(`http://localhost:8080/todos?_page=${page}&_limit=5`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        setTodos(data);
      });
  };

  const createTodos = (text) => {
    const payload = {
      id: uuid(),
      value: text,
      isCompleted: false,
    };

    fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        getTodos();
      });
  };

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  const onKeyPress = (e) => {
    if (text !== "") {
      if (e.key === "Enter") {
        createTodos(text);
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
        onClick={() => createTodos(text)}
      >
        Add Todo
      </button>

      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
      </div>

      <h3 className="pagination-page">Page : {page}</h3>
      <button
        className="pagination-btn"
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
      >
        <FaLessThan />
      </button>

      <button className="pagination-btn" onClick={() => setPage(page + 1)}>
        <FaGreaterThan />
      </button>
    </>
  );
};
