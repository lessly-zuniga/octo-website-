import React from "react";
import NavBar from "../../components/organisms/Navbar/Navbar.tsx";
import "./Home.css";
import { Forbes, WSJ } from "../../assets/svg/index.ts";
import { FamilyImg, Girl } from "../../assets/images/index.ts";
import Tag from "../../components/molecules/Tag/Tag.tsx";

interface NavBarItem {
  title: string;
  link: string;
}

interface HomeScreenProps {
  navBarItems: NavBarItem[] | undefined;
  title: string | undefined;
  buttonTitle: string | undefined;
}

const HomeScreen: React.FC<HomeScreenProps> = ({
  navBarItems,
  title,
  buttonTitle,
}) => {
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
      <div className="home-container">
        <div className="home-tag-container">
          <Tag />
        </div>
        <div className="green-section">
          <div className="green-container">
            {title && applyStylesToHTML(title)}
            {buttonTitle && (
              <button className="custom-button" onClick={() => {}}>
                <img
                  alt="Talk to an agent today"
                  src={Girl}
                  className="button-icon"
                />
                {buttonTitle}
              </button>
            )}
          </div>
          <div className="section-bottom-green">
            <div className="line-horizontal-vertical-container">
              <div className="line-horizontal"></div>
              <div className="line-vertical-arrow-container">
                <div className="line-vertical"></div>
                <div className="arrow"></div>
              </div>
            </div>
            <div className="text-container">
              <p className="purple-text">As seen on!</p>
            </div>
            <div className="text-container-triangle" />
            <div className="text-bottom-container">
              <p className="tech-text">TechCrunch</p>
              <img
                alt="Talk to an agent today"
                src={Forbes}
                className="brand-icon"
                style={{ marginBottom: 6, height: 18 }}
              />
              <img
                alt="Talk to an agent today"
                src={WSJ}
                className="brand-icon"
                style={{ width: 200 }}
              />
            </div>
          </div>
          <div className="section-bottom-green-triangle" />
        </div>
        <div className="purple-section">
          <img
            alt="Talk to an agent today"
            src={FamilyImg}
            className="bg-img"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
