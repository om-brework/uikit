import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  isDisabled = false,
  className,
  onCLick,
  isLoading = false,
  variant = 'default',
  size = 'md',
  shape = 'rounded',
  icon,
  children,
}) => {
  const defaultClassName = 'py-2 px-8';

  const defaultVariant = () => {
    const btn =
      'bg-gray-100 border border-gray-300 text-gray-600 hover:bg-gray-50';
    return btn;
  };

  const solidVariant = () => {
    const btn =
      'bg-teal-900 border border-teal-300 text-white hover:bg-teal-50';
    return btn;
  };

  const btnVariant = () => {
    switch (variant) {
      case 'solid':
        return solidVariant();
      case 'default':
        return defaultVariant();
      default:
        return defaultVariant();
    }
  };

  const buttonShape = () => {
    switch (shape) {
      case 'none':
        return;
      case 'rounded':
        return;
      case 'circle':
        return;
      default:
        rounded;
    }
  };

  const classes = classNames(
    className,
    btnVariant(),
    defaultClassName
  );

  return <button className={classes}>{children}</button>;
};

Button.propTypes = {
  onCLick: PropTypes.func,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'solid']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  shape: PropTypes.oneOf(['circle', 'rounded', 'none']),
  icon: PropTypes.element,
};

export default Button;
