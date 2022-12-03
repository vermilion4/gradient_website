import React from 'react';
import Navbar from './Navbar/Navbar';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { colors } from './Colors';
import './App.css';
import Loader from './Loader/Loader';

const App = () => {
  const [colorOne, setColorOne] = useState('');
  const [colorTwo, setColorTwo] = useState('');
  const [fromColor, setFromColor] = useState('#fff');
  const [toColor, setToColor] = useState('#000');
  const [colorName, setColorName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState(colors);
  const [newId, setNewId] = useState(colors.length);
  const [showOverlay, setShowOverlay] = useState(false);
  let [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setNewId(newId + 1);
    const updatedList = list.concat({
      id: newId,
      colorOne: fromColor,
      colorTwo: toColor,
      name: colorName,
    });
    setList(updatedList);
  };
  const handleShowAll = () => {
    setShowOverlay(true);
  };
  const handleCloseAll = () => {
    setShowOverlay(false);
  };
  const handleNext = () => {
    setCounter((counter += 1));
    counter === list.length ? setCounter(1) : setCounter(counter);
  };
  const handlePrev = () => {
    setCounter((counter -= 1));
    counter === -1 || counter === 0
      ? setCounter(list.length - 1)
      : setCounter(counter);
  };

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, []);

  useEffect(() => {
    setColorOne(list[counter].colorOne);
    setColorTwo(list[counter].colorTwo);
  }, [counter]);

  if (isLoading) return <Loader />;
  return (
    <div style={{ position: 'relative' }}>
      <Navbar
        showOverlay={showOverlay}
        handleCloseAll={handleCloseAll}
        handleShowAll={handleShowAll}
        handleAdd={handleAdd}
        colorOne={colorOne}
        colorTwo={colorTwo}
        fromColor={fromColor}
        toColor={toColor}
        setFromColor={setFromColor}
        setToColor={setToColor}
        setColorName={setColorName}
      />
      <div
        className='gradient-body'
        style={{
          background: `${colorOne}`,
          background: `-webkit-linear-gradient(to right, ${colorOne}, ${colorTwo})`,
          background: `linear-gradient(to right, ${colorOne}, ${colorTwo})`,
        }}>
        <div className={`${showOverlay ? 'overlay' : 'off-screen'}`}>
          <div className='pallete-container'>
            {list.map((item) => {
              return (
                <div
                  className='pallete'
                  style={{
                    background: `${item.colorOne}`,
                    background: `-webkit-linear-gradient(to right, ${item.colorOne}, ${item.colorTwo})`,
                    background: `linear-gradient(to right, ${item.colorOne}, ${item.colorTwo})`,
                  }}>
                  <div className='pallete-name'>{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
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
