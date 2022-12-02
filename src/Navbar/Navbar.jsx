import React from 'react';
import './navbar.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/GS.png';

const Navbar = ({ colorOne, colorTwo }) => {
  console.log(colorOne, colorTwo);
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={Logo} className='logo-img' alt='Gradient swatch logo' />
        <span>
          <span style={{ color: `${colorOne}` }}>G</span>radient
          <span style={{ color: `${colorTwo}` }}>S</span>watch
        </span>
      </div>
      <div className='swatch'>
        <span>
          <span
            className='left-color'
            style={{ backgroundColor: `${colorOne}` }}></span>
          {colorOne}
        </span>
        <span>
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
        <span>
          <span
            className='right-color'
            style={{ backgroundColor: `${colorTwo}` }}></span>
          {colorTwo}
        </span>
      </div>
      <div className='social'>
        <span>
          <a
            href='https://github.com/vermilion4/gradient_website'
            target='_blank'>
            Source Code: <FontAwesomeIcon icon={faGithub} className='icon' />
          </a>
        </span>
        <span>
          <a href='https://twitter.com/what_is_a_swat' target='_blank'>
            Follow Me:
            <FontAwesomeIcon icon={faTwitter} className='icon twitter' />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
