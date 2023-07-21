import { useLocation, Link } from 'react-router-dom';

import "./css/Navbar.css";

const Navbar = ({ items, openMenu }) => {
  const location = useLocation().pathname;

  return (
    <div className="navbar">
    
      <nav>
        {items.map((i, id) =>
          <Link
            key={id}
            className={`${location === i.path ? "current" : null} ${i.lowPriority ? "lowPriority" : null}`}
            to={i.path}
          >
            {i.label}
          </Link>
        )}
        <div className="verticalDots" onClick={openMenu}></div>
      </nav>
    </div>
  );
}

export default Navbar;
