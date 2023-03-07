import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Partials/Navbar/Navbar';
import SideMenu from '../Partials/SideMenu/SideMenu';

const MainLayout = () => {
  return (
    <main>
      <div className="flex">
        <SideMenu />
        <div className="w-full p-5">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
