import React from "react";
import NavBar from "../../components/organisms/Navbar/Navbar.tsx";
import "./Home.css";
import familyImg from "../../assets/images/family-img.png";

interface NavBarItem {
  title: string;
  link: string;
}

interface HomeTitle {
  "header-title": string;
  "header-cta": string;
}

interface HomeScreenProps {
  navBarItems: NavBarItem[];
  title: HomeTitle;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navBarItems, title }) => {
  const applyStylesToHTML = (htmlString: string) => {
    return (
      <p
        className="styled-text"
        dangerouslySetInnerHTML={{ __html: htmlString }}
      />
    );
  };

  return (
    <div className="home-screen">
      <NavBar items={navBarItems} />
      <div className="home-container ">
        <div className="green-section">
          <div className="green-container">
            {applyStylesToHTML(title["header-title"])}
            <button className="custom-button" onClick={() => {}}>
              <img
                alt="Talk to an agent today"
                src="https://www.natalben.com/sites/default/files/inline-images/ciclo-paso-a-paso.jpg"
                className="button-icon"
              />
              Talk to an agent today!
            </button>
          </div>
          <div className="section-bottom-green">
            <div className="line-horizontal"></div>
            <div className="line-vertical"></div>
            <div className="arrow"></div>
            <div className="text-container">
              <p className="purple-text">As seen on</p>
            </div>
            <div className="text-container-triangle" />
          </div>
          <div className="section-bottom-green-triangle" />
        </div>
        <div className="purple-section">
          <img
            alt="Talk to an agent today"
            src={familyImg}
            className="bg-img"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
