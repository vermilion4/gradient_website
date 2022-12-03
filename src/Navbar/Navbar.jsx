import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';
import './navbar.css';
import {
  faArrowRight,
  faPlusCircle,
  faClipboard,
  faHamburger,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/GS.png';
import { useState, useEffect } from 'react';
import Modal from '../Modal';

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
}) => {
  const [showCssModal, setShowCssModal] = useState(false);
  const [showGradientModal, setShowGradientModal] = useState(false);

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
  const codeBlock = `
  background: ${colorOne}; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, ${colorOne}, ${colorTwo}); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, ${colorOne}, ${colorTwo}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */`;

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

  let modalStyle = {};
  width > 600
    ? (modalStyle = {
        overlay: {
          backgroundColor: 'rgba(22, 21, 21, 0.222)',
          zIndex: '20',
        },
        content: {
          position: 'absolute',
          top: '25%',
          left: '20%',
          right: '20%',
          bottom: '20%',
          transition: 'all 0.7s ease-in-out',
          overflowY: 'visible',
        },
      })
    : (modalStyle = {
        overlay: {
          backgroundColor: 'rgba(22, 21, 21, 0.222)',
          zIndex: '20',
        },
        content: {
          position: 'absolute',
          top: '150px',
          left: '20px',
          right: '20px',
          transition: 'all 0.7s ease-in-out',
          overflowY: 'visible',
        },
      });

  return (
    <div className='navbar'>
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
            <span>
              <a
                href='https://github.com/vermilion4/gradient_website_v2'
                target='_blank'>
                Source Code:{' '}
                <FontAwesomeIcon icon={faGithub} className='icon' />
              </a>
            </span>
            <span>
              <a href='https://twitter.com/what_is_a_swat' target='_blank'>
                Follow Me:
                <FontAwesomeIcon icon={faTwitter} className='icon twitter' />
              </a>
            </span>
          </div>
        </nav>
      </div>
      <div className='bottom-nav'>
        <div className='bottom-nav-content'>
          <div className='viewall'>
            {showOverlay ? (
              <>
                <FontAwesomeIcon
                  className='clickable'
                  onClick={handleCloseAll}
                  icon={faClose}
                />
                <span className='clickable' onClick={handleCloseAll}>
                  View all gradients
                </span>
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  className='clickable'
                  onClick={handleShowAll}
                  icon={faHamburger}
                />
                <span className='clickable' onClick={handleShowAll}>
                  View all gradients
                </span>
              </>
            )}
          </div>
          <div className='action-btns'>
            <button onClick={handleOpenGradientModal} className='add'>
              Add Gradient <FontAwesomeIcon icon={faPlusCircle} />
            </button>

            <Modal
              content={
                <div className='add-gradient'>
                  <h2>Add Gradient</h2>
                  <label htmlFor='from'>From:</label>
                  <div className='from-input'>
                    <input
                      id='from'
                      type='text'
                      onChange={(e) => setFromColor(e.target.value)}
                      placeholder='e.g: #fff'
                    />
                    <span
                      className='from-color'
                      style={{ backgroundColor: `${fromColor}` }}></span>
                  </div>
                  <label htmlFor='to'>To:</label>
                  <div className='to-input'>
                    <input
                      id='to'
                      type='text'
                      onChange={(e) => setToColor(e.target.value)}
                      placeholder='e.g: #000'
                    />
                    <span
                      className='to-color'
                      style={{ backgroundColor: `${toColor}` }}></span>
                  </div>
                  <label htmlFor='color-name'>Unique Name</label>
                  <input
                    id='to'
                    type='text'
                    onChange={(e) => setColorName(e.target.value)}
                    placeholder='e.g: Daring Red'
                  />
                  <button onClick={handleAdd}>Save</button>
                </div>
              }
              showModal={showGradientModal}
              modalStyle={modalStyle}
              handleCloseModal={handleCloseGradientModal}
            />
            <button onClick={handleOpenCssModal} className='copy'>
              Copy CSS <FontAwesomeIcon icon={faClipboard} />
            </button>
            <Modal
              content={
                <div className='copy-css'>
                  <h2>Copy CSS code</h2>
                  <CopyBlock
                    text={codeBlock}
                    language='javascript'
                    theme={dracula}
                    wrapLines
                  />
                  <button
                    onClick={(e) => {
                      navigator.clipboard.writeText(codeBlock);
                    }}>
                    Copy to Clipboard
                  </button>
                </div>
              }
              showModal={showCssModal}
              modalStyle={modalStyle}
              handleCloseModal={handleCloseCssModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
