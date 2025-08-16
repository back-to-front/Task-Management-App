import React, { useState } from "react";
import FAQItem from "./FAQItem";
import "./FAQ.css";

export default function FAQSection() {
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      id: 1,
      question: "How do I create a new task?",
      answer:
        "Simply type your task in the input field on the home page and click 'Add Task' or press Enter. Your task will be immediately added to your list.",
    },
    {
      id: 2,
      question: "Can I edit my tasks after creating them?",
      answer:
        "Yes! Click on the little pencil icon next to the task to edit it. After editing simply click the check mark button or hit enter.",
    },
    {
      id: 3,
      question: "How do I mark a task as complete?",
      answer:
        "Click the checkbox next to any task to mark it as complete. Completed tasks will have a strikethrough effect and appear grayed out.",
    },
    {
      id: 4,
      question: "Will my tasks be saved when I close the browser?",
      answer:
        "Yes! Your tasks are automatically saved to your browser's local storage, so they'll be there when you return to the app later.",
    },
    {
      id: 5,
      question: "How do I filter my tasks?",
      answer:
        "Use the filter buttons above your task list to view 'All' tasks, only 'Active' (incomplete) tasks, or only 'Completed' tasks.",
    },
    {
      id: 6,
      question: "Can I use this app on my mobile device?",
      answer:
        "Absolutely! The Task Manager app is fully responsive and works great on smartphones, tablets, and desktop computers.",
    },
    {
      id: 7,
      question: "Is my data secure?",
      answer:
        "Your tasks are stored locally on your device using browser local storage. We don't collect or store your personal data on our servers.",
    },
    {
      id: 8,
      question: "What browsers are supported?",
      answer:
        "The app works on all modern browsers including Chrome, Firefox, Safari, and Edge. Make sure your browser has JavaScript enabled.",
    },
  ];

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className='faq-section'>
      <div className='faq-container'>
        <div className='faq-header'>
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about using Task Manager</p>
        </div>
        <div className='faq-list'>
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openItems[item.id] || false}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
