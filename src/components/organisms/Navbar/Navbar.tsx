import React from 'react';
import './NavBar.css';

interface NavBarItem {
  label: string;
  onClick: () => void;
}

interface NavBarProps {
  items: NavBarItem[];
}

const NavBar: React.FC<NavBarProps> = ({ items }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      </div>
      <div className="navbar-buttons">
        {items && items.map((item, index) => (
          <button key={index} className="navbar-button" onClick={item.onClick}>
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
