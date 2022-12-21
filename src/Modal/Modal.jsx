import React from 'react';
import ReactModal from 'react-modal';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CopyBlock, dracula } from 'react-code-blocks';
import { toast } from 'react-toastify';

const Modal = ({
  add,
  copy,
  showModal,
  modalStyle,
  handleCloseModal,
  handleAdd,
  colorOne,
  colorTwo,
  fromColor,
  toColor,
  setFromColor,
  setToColor,
  setColorName,
}) => {
  const codeBlock = `
  background: ${colorOne}; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, ${colorOne}, ${colorTwo}); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, ${colorOne}, ${colorTwo}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */`;

  return (
    <section style={{ position: 'relative' }}>
      <ReactModal ariaHideApp={false} style={modalStyle} isOpen={showModal}>
        <button className='close-icon' onClick={handleCloseModal}>
          <FontAwesomeIcon icon={faClose} />
        </button>
        {(add && (
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
        )) ||
          (copy && (
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
                  toast.success('Copied!');
                  handleCloseModal();
                }}>
                Copy to Clipboard
              </button>
            </div>
          ))}
      </ReactModal>
    </section>
  );
};

export default Modal;
