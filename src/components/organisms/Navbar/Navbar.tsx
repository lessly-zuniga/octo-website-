import React from "react";
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
  const handleRedirect = (url: string) => {
    window.location.href = url;
  };

  return (
    <nav className="navbar">
      <div className="navbar-buttons">
        <div className="navbar-brand-container">
          <img
            alt="octo-logo"
            src={OctoLogo}
            className="octo-logo"
          />
          <p className="logo-button">octo</p>
        </div>
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
