import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { BsArrowUpCircleFill } from 'react-icons/bs'
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className="social">
                    <li><FiInstagram /></li>
                    <li><FaTwitter /></li>
                    <li><FaFacebookF /></li>
                    <li><FaLinkedin /></li>
                </div>
                <div className="footer-desc">
                    <p>&copy; Pharmacy Store Ltd. 2022-2023, All Rights Reserved.</p>
                </div>
            </div>
            <Link to='#home' smooth className='move-up'><BsArrowUpCircleFill /></Link>
        </div>
    )
}

export default Footer;