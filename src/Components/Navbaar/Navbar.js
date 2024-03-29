import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [showImage, setShowImage] = useState(false);
  const location = useLocation(); // React Router's useLocation hook

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setShowImage(true);
      } else {
        setShowImage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Reset menu state on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);
  return (
    <>
    <nav  className={showImage? "navbar active" : "navbar "}>
      <div className="navbar-container">
      <Link to="/" className='navbar-logo'>
          <img src='https://res.cloudinary.com/ddkyeuhk8/image/upload/v1702117256/sibztxkzea6bxtod0ehf.png' alt='logo' />
        </Link>
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul ref={menuRef} className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>


        
          <li class="nav-item dropdown">
  <div class="nav-link" onclick="toggleDropdown()">
  Services
  </div>
  <div class="dropdown-menu" id="dropdownMenu">
   <Link to='/web' onClick={closeMenu} onTouchStart={closeMenu} style={{textDecoration:'none'}}>  <div class="dropdown-item" >Web Development</div> </Link>
   <Link to='/android-app' onClick={closeMenu} style={{textDecoration:'none'}}> <div class="dropdown-item" >Android App Development</div></Link>
   <Link to='/ios-app' onClick={closeMenu} style={{textDecoration:'none'}}><div class="dropdown-item" >IOS App Development</div></Link>
   <Link to='/ottapp' onClick={closeMenu} style={{textDecoration:'none'}}><div class="dropdown-item" >OTT/TV Apps</div></Link>
   <Link to='/testing' onClick={closeMenu} style={{textDecoration:'none'}}><div class="dropdown-item" >Testing & QA</div></Link>
   <Link to='/ui-desgin' onClick={closeMenu} style={{textDecoration:'none'}}><div class="dropdown-item" >UI/UX Design</div></Link>
   <Link to='/software' onClick={closeMenu} style={{textDecoration:'none'}}><div class="dropdown-item" >Software Development</div></Link>


   <Link to='/digital-marketing' onClick={closeMenu} style={{textDecoration:'none'}}><div class="dropdown-item" >Digital Marketing</div></Link> 
 

  </div>
  
</li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link" onClick={() => setMenuOpen(false)}>
            portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/career" className="nav-link" onClick={() => setMenuOpen(false)}>
            Career
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link" onClick={() => setMenuOpen(false)}>
              Blog
            </Link> </li>
            <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
              About Us
            </Link> </li>

            <Link to="/contact-us" className="decor" onClick={() => setMenuOpen(false)}>

         <span className="bn632-hover bn27">
            
             <p>Contect Us</p> 
          
            </span>
            </Link>
        </ul>
      </div>
    </nav>
</>
  );
};

export default Navbar