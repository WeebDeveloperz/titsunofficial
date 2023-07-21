import { useLocation, Link } from "react-router-dom";

import "./css/Menu.css"

const Menu = ({ items, close }) => {
  const location = useLocation().pathname;

  return (
    <div className="menu">
      <div className="closeButton" onClick={close}>X</div>
      <nav>
        {items.map((i, id) =>
          <Link
            key={id}
            className={location === i.path ? "current" : null}
            onClick={close}
            to={i.path}
          >
            {i.label}
          </Link>
        )}
      </nav>
    </div>
  );
}

export default Menu;
