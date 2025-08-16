import { useState } from "react";
import "./TodoList.css";

export default function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput(""); // Clear input after submission
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Add a new task...'
        className='todo-input'
      />
      <button type='submit' className='todo-button'>
        Add Task
      </button>
    </form>
  );
}
