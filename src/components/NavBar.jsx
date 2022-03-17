import React from 'react';
import { Link } from 'react-router-dom';

const pages = [
  {
    text: 'Home', 
    path: '/'
  }, 
  {
    text: 'Browse', 
    path: '/browse'
  }, 
  {
    text: 'About', 
    path: '/about'
  }];

const NavBar = () => {
  return (
    <header>
        <div className='header-logo'>
            <a href='#'>Website</a>
        </div>
        <input type='checkbox' id='toggle-nav'/>
        <label htmlFor='toggle-nav' className='show-nav-menu'>Boton</label>

        <nav>
            <ul>
            {pages.map((page, i) => (
              <li key={i}><Link to={page.path}>{page.text}</Link></li>
            ))}
            </ul>
        </nav>
    </header>
  );
}
export default NavBar;
//Based from https://www.markuptag.com/responsive-navbar-with-html-css-without-bootstrap/