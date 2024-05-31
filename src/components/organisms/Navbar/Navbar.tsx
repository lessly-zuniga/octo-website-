import React, { useState } from "react";
import "./NavBar.css";
import OctoLogo from "../../../assets/svg/OctoLogo.svg";

interface NavBarItem {
  title: string;
  link: string;
}

interface NavBarProps {
  items: NavBarItem[] | undefined;
}

const NavBar: React.FC<NavBarProps> = ({ items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleRedirect = (url: string) => {
    window.location.href = url;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand-container">
        <img alt="octo-logo" src={OctoLogo} className="octo-logo" />
        <p className="logo-button">octo</p>
        <button className="hamburger-button" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>
      <div className={`navbar-buttons ${isMenuOpen ? "open" : ""}`}>
        <div className="left-button">
          {items &&
            items.map((item, index) => (
              <button
                key={index}
                className="navbar-button"
                onClick={() => handleRedirect(item.link)}
              >
                {item.title}
              </button>
            ))}
        </div>
        <div className="right-button">
          <button className="navbar-button" onClick={() => handleRedirect("/")}>
            Log in
          </button>
          <button className="quote-button" onClick={() => handleRedirect("/")}>
            Get a quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
