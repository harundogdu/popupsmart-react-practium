import { CommonModal } from 'components';
import React from 'react';

const Home = () => {
  const [modal, setModal] = React.useState(true);
  const [username, setUsername] = React.useState('');
  return (
    <section className='home'>
      {modal && (
        <CommonModal
          setModal={setModal}
          title='Enter ur username'
          control={username}
        >
          <form action='' className='modal__form'>
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
                onChange={e => setUsername(e.target.value)}
              />
            </div>
          </form>
        </CommonModal>
      )}
    </section>
  );
};

export default Home;
