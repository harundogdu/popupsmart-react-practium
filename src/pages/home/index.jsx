import { CommonModal } from 'components';
import { useAuth } from 'contexts/auth-context';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const { username, setUserName, setAuth } = useAuth();
  const [modal, setModal] = React.useState(true);

  const handleSaveClick = e => {
    e.preventDefault();
    if (username) {
      setModal(false);
      setAuth(true);
      navigate('/todos');
      return;
    }
    alert('Please enter a username');
  };

  return (
    <section className='home'>
      {modal && (
        <CommonModal
          title='Enter ur username'
          onClick={handleSaveClick}
          setVisible={setModal}
          buttonText='Login'
        >
          <form className='modal__form' onSubmit={handleSaveClick}>
            <div className='modal__form-group'>
              <label htmlFor='username' className='modal__form-group-label'>
                Username
              </label>
              <input
                type='text'
                name='username'
                id='username'
                className='modal__form-group-input'
                value={username}
                onChange={e => setUserName(e.target.value)}
              />
            </div>
          </form>
        </CommonModal>
      )}
    </section>
  );
};

export default Home;
