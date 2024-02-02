import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaMoon } from "react-icons/fa";

const menus = [
  { to: "", text: "home" },
  { to: "page1", text: "page1" },
  { to: "page2", text: "page2" },
];

const Header = () => {
  const [active, setActive] = useState(null);

  return (
    <header className="h-16 border-b px-3 lg:px-16 flex items-center justify-between sticky top-0 backdrop-blur backdrop-saturate-100 bg-[rgba(255,255,255,0.5)]">
      <nav className="flex items-center gap-6">
        <a href="#" className="font-semibold text-xl">
          Logo
        </a>
        <div className="flex gap-3">
          {menus.map((menu, i) => (
            <NavLink
              key={i}
              to={menu.to}
              onClick={() => setActive(i)}
              className={`${active === i ? "opacity-50" : null} capitalize hover:opacity-50`}
            >
              {menu.text}
            </NavLink>
          ))}
        </div>
      </nav>
      <nav className="flex gap-3">
        <button>
          <FaUser />
        </button>
        <button>
          <FaMoon />
        </button>
      </nav>
    </header>
  );
};

export default Header;
