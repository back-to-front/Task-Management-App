import React, { useState } from "react";
import "./TodoList.css";

export default function TodoItem({ todo, toggleTodo, removeTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, editText);
      setIsEditing(false);
    } else {
      setIsEditing(true);
      setEditText(todo.text);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      editTodo(todo.id, editText);
      setIsEditing(false);
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className='todo-content'>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className='todo-checkbox'
        />
        {isEditing ? (
          <input
            type='text'
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyPress}
            onBlur={handleCancel}
            className='todo-edit-input'
            autoFocus
          />
        ) : (
          <span className='todo-text' onDoubleClick={handleEdit}>
            {todo.text}
          </span>
        )}
      </div>
      <div className='todo-actions'>
        {isEditing ? (
          <>
            <button
              onClick={handleEdit}
              className='todo-save-btn'
              aria-label='Save task'
            >
              ✓
            </button>
            <button
              onClick={handleCancel}
              className='todo-cancel-btn'
              aria-label='Cancel edit'
            >
              ×
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEdit}
              className='todo-edit-btn'
              aria-label='Edit task'
            >
              ✏️
            </button>
            <button
              onClick={() => removeTodo(todo.id)}
              className='todo-delete-btn'
              aria-label='Delete task'
            >
              ×
            </button>
          </>
        )}
      </div>
    </div>
  );
}
