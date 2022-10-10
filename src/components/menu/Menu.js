import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import close from '../../assets/shared/icon-close.svg';
import './menu.scss';

import { AppContext } from '../../context';

export default function Menu() {

    const { store } = useContext(AppContext);

  return (
    <div className='menuContainer' style={{right: store.menu ? '0' : '-300px'}}>
        <button className='closeBtn' onClick={store.close}>
            <img className='close' src={close} alt='close menu' />
        </button>
        <ul className='navLinks'>
            <li>
                <NavLink to='/'  onClick={store.close} className='link' end><span className='number'>00 </span>HOME</NavLink>
                
            </li>
            <li>
                <NavLink to='/destination'  onClick={store.close} className='link'><span className='number'>01 </span>DESTINATION</NavLink>
                
            </li>
            <li>
                <NavLink to='/crew'  onClick={store.close} className='link'><span className='number'>02 </span>CREW</NavLink>
                
            </li>
            <li>
                <NavLink to='/technology'  onClick={store.close} className='link'><span className='number'>03 </span>TECHNOLOGY</NavLink>
                
            </li>
        </ul>
    </div>
  )
}
