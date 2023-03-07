import React from 'react';
import MenuItem from './MenuItem';
import logo from '../../Assets/logo.png';
import { AiFillHome } from 'react-icons/ai';
import { MenuItems } from './MenuItems';

const SideMenu = () => {
  return (
    <aside className="pt-5 pl-5 w-64 h-screen bg-gray-300 border-r border-gray-200 text-slate-700">
      <img src={logo} className="w-20 mb-5" />
      {MenuItems.map((menu) => {
        return (
          <MenuItem
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
