import React, { useState } from "react";
import "./assets/scss/App.scss";
// import Layout
import Header from "./layout/Header/Header";
// Import Component
import TodoForm from "./components/TodoForm";
import TodoTask from "./layout/TodoTask/TodoTask";
import Placholder from "./layout/Placholder/Placholder";

function App() {
  // Use State object
  const [todos, setTodos] = useState([]);
  // addTask
  const addTask = (inputUser) => {
    if (inputUser) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: inputUser,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };
  // remove tasks
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };
  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  return (
    <div className="app">
      <div className="container-fluid">
        <div className="container">
          <Header />
          <TodoForm addTask={addTask} />
        </div>
      </div>
      <div className="container-main">
        <div className="container">
          <div className="count-task">
            Created Tasks
            <span className="count-task__count">{todos.length}</span>
          </div>
          {todos.length !== 0 ? (
            <div className="todo-list">
              {todos.map((todo) => {
                return (
                    <TodoTask key={todo.id}
                      todo={todo}
                      removeTask={removeTask}
                      toggleTask={handleToggle}
                    />
                );
              })}
            </div>
          ) : (
            <Placholder />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
