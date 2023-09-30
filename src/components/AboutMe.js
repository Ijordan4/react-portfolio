import React from 'react';

function AboutMe() {
  return (
    <section className="container my-5">
      <h2>About Me</h2>
      <div className="row">
        <div className="col-md-6">
        <img
  src={process.env.PUBLIC_URL + '/assets/me.jpeg'}
  alt="Developer's Avatar"
  className="img-fluid rounded-circle"
/>
        </div>
        <div className="col-md-6">
          <p>
               I'm Isaiah Jordan, an innovative full-stack development student with a passion for
            breaking into the gaming industry. My journey involves creating exciting projects,
            developing new skills, and chasing the dream of becoming a game developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;