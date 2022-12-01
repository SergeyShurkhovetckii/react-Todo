import React, { useState } from "react";
import "../assets/scss/input.scss";
import "../assets/scss/btn.scss";

const TodoForm = ({addTask}) => {
  const [inputUser, setInputUser] = useState("");

  // Поле ввода управляемое
  const headlerChange = (event) => {
    setInputUser(event.currentTarget.value)
  };
  // Функция отправки формы
  const headlerSubmit = (event) => {
    event.preventDefault();
    addTask(inputUser);
    setInputUser("");
  };
  const hendlerKeyPress = (e) => {
    if(e.key === 'Enter') {
        headlerSubmit(e)
    }
};

  return (
    <form className="form" onSubmit={headlerSubmit}>
      <input
        className="input-add"
        type="text"
        placeholder="Add ToDo"
        onChange={headlerChange}
        value={inputUser}
        onKeyDown={hendlerKeyPress}
      />
      <button className="btn">Add</button>
    </form>
  );
};

export default TodoForm;
