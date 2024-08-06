import React from 'react'
import github_logo from '../Assets/github.png';
import '../Style/Contact.css';
import instagram_logo from '../Assets/instagram.png';
import linkedin_logo from '../Assets/Linkedin.png';

export default function Contact() {
  return (
    <div className="contact">
        <div className="contact-images">
            <a href="https://github.com/Lewi217" target="_blank" rel="noopener noreferrer">
                <img src={github_logo} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/wanjohi-lewis-5069a1298/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin_logo} alt="linkedin" />
            </a>
            <a href="https://www.instagram.com/wanjohi_lewi/" target="_blank" rel="noopener noreferrer">
                <img src={instagram_logo} alt="instagram" />
            </a>
        </div>
    </div>
  )
}