import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ containerStyles, onLinkClick }) => {
  const navLinks = [
    { path: '/', title: 'Home' },
    { path: '/collection', title: 'Collection' },
    { path: '/testimonials', title: 'Testimonials' },
    { path: 'mailto:theballjunkie@gmail.com', title: 'Contact' }, 
  ];

  return (
    <nav className={`${containerStyles}`}>
      {navLinks.map((link) =>
        link.path.startsWith('mailto:') ? (
          
          <a
            key={link.title}
            href={link.path}
            className="px-3 py-2 rounded-full"
          >
            {link.title}
          </a>
        ) : (
      
          <NavLink
            key={link.title}
            to={link.path}
            onClick={() => onLinkClick?.()}
            className={({ isActive }) =>
              `${isActive ? 'active-link' : ''} px-3 py-2 rounded-full`
            }
          >
            {link.title}
          </NavLink>
        )
      )}
    </nav>
  );
};

export default Navbar;
