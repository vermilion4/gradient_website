import React from 'react';
import ReactModal from 'react-modal';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = ({ content, showModal, modalStyle, handleCloseModal }) => {
  return (
    <section style={{ position: 'relative' }}>
      <ReactModal ariaHideApp={false} style={modalStyle} isOpen={showModal}>
        <button className='close-icon' onClick={handleCloseModal}>
          <FontAwesomeIcon icon={faClose} />
        </button>
        {content}
      </ReactModal>
    </section>
  );
};

export default Modal;
