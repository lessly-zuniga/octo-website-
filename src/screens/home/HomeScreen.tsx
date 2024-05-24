import React from 'react';
import NavBar from '../../components/organisms/Navbar/Navbar.tsx';

interface NavBarItem {
  title: string;
  link: string;
}

interface HomeScreenProps {
  navBarItems: NavBarItem[];
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navBarItems }) => {
  return (
    <div className="home-screen">
      <NavBar items={navBarItems} />
    </div>
  );
};

export default HomeScreen;
