import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = ({ path, title, icon }) => {
  return (
    <Link
      to={path}
      className="hover:text-gray800 hover:bg-gray-100 flex p-2 my-3 items-center transition-colors"
    >
      <div className="w-5 h-5">{icon ? icon : ''}</div>
      <span className="align-middle">{title}</span>
    </Link>
  );
};

MenuItem.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.element,
};

export default MenuItem;
