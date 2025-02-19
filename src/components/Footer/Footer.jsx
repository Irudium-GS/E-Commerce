import React from 'react'
import './Footer.css'
import Footer_logo from '../Assets/logo.gif'
import instagram from '../Assets/instagram_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'
import pintester from '../Assets/pintester_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img style={{ width: '150px', height: '150px' }} src={Footer_logo} alt="logo" />
            <p>SPICY-Pi</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instagram} alt="Instagram" />
            </div>
            <div className="footer-icons-container">
                <img src={pintester} alt="Pintester" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp} alt="Whatsapp" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2025 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer;