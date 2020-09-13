import React, { Component } from 'react';
import '../css/contact.css';
import { SocialIcon } from 'react-social-icons';

class Contact extends Component {
    render() {
      return (
          <div className="contact">
            <div className="contact-flex-container">
              <section className="greeting">
                <div className="contact-title">
                  Say Hello
                </div>
                <div className="contact-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                </div>
              </section>
              <main className="contact-main">
                <div className="contact-email">
                  <a href="mailto:jajenningsiii@email.com"><SocialIcon network="email" /></a>
                </div>
                <div className="footer-icon">
                      <a href="https://www.instagram.com/d.freeman.art/" target="_blank" rel="noopener noreferrer"><SocialIcon network="instagram" color="#fff" /></a>
                  </div>
                <div className="contact-github">
                  <a href="https://github.com/josephjennings3" target="_blank" rel="noopener noreferrer"><SocialIcon network="github" /></a>
                </div>
              </main>
            </div>
          </div>
      );
    }
  }
  
  export default Contact;