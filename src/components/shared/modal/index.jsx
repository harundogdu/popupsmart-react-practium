import React from 'react';

const CommonModal = ({ title, children, onClick }) => {
  return (
    <div className='modal'>
      <div className='modal__container'>
        <div className='modal__container-header'>
          <h2 className='modal__container-header-title'>{title}</h2>
          <button className='modal__container-header-close'>
            <i className='fas fa-times'></i>
          </button>
        </div>
        <div className='modal__container-body'>{children}</div>
        <div className='modal__container-footer'>
          <button className='modal__container-footer-button' onClick={onClick}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommonModal;
