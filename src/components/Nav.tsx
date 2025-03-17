import { NavLink } from 'react-router-dom';


export default function Nav() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/html">HTML</NavLink></li>
        <li><NavLink to="/css">CSS</NavLink></li>
        <li><NavLink to="/javascript">JavaScript</NavLink></li>
        <li><NavLink to="/react">React</NavLink></li>
        <li><NavLink to="/sanity">Sanity</NavLink></li>
      </ul>
    </nav>
  );
}
