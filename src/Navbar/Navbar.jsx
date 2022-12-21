import React from 'react';

import './navbar.css';
import {
  faArrowRight,
  faPlusCircle,
  faClipboard,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/GS.png';
import { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Overlay from '../components/Overlay';

const Navbar = ({
  handleShowAll,
  handleCloseAll,
  handleAdd,
  colorOne,
  colorTwo,
  fromColor,
  toColor,
  setFromColor,
  setToColor,
  setColorName,
  showOverlay,
  showCssModal,
  setShowCssModal,
  showGradientModal,
  setShowGradientModal,
}) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleOpenCssModal = () => {
    setShowCssModal(true);
  };
  const handleCloseCssModal = () => {
    setShowCssModal(false);
  };
  const handleOpenGradientModal = () => {
    setShowGradientModal(true);
  };
  const handleCloseGradientModal = () => {
    setShowGradientModal(false);
  };
  const socialArr = [
    {
      id: 1,
      link: 'https://github.com/vermilion4/gradient_website/tree/day-2',
      text: 'Source Code',
      icon: faGithub,
      classname: 'icon',
    },
    {
      id: 2,
      link: 'https://twitter.com/what_is_a_swat',
      text: 'Follow Me',
      icon: faTwitter,
      classname: 'icon twitter',
    },
  ];

  const getWidth = () => {
    return window.innerWidth;
  };
  useEffect(() => {
    function handleWindowResize() {
      setWidth(getWidth());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  let modalStyle = {
    overlay: {
      backgroundColor: 'rgba(22, 21, 21, 0.222)',
      zIndex: '20',
    },
  };
  width > 600
    ? (modalStyle = {
        ...modalStyle,
        content: {
          height: 'fit-content',
          transition: 'all 0.7s ease-in-out',
          overflowY: 'visible',
          maxWidth: '600px',
          margin: 'auto',
        },
      })
    : (modalStyle = {
        ...modalStyle,
        content: {
          height: 'fit-content',
          transition: 'all 0.7s ease-in-out',
          overflowY: 'visible',
          width: '80%',
          margin: 'auto',
          maxWidth: '500px',
        },
      });

  return (
    <div className='navbar'>
      <ToastContainer />
      <div className='top-nav'>
        <nav>
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
            {socialArr.map((social) => {
              const { id, link, text, icon, classname } = social;
              return (
                <a key={id} href={link} target='_blank' rel='noreferrer'>
                  {text}: <FontAwesomeIcon icon={icon} className={classname} />
                </a>
              );
            })}
          </div>
        </nav>
      </div>
      <div className='bottom-nav'>
        <div className='bottom-nav-content'>
          <div className='viewall'>
            {showOverlay ? (
              <Overlay closeAll handleCloseAll={handleCloseAll} />
            ) : (
              <Overlay showAll handleShowAll={handleShowAll} />
            )}
          </div>
          <div className='action-btns'>
            <button onClick={handleOpenGradientModal} className='add'>
              Add Gradient <FontAwesomeIcon icon={faPlusCircle} />
            </button>

            <Modal
              add
              showModal={showGradientModal}
              modalStyle={modalStyle}
              handleCloseModal={handleCloseGradientModal}
              handleAdd={handleAdd}
              fromColor={fromColor}
              toColor={toColor}
              setFromColor={setFromColor}
              setToColor={setToColor}
              setColorName={setColorName}
            />
            <button onClick={handleOpenCssModal} className='copy'>
              Copy CSS <FontAwesomeIcon icon={faClipboard} />
            </button>
            <Modal
              copy
              showModal={showCssModal}
              modalStyle={modalStyle}
              handleCloseModal={handleCloseCssModal}
              colorOne={colorOne}
              colorTwo={colorTwo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
