import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Scroll to section when hash changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  const handleHashClick = (hash, menuKey) => {
    setMenu(menuKey);
    if (location.pathname !== "/") {
      navigate("/" + hash); // navigate to /#section
    } else {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.hash = hash;
      }
    }
  };

  const navItems = [
    ["1", "Home", "home", "/"],
    ["2", "MENU", "menu", "#menu"],
    ["3", "RESERVATION", "reservation", "#reservation"],
    ["4", "My Account", "my-account", "/login"],
    ["5", "ABOUT US", "about", "#about"]
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Flavours By Sahiba</div>

        <ul className="flex space-x-6 text-sm uppercase tracking-widest">
          {navItems.map(([id, title, menuKey, link]) =>
            link.startsWith("#") ? (
              <button
                key={id}
                onClick={() => handleHashClick(link, menuKey)}
                className={`${menu === menuKey ? "text-amber-300" : ""} cursor-pointer !text-white`}
              >
                {title}
              </button>
            ) : (
              <Link
                key={id}
                to={link}
                onClick={() => setMenu(menuKey)}
                className={`${menu === menuKey ? "text-amber-300" : ""} cursor-pointer !text-white`}
              >
                {title}
              </Link>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
