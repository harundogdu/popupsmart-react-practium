import { useAuth } from 'contexts/auth-context';
import { useTheme } from 'contexts/theme-context';
import { ToggleButton } from './components';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { username } = useAuth();

  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <h3 className='navbar__container-logo'>Todo App</h3>
        <ul className='navbar__container-menu'>
          <li>
            <span>{username}</span>
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
