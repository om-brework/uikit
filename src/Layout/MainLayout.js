import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Partials/Navbar/Navbar';

const MainLayout = () => {
  return (
    <main className="relative h-screen overflow-hidden bg-gray-100">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default MainLayout;
