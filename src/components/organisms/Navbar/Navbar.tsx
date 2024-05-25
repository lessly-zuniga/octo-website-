import React from 'react';
import './NavBar.css';

interface NavBarItem {
  title: string;
  link: string;
}

interface NavBarProps {
  items: NavBarItem[];
}

const NavBar: React.FC<NavBarProps> = ({ items }) => {
  const handleRedirect = (url: string) => {
    window.location.href = url;
  };

  return (
    <nav className="navbar">
      <div className="navbar-buttons">
        <button className="login-button" onClick={() => {}}>
          OCTO
        </button>
        {items && items.map((item, index) => (
          <button key={index} className="navbar-button" onClick={() => handleRedirect(item.link)}>
            {item.title}
          </button>
        ))}
      </div>
      <div>
        <button className="navbar-button" onClick={() => {}}>
          Log in
        </button>
        <button className="quote-button" onClick={() => {}}>
          Get a quote
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
