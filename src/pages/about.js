import React from 'react';
import daniellefreeman from '../images/daniellefreeman.jpg';
import '../css/about.css';

function About() {
  return (
    <div className="about">
      <img src={daniellefreeman} alt="Danielle Freeman's Picture" />
      <h1>Lorem Ipsum</h1>
      <p className="about-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      </p>
    </div>
  );
}

export default About;