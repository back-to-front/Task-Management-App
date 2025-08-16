import React from "react";
import "./TodoList.css";

export default function TodoItem({ todo, toggleTodo, removeTodo }) {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className='todo-content'>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className='todo-checkbox'
        />
        <span className='todo-text'>{todo.text}</span>
      </div>
      <button
        onClick={() => removeTodo(todo.id)}
        className='todo-delete-btn'
        aria-label='Delete task'
      >
        ×
      </button>
    </div>
  );
}
