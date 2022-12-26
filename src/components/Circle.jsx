import React, { useState } from 'react';

const Circle = ({ color1, color2, rotate, top, left }) => {

  const [rotation, setRotation] = useState(rotate);

  const handleClick = () => {
    setRotation(rotation + 180);
  };

  const sharedStyles = {
    transform: `translateX(${left}px) rotate(${rotation}deg)`,
    top
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
          transition: 'transform 0.3s ease-in-out'
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