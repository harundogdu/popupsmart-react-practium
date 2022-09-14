import { useState } from 'react';
import { useEffect } from 'react';

function Navbar() {
  const [userName, setUserName] = useState('');

  const setUserNameToLocalStorage = () => {
    localStorage.setItem('username', JSON.stringify(userName));
  };

  const getUserNameFromLocalStorage = () => {
    const localUserName = JSON.parse(localStorage.getItem('username'));

    if (localUserName) {
      setUserName(localUserName);
      return;
    }

    setUserNameToLocalStorage();
  };

  useEffect(() => {
    getUserNameFromLocalStorage();
  }, []);

  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <h3 className='navbar__container-logo'>Todo App</h3>
        <ul className='navbar__container-menu'>
          <li>
            <span>{userName}</span>
          </li>
          <li>
            <button>Koyu Mod</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
