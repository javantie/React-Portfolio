import React, { useState } from 'react';

import { validateEmail } from '../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className="shadow-lg border-2 w-3/6 mt-4 ml-4 p-2 font-semibold text-lg rounded-lg">
      <h1>Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input className="border border-black ml-2 rounded" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input className="border border-black ml-2 rounded mt-2" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="mb-2">
          <label htmlFor="message">Message:</label>
          <textarea className="border border-black ml-2 rounded mt-2 w-7/12"  name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className="text-xl font-bold text-white px-2 rounded-lg pb-1 mt-4 bg-blue-800" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
