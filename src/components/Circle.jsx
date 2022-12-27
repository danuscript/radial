import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Circle = ({ color1, color2, angle, top, left, positions, index }) => {

  const [rotation, setRotation] = useState(angle);

  const { changePosition, won, move } = useContext(GlobalContext);

  const handleClick = () => {
    if (!won) {
      setRotation(rotation + 360 / positions);
      changePosition(index);
      move();
    }
  };

  const sharedStyles = {
    transform: `translateX(${left}px) rotate(${rotation}deg)`,
    transition: 'transform 0.3s ease-in-out',
    top,
  };

  return (
    <>
      <div
        className='circle outline'
        style={{
          ...sharedStyles,
          border: '4px var(--offWhite) solid',
          background: 'transparent',
          zIndex: 2,
        }}
        onClick={handleClick}
      />

      <div
        className='circle mainCircle'
        style={{
          ...sharedStyles,
          background: `repeating-linear-gradient(
            to right,
            var(--${color1}),
            var(--${color1}) 50%,
            var(--${color2}) 50%,
            var(--${color2}) 100%
          )`,
          zIndex: 1,
          mixBlendMode: 'multiply',
        }}
      />

      <div className='circle outline'
        style={{
          ...sharedStyles,
          background: 'white',
          zIndex: 0,
        }}
      />
    </>
  );
};

export default Circle;