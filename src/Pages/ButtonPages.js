import React from 'react';
import Button from '../Components/Button';

const ButtonPages = () => {
  return (
    <div className="inline-flex xl:flex gap-2">
      <Button>Default</Button>
      <Button variant="solid">Solid</Button>
    </div>
  );
};

export default ButtonPages;
