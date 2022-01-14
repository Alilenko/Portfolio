import React from 'react'
import './nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav'>
            <NavLink exact activeClassName='nav__active' to='/' className='nav__link'>Contact</NavLink>
            <NavLink activeClassName='nav__active' to='/about' className='nav__link'>About</NavLink>
            <NavLink activeClassName='nav__active' to='/education' className='nav__link'>Education</NavLink>
            <NavLink activeClassName='nav__active' to='/project' className='nav__link'>Project</NavLink>
        </div>
    )
}

export default Nav
