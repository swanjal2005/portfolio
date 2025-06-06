import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaInstagramSquare, FaMailBulk, FaTwitter,FaLinkedin, FaVoicemail } from "react-icons/fa";

function Navbar() {
  return (
    <div className='navbar fade-in-left' >
      <div className='icons' style={{ display: 'flex', gap: '20px', fontSize: '2rem', color: 'white' }} >
        <FaEnvelope />
        <h2>swanjalsingh@gmail.com</h2>
      </div>
      <div className='icons' style={{ display: 'flex', gap: '20px', fontSize: '2rem', color: 'white' }}>

        
        <div>
          <a
            href="https://www.instagram.com/swanjal_thakurr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} color="#E1306C" />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/swanjal-singh-47273b338/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} color="#0A66C2" />
          </a>
        </div>


      </div>
    </div>

  );
}

export default Navbar