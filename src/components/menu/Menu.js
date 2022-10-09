import React from 'react';
import { NavLink } from 'react-router-dom';
import close from '../../assets/shared/icon-close.svg';
import './menu.scss';

export default function Menu({ setMenu, menu }) {

  return (
    <div className='menuContainer' style={{right: menu ? '0' : '-300px'}}>
        <button className='closeBtn' onClick={() => {
            setMenu(false);
        }}>
            <img className='close' src={close} alt='close menu' />
        </button>
        <ul className='navLinks'>
            <li>
                <NavLink to='/' className='link' end><span className='number'>00 </span>HOME</NavLink>
                
            </li>
            <li>
                <NavLink to='/destination' className='link'><span className='number'>01 </span>DESTINATION</NavLink>
                
            </li>
            <li>
                <NavLink to='/crew' className='link'><span className='number'>02 </span>CREW</NavLink>
                
            </li>
            <li>
                <NavLink to='/technology' className='link'><span className='number'>03 </span>TECHNOLOGY</NavLink>
                
            </li>
        </ul>
    </div>
  )
}
