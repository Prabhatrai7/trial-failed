import { useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {FaTimes, FaBars} from 'react-icons/fa'
import './Navbar.css';

const Navbar = () => {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
    };
    
    return (
        <div className='header'>
            <div className='logo'>
                <h1>Logo</h1>
            </div>
            <div className='navbar' ref={navRef}>
                <Link to='#home' smooth className='navItem'>Home</Link>
                <Link to='#services' smooth className='navItem'>Services</Link>
                <Link to='#products' smooth className='navItem'>Products</Link>
                <Link to='#contact' smooth className='navItem'>Contact Us</Link>
                <Link to='#findStore' smooth className='navItem'>Find our store</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
				</button>
			</div>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
        </div>
    )
}

export default Navbar;