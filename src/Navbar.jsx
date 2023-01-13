import './Navbar.css';
import { useState } from 'react';

const Navbar = ({ logo, listOfLinks }) => {
  const [logedIn, setLogedIn] = useState(false);

  const routes = listOfLinks.map((link, i) => {
    return (
      <a key={i} href={link.url}>
        {link.text}
      </a>
    );
  });

  return (
    <div className="Navbar">
      <img className="Navbar-logo" src={logo} alt="Techover" />
      <div className="Navbar-links">
        {routes}
        {logedIn ? (
          <button onClick={() => setLogedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setLogedIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
