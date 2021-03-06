import React, { Component } from 'react';
import '../css/footer.css';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
          <div className="footer-container">
              <section className="footer-contact">
                  <div className="footer-icon">
                      <a href="mailto:jajenningsiii@email.com" rel="noopener noreferrer"><SocialIcon network="email" color="#fff" style={{ height: 30, width: 30 }}/></a>
                  </div>
                  <div className="footer-icon">
                      <a href="https://www.instagram.com/d.freeman.art/" target="_blank" rel="noopener noreferrer"><SocialIcon network="instagram" color="#fff" style={{ height: 30, width: 30 }}/></a>
                  </div>
                  <div className="footer-icon">
                      <a href="https://github.com/josephjennings3" target="_blank" rel="noopener noreferrer"><SocialIcon network="github" color="#fff" style={{ height: 30, width: 30 }} /></a>
                  </div>
              </section>
              <section className="signature">
                  <div className="credit">
                      <a href= "https://www.josephjennings3.com/" target="_blank">
                        Developed by Joseph Jennings III
                        </a>
                  </div>
              </section>
          </div>
      </div>
    );
  }
}

export default Footer;