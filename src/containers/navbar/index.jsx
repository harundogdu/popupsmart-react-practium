import { useAuth } from 'contexts/auth-context';
import { useTheme } from 'contexts/theme-context';
import { useNavigate } from 'react-router-dom';
import { ToggleButton } from './components';

function Navbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { username, setAuth, setUserName } = useAuth();

  const handleLogoutClick = () => {
    setAuth(false);
    setUserName('');
    navigate('/');
  };

  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <h3 className='navbar__container-logo'>Todo App</h3>
        <ul className='navbar__container-menu'>
          <li>
            <span>{username}</span>
          </li>
          <li>
            <button className='btnLogout' onClick={handleLogoutClick}>Logout</button>
          </li>
          <li>
            <ToggleButton name='theme' onChange={toggleTheme} value={theme} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
