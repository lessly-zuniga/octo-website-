import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeScreen from "./HomeScreen.tsx";

interface NavBarItem {
  title: string;
  link: string;
}

const HomeController: React.FC = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [navBarItems, setNavBarItems] = useState<NavBarItem[]>();
  const [homeTitle, setHomeTitle] = useState<string>();
  const [headerCta, setHeaderCta] = useState<string>();

  useEffect(() => {
    const fetchNavBarItems = async () => {
      try {
        const response = await axios.get(`${API_URL}/default/frontendTest`);
        const navItems = response.data.nav.map((item: any) => ({
          title: item.title,
          link: item.link,
        }));

        setNavBarItems(navItems);
        setHomeTitle(response.data.home["header-title"]);
        setHeaderCta(response.data.home["header-cta"]);
      } catch (error) {
        console.error("Error fetching navbar items:", error);
      }
    };

    fetchNavBarItems();
  }, [API_URL]);

  return (
    <HomeScreen
      navBarItems={navBarItems}
      title={homeTitle}
      buttonTitle={headerCta}
    />
  );
};

export default HomeController;
