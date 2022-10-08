import React from 'react';
import logo from '../../assets/shared/logo.svg';
import burger from '../../assets/shared/icon-hamburger.svg';
import './navbar.scss';


export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className='logoContainer'>
            <img src={logo} alt='space logo' />
        </div>

        <div className='navMenu'>
            <button className='menuBtn'>
                <img src={burger} alt='menu button' />
            </button>
        </div>
    </nav>
  )
}
