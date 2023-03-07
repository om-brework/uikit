import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = ({ path, title, icon }) => {
  return (
    <Link
      to={path}
      className="flex item-center text-sm text-slate-700"
    >
      {icon ? icon : ''}
      {title}
    </Link>
  );
};

MenuItem.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.element,
};

export default MenuItem;
