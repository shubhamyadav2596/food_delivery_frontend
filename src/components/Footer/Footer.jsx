import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div  className='footer' id='footer'>
      <div className="footer-content">
          <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deserunt consectetur necessitatibus ex praesentium. Hic alias voluptatibus enim quibusdam ratione.</p>
            <div className="footer-social-icons">
               <img src={assets.facebook_icon} alt="" />
               <img src={assets.twitter_icon} alt="" />
               <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>
          <div className="footer-content-center">
             <h2>Company</h2>
             <ul>
               <li>Home</li>
               <li>About us</li>
               <li>Delivery</li>
               <li>Privacy Policy</li>
             </ul> 
          </div>
          <div className="footer-content-right">
            <h2>Get in touch</h2>
            <ul>
             <li>+91 7854698745</li>
             <li>contact@tomato.com</li>
            </ul>
          </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 @ Yomato.com - All rights reserve</p>
    </div>
  )
}

export default Footer