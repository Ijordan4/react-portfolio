import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className="bg-primary text-white py-3">
      <div className="container">
        <h1>Isaiah's Portfolio</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/Ijordan4?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://drive.google.com/file/d/13Ypv1ci59N3qkr0o4ctym4KxKtTY7r9v/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/isaiah-jordan-0502241a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                LinkedIn
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.youtube.com/channel/UCijDVC5t8BEsEY03zdHYQzg"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                YouTube
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.tiktok.com/@notthattacticalgamer"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                TikTok
              </a>
            </li>
            <li className="nav-item">
              <a
                href="mailto:isaiahjordan200@gmail.com"
                className="nav-link"
              >
                Email
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;