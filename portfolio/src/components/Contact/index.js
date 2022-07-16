import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
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
  };
 
  return (
    <section className='field container pt-6' data-testid="h1tag">
      <h1 className='has-text-centered title m-6 has-text-black' data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label className='label mt-4' htmlFor="name">Name:</label>
          <input className='input' type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label className='label mt-4' htmlFor="email">Email address:</label>
          <input className='input' type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label className='label mt-4' htmlFor="message">Message:</label>
          <textarea className='textarea' name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className='button is-black mt-6' data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
