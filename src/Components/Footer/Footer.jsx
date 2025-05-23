import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.jpg'
import instagram_icon from '../Assets/ilogo.jfif'
import pinterest from '../Assets/pin.png'
import whatsup from '../Assets/whatsapp.jfif'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>VastraVogue</p>
        </div>

        <ul className="footer-link">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsup} alt="" />
            </div>

        </div>
        <div className="footer-copyright">
            <hr></hr>
            <p>Copyright @ 2024-All Right Reserver</p>
        </div>

      
    </div>
  )
}

export default Footer
