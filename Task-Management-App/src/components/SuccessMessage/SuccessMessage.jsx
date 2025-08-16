import React from "react";
import "./SuccessMessage.css";

const SuccessMessage = ({
  onClose,
  message = "Your form has been successfully submitted!",
}) => {
  return (
    <div className='success-message'>
      <div className='success-icon'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M5 13l4 4L19 7'
          />
        </svg>
      </div>
      <h2 className='success-title'>Thank You!</h2>
      <p>{message}</p>
      <button onClick={onClose} className='return-btn'>
        Back to Form
      </button>
    </div>
  );
};

export default SuccessMessage;
