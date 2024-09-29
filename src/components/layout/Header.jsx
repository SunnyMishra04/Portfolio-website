// src/components/Layout/Header.js

import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navItems = ['Home', 'Resume', 'Portfolio', 'Contact'];

  return (
    <nav className="flex justify-end space-x-4 text-sm mb-6">
      {navItems.map((item) => (
        <Link
          key={item}
          to={item === 'Home' ? '/' : 
               item === 'Resume' ? '/resume' : 
               item === 'Portfolio' ? '/portfolio' : 
               item === 'Contact' ? '/contact' : 
               `/${item.toLowerCase()}`}
          className={`hover:text-[#febf5f] transition duration-200 ${
            location.pathname === (item === 'Home' ? '/' : 
                                 item === 'Resume' ? '/resume' : 
                                 item === 'Portfolio' ? '/portfolio' : 
                                 item === 'Contact' ? '/contact' : 
                                 `/${item.toLowerCase()}`)
              ? 'text-[#febf5f] font-bold'
              : 'text-white'
          }`}
        >
          {item}
        </Link>
      ))}
    </nav>
  );
};

export default Header;

