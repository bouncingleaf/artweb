import { NavLink } from 'react-router-dom';
import leaf from '../assets/leaf2.png'
import './Nav.css'

const Nav = () => (
  <div>
    <nav className='navbar'>
      <NavLink to="/"><img src={leaf} width="20" alt="leaf" /></NavLink>
      {/* <NavLink to="/blog">Blog</NavLink> */}
      <NavLink to="/about">Leaf</NavLink>
      <NavLink to="/art">Art</NavLink>
    </nav>
  </div>
);

export default Nav