// Resume.js
import React from 'react';

function Resume() {
  return (
    <section className="container my-5">
      <h2>Resume</h2>
      <p>
        <a
          href="https://drive.google.com/file/d/13Ypv1ci59N3qkr0o4ctym4KxKtTY7r9v/view?usp=drive_link" 
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Download Resume
        </a>
      </p>
      <h3>Proficiencies</h3>
      <ul>
        <li>React.js</li>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
        <li>Node.js</li>
        <li>Style.css</li>
      </ul>
    </section>
  );
}

export default Resume;
