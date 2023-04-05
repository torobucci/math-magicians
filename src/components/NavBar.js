import { NavLink } from 'react-router-dom';
import style from './styles/NavBar.module.css';

const links = [
  { path: '/', text: 'Home' },
  { path: 'calculator', text: 'Calculator' },
  { path: 'quote', text: 'Quote' },
];
function NavBar() {
  return (
    <nav className={style.nav}>
      <h1>Math Magicians</h1>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default NavBar;
