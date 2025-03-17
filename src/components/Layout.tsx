import { Outlet } from 'react-router-dom';
import Nav from './Nav';


export default function Layout() {
  return (
    <div>
      <header>
        <h1>Ressursarkiv</h1>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>© 2025 Ressursarkiv</footer>
    </div>
  );
}
