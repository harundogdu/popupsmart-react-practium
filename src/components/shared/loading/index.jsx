import React from 'react';

const LoadingSpinner = ({ text }) => {
  return (
    <div className='loading'>
      <div className='loading__spinner'></div>
      <div className='loading__text'>{text}</div>
    </div>
  );
};

export default LoadingSpinner;
