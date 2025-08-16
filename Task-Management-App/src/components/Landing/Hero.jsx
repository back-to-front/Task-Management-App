import React from "react";
import { Link } from "react-router";
import "./Landing.css";

export default function Hero() {
  return (
    <section className='hero-section'>
      <div className='hero-container'>
        <div className='hero-content'>
          <h1 className='hero-title'>
            Organize Your Life with{" "}
            <span className='hero-highlight'>Task Manager</span>
          </h1>
          <p className='hero-description'>
            Stay productive and organized with our simple yet powerful task
            management app. Create, track, and complete your todos with ease.
          </p>
          <div className='hero-buttons'>
            <Link to='/todo' className='hero-btn primary'>
              Get Started
            </Link>
            <Link to='/contact' className='hero-btn secondary'>
              Learn More
            </Link>
          </div>
        </div>
        <div className='hero-image'>
          <div className='hero-card'>
            <div className='demo-todo-item completed'>
              <div className='demo-checkbox checked'></div>
              <span>Plan weekend trip</span>
            </div>
            <div className='demo-todo-item'>
              <div className='demo-checkbox'></div>
              <span>Finish project proposal</span>
            </div>
            <div className='demo-todo-item'>
              <div className='demo-checkbox'></div>
              <span>Buy groceries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
