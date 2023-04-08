import React from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";
import { useState } from "react";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    { id: 1, title: "ăn", status: "new" },
    { id: 1, title: "ngủ", status: "completed" },
    { id: 1, title: "chạy", status: "new" },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const handleTodoList = (todo, idx) => {
    const newTodoList = [...todoList];
    console.log(todo, idx);

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={todoList} onTodoList={handleTodoList} />
    </div>
  );
}

export default TodoFeature;
