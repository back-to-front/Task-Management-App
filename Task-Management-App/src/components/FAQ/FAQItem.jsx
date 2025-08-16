import "./FAQ.css";

export default function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className='faq-item'>
      <button
        className={`faq-question ${isOpen ? "active" : ""}`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className='faq-question-text'>{question}</span>
        <span className={`faq-icon ${isOpen ? "rotate" : ""}`}>▼</span>
      </button>
      <div className={`faq-answer ${isOpen ? "open" : ""}`}>
        <div className='faq-answer-content'>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
