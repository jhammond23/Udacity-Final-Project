import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(true);


  const onMouseEnter = () => {
    if (window.innerWidth < 1050) {
      setDropdown(false);
    } else {
      setDropdown(true);
      
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 1050) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <div className='logoContainer'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            MIRANDUS HUB
          </Link>
        </div>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>


          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>


          <li
            className='nav-item' 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Explore <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>


          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Creators
            </Link>
          </li>


          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Guilds
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;