import React from 'react';
import MenuItem from './MenuItem';
import logo from '../../Assets/logo.png';
import { AiFillHome } from 'react-icons/ai';
import { MenuItems } from './MenuItems';

const SideMenu = () => {
  return (
    <aside className="py-3 px-3 w-64 h-screen bg-white border-r border-gray-200 text-slate-700">
      <img src={logo} className="h-10" />
      {MenuItems.map((menu, index) => {
        return (
          <MenuItem
            key={index}
            path={menu.path}
            title={menu.title}
            icon={menu.icon}
          />
        );
      })}
    </aside>
  );
};

export default SideMenu;
