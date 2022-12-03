import React from 'react';
import { ColorRing } from 'react-loader-spinner';
import Logo from '../assets/GS.png';
import './Loader.css';

const Loader = () => {
  return (
    <div className='loader'>
      <div className='loader-content'>
        <img src={Logo} className='logo-img' alt='Gradient swatch logo' />
        <div className='loader-logo'>GradientSwatch</div>
        <p>Welcome to the beautiful world of Gradients</p>
        <ColorRing
          visible={true}
          height='80'
          width='80'
          ariaLabel='blocks-loading'
          wrapperStyle={{}}
          wrapperClass='blocks-wrapper'
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
    </div>
  );
};

export default Loader;
