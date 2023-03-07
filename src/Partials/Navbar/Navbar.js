import React from 'react';
import logo from '../../Assets/logo.png';

const Navbar = () => {
  return (
    <div className="w-full flex h-11 shadow-md items-center px-5">
      <div className="h-5">
        <img src={logo} className="h-full" />
      </div>
    </div>
  );
};

export default Navbar;
