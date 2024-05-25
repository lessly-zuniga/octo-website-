import React from "react";
import NavBar from "../../components/organisms/Navbar/Navbar.tsx";
import "./Home.css";

interface NavBarItem {
  title: string;
  link: string;
}

interface HomeTitle {
  'header-title': string;
  'header-cta': string;
}

interface HomeScreenProps {
  navBarItems: NavBarItem[];
  title: HomeTitle;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navBarItems, title }) => {
  const applyStylesToHTML = (htmlString: string) => {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlString;
    
    const textContent = tempElement.textContent || tempElement.innerText || '';
    
    const splitText = textContent.split('just');
    const beforeJust = splitText[0];
    const afterJust = splitText[1];

    return (
      <p className="styled-text">
        <span className="green-text">{beforeJust}</span>
        <span className="purple-bold-text">just</span>
        <span className="green-text">{afterJust}</span>
      </p>
    );    
  }

  return (
    <div className="home-screen">
      <NavBar items={navBarItems} />
      <div className="home-container ">
        <div className="green-section">
          <div className="green-container">
            {applyStylesToHTML(title['header-title'])}
            <button className="custom-button" onClick={() => {}}>
              <img
                alt="Talk to an agent today"
                src="https://www.natalben.com/sites/default/files/inline-images/ciclo-paso-a-paso.jpg"
                className="button-icon"
              />
              Talk to an agent today!
            </button>
            <div className="section-bottom-green">
              <p className="purple-text">As seen on </p>
            </div>
          </div>
        </div>
        <div className="purple-section"></div>
      </div>
    </div>
  );
};

export default HomeScreen;
