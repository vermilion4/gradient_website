import React from 'react';
import Navbar from './Navbar/Navbar';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { colors } from './Colors';
import './App.css';

const App = () => {
  const [colorOne, setColorOne] = useState('');
  const [colorTwo, setColorTwo] = useState('');
  let [counter, setCounter] = useState(0);

  const handleNext = () => {
    setCounter((counter += 1));
    counter === 11 ? setCounter(1) : setCounter(counter);
    console.log(counter);
  };
  const handlePrev = () => {
    setCounter((counter -= 1));
    counter === -1 || counter === 0 ? setCounter(10) : setCounter(counter);
    console.log(counter);
  };

  useEffect(() => {
    setColorOne(colors[counter].colorOne);
    setColorTwo(colors[counter].colorTwo);
  }, [counter]);

  return (
    <div>
      <Navbar colorOne={colorOne} colorTwo={colorTwo} />
      <div
        className='gradient-body'
        style={{
          backgroundImage: `linear-gradient(to right, ${colorOne}, ${colorTwo})`,
        }}>
        <div className='buttons'>
          <div className='prev' onClick={handlePrev}>
            <FontAwesomeIcon icon={faLessThan} />
          </div>
          <div className='next' onClick={handleNext}>
            <FontAwesomeIcon icon={faGreaterThan} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
