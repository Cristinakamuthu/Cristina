import React from 'react';
import Navbar from './Navbar';

const Contacts = () => {
  return (
    <div className="home-page">
      <header>
        <Navbar />
      </header>
<div className='box-stuff'>
      <div className="contacts-container">
        <h1 className="contacts-title">Here are my contacts</h1>

        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:nyawiracristina07@gmail.com">
            nyawiracristina07@gmail.com
          </a>
        </p>

        <p>
          <strong>Phone Number:</strong>{' '}
          <a href="tel:+254799449124">+254 799 449 124</a>
        </p>

        <p>
          <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/Cristinakamuthu"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Cristinakamuthu ↗
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/cristina-kamuthu-b60447369/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/cristina-kamuthu ↗
          </a>
        </p>
      </div>
      </div>
    </div>
  );
};

export default Contacts;
