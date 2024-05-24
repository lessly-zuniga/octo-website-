import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomeScreen from './HomeScreen.tsx';

interface NavBarItem {
  title: string;
  link: string;
}

const HomeController: React.FC = () => {
  const [navBarItems, setNavBarItems] = useState<NavBarItem[]>([],);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchNavBarItems = async () => {
      try {
        const response = await axios.get(`${API_URL}/frontendTest`);
        const navItems = response.data.nav.map((item: any) => ({
          label: item.label,
          onClick: () => console.log(`${item.label} clicked`)
        }));
        setNavBarItems(navItems);
      } catch (error) {
        console.error('Error fetching navbar items:', error);
      }
    };

    fetchNavBarItems();
  }, [API_URL]);

  return <HomeScreen navBarItems={navBarItems} />;
};

export default HomeController;
