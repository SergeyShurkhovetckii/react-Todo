import React from "react";
import classes from "./TodoTask.module.scss";

const TodoTask = ({ todo, removeTask, toggleTask }) => {
  return (
    <div key={todo.id} className={classes.task}>
      <div className={classes.wrapper}>
        <div
          className={todo.complete ? "strike" : ""}
          onClick={() => toggleTask(todo.id)}
        >
          {todo.task}
        </div>
        <div
          onClick={() => removeTask(todo.id)}
          className={classes.deleteButton}
        ></div>
      </div>
    </div>
  );
};

export default TodoTask;
