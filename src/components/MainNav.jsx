import React, { useState, memo } from 'react';
import Link from 'gatsby-link';
import { FaMapMarker, FaEnvelopeO, FaPaperPlaneO, FaWrench, FaChevronDown, FaChevronUp } from 'react-icons/lib/fa';

const ListLink = memo(({ to, children, closeMenu }) => (
  <li className="c-main-nav__elem">
    <Link 
      to={to} 
      className="c-main-nav__link" 
      activeClassName="c-main-nav__link--is-active" 
      exact={true}
      onClick={closeMenu}
    >
      {children}
    </Link>
  </li>
));

const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { to: '/', text: 'Home', icon: FaMapMarker },
    { to: '/toolbox/', text: 'Toolbox', icon: FaWrench },
    { to: '/playground/', text: 'Playground', icon: FaPaperPlaneO },
    { to: '/contact/', text: 'Contact', icon: FaEnvelopeO }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <ul className={`c-main-nav ${isMenuOpen ? 'c-main-nav--is-hidden' : ''}`}>
        {links.map((link, i) => (
          <ListLink to={link.to} key={i} closeMenu={() => setIsMenuOpen(false)}>
            <link.icon />
            <span className="c-main-nav__text">{link.text}</span>
          </ListLink>
        ))}
        <li 
          className="c-main-nav__elem c-main-nav__elem--close-link" 
          onClick={toggleMenu}
        >
          <a href="#" className="c-main-nav__link">
            {isMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
            <span className="c-main-nav__text">Close</span>
          </a>
        </li>    
      </ul> 
      {isMenuOpen && (
        <div className="c-main-nav c-main-nav--is-open">
          {links.map((link, i) => (
            <ListLink to={link.to} key={i} closeMenu={() => setIsMenuOpen(false)}>
              <link.icon />
              <span className="c-main-nav__text">{link.text}</span>
            </ListLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(MainNav);
