import React from "react";
import TodoList from "../components/TodoList/TodoList";
import "./Home.css";

export default function Home() {
  return (
    <div className='home-container'>
      <div className='home-content'>
        <div className='home-header'>
          <h1>Task Manager</h1>
          <p>Organize, track, and complete your tasks efficiently</p>
        </div>
        <TodoList />
      </div>
    </div>
  );
}
