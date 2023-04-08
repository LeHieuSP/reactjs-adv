import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import classNames from "classnames";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoList: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoList: null,
};

function TodoList(props) {
  const { todoList } = props;
  const { onTodoList } = props;

  const handleTodoList = (todo, idx) => {
    if (!onTodoList) return;

    onTodoList(todo, idx);
  };

  return (
    <ul className="todo-list">
      {todoList.map((todo, idx) => (
        <li
          key={todo.id}
          className={classNames({
            completed: todo.status === "completed",
          })}
          onClick={() => handleTodoList(todo, idx)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
