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

        {width > 1439 ? <hr className='line' /> : null}

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
                    >{width > 1439 ? <span className='number'>00 </span> : ''}HOME</NavLink>
                </li>
                <li>
                    <NavLink
                    style={({ isActive }) =>
                        isActive ? activeStyle : null
                    }       
                    className='link'
                        to='/destination'
                    >{width > 1439 ? <span className='number'>01 </span> : ''}DESTINATION</NavLink>
                </li>
                <li>
                    <NavLink
                    style={({ isActive }) =>
                        isActive ? activeStyle : null
                    }       
                    className='link'
                        to='/crew'
                    >{width > 1439 ? <span className='number'>02 </span> : ''}CREW</NavLink>
                </li>
                <li>
                    <NavLink
                    style={({ isActive }) =>
                        isActive ? activeStyle : null
                    }       
                    className='link'
                        to='/technology'
                    >{width > 1439 ? <span className='number'>03 </span> : ''}TECHNOLOGY</NavLink>
                </li>
            </ul>}
        </div>
    </nav>
  )
}
