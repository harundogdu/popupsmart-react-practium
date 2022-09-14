import { useState } from 'react';
import { useEffect } from 'react';
import { ToggleButton } from './components';

function Navbar() {
  const [userName, setUserName] = useState('');
  const [theme, setTheme] = useState('light');

  const getUserNameFromLocalStorage = () => {
    const localUserName = JSON.parse(localStorage.getItem('username'));

    if (localUserName) {
      setUserName(localUserName);
      return;
    }
  };

  const handleThemeSwitchClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    getUserNameFromLocalStorage();
  }, []);

  /* theme switcher */
  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.remove('light', 'dark');
    body.classList.add(theme);
  }, [theme]);

  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <h3 className='navbar__container-logo'>Todo App</h3>
        <ul className='navbar__container-menu'>
          <li>
            <span>{userName}</span>
          </li>
          <li>
            <ToggleButton
              name='theme'
              onChange={handleThemeSwitchClick}
              value={theme}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
