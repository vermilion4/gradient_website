import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faClose } from '@fortawesome/free-solid-svg-icons';

const Overlay = ({ closeAll, showAll, handleCloseAll, handleShowAll }) => {
  return (
    <>
      <FontAwesomeIcon
        className='clickable'
        onClick={(closeAll && handleCloseAll) || (showAll && handleShowAll)}
        icon={(closeAll && faClose) || (showAll && faHamburger)}
      />
      <span
        className='clickable'
        onClick={(closeAll && handleCloseAll) || (showAll && handleShowAll)}>
        View all gradients
      </span>
    </>
  );
};

export default Overlay;
