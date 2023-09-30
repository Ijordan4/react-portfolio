import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Contact</h4>
            <p>Email: <a href="mailto:isaiahjordan200@gmail.com" className="text-white">isaiahjordan200@gmail.com</a></p>
          </div>
          <div className="col-md-6">
            <h4>Connect</h4>
            <a
              href="https://www.linkedin.com/in/isaiah-jordan-0502241a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;