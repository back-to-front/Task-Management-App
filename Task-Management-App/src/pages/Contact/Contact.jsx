import React from "react";
import { useForm } from "@formspree/react";
import "./Contact.css";
import SuccessMessage from "../../components/SuccessMessage/SuccessMessage";
import FAQSection from "../../components/FAQ/FAQSection";

export default function Contact() {
  const [state, handleSubmitFormspree] = useForm("mwpqzjdl");
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitFormspree(formData)
      .then(() => {
        // Reset form after submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
        // Show success message
        setShowSuccess(true);
      })
      .catch((error) => {
        console.error("Form submission error:", error);
      });
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <div className='contact-page'>
      <div className='contact-container'>
        <header className='contact-header'>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Send us a message!</p>
        </header>

        {showSuccess ? (
          <SuccessMessage
            onClose={handleCloseSuccess}
            message="Thanks for reaching out! We'll get back to you soon."
          />
        ) : (
          <form className='contact-form' onSubmit={handleSubmit}>
            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor='firstName' className='form-label'>
                  First Name
                </label>
                <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className='form-input'
                  placeholder='Enter your first name'
                  required
                />
              </div>

              <div className='form-group'>
                <label htmlFor='lastName' className='form-label'>
                  Last Name
                </label>
                <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className='form-input'
                  placeholder='Enter your last name'
                  required
                />
              </div>
            </div>

            <div className='form-group'>
              <label htmlFor='email' className='form-label'>
                Email Address
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                className='form-input'
                placeholder='Enter your email address'
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='message' className='form-label'>
                Message
              </label>
              <textarea
                type='text'
                id='message'
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                className='form-textarea'
                placeholder='Enter your message'
                rows='5'
                required
              />
            </div>

            <button
              type='submit'
              className='submit-btn'
              disabled={
                !formData.firstName ||
                !formData.lastName ||
                !formData.email ||
                !formData.message
              }
            >
              Send Message
            </button>
          </form>
        )}
      </div>
      <FAQSection />
    </div>
  );
}
