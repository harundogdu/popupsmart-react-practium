import React from 'react';
import { useNavigate } from 'react-router-dom';

const CommonModal = ({ title, children, setModal, control }) => {
  const navigate = useNavigate();
  const handleSaveClick = () => {
    if (control) {
      setModal(false);
      localStorage.setItem('username', JSON.stringify(control));
      navigate('/todos');
    } else {
      alert('Please fill the form');
    }
  };
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
          <button
            className='modal__container-footer-button'
            onClick={handleSaveClick}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommonModal;
