import React, { useState, useEffect } from 'react';
import logo from '../../assets/shared/logo.svg';
import burger from '../../assets/shared/icon-hamburger.svg';
import './navbar.scss';
import { NavLink } from 'react-router-dom';


export default function Navbar() {

    const [width, setWidth] = useState(window.innerWidth);

    let activeStyle = {
        textDecoration: 'underline',
        textUnderlineOffset: `${37}px`,
        textDecorationThickness: '3px'
    }

    const windowResize = () => {
        const {innerWidth} = window;

        return innerWidth;
    }

    useEffect(() => {
        const resizeHandler = () => {
            setWidth(windowResize());
        }

        window.addEventListener('resize', resizeHandler)

        return () => {
            console.log(width)
            window.removeEventListener('resize', resizeHandler);
        }
    }, []);

  return (
    <nav className='navbar'>
        <div className='logoContainer'>
            <img src={logo} alt='space logo' />
        </div>

        <div className='navMenu'>
            {width < 768 ? <button className='menuBtn'>
                <img src={burger} alt='menu button' />
            </button> : 
            <ul className='navLinks'>
                <li>
                    <NavLink
                    style={({ isActive }) =>
                        isActive ? activeStyle : null
                    }       
                    className='link'
                        to='/'
                    >HOME</NavLink>
                </li>
                <li>
                    <NavLink
                    style={({ isActive }) =>
                        isActive ? activeStyle : null
                    }       
                    className='link'
                        to='/destination'
                    >DESTINATION</NavLink>
                </li>
                <li>
                    <NavLink
                    style={({ isActive }) =>
                        isActive ? activeStyle : null
                    }       
                    className='link'
                        to='/crew'
                    >CREW</NavLink>
                </li>
                <li>
                    <NavLink
                    style={({ isActive }) =>
                        isActive ? activeStyle : null
                    }       
                    className='link'
                        to='/technology'
                    >TECHNOLOGY</NavLink>
                </li>
            </ul>}
        </div>
    </nav>
  )
}
