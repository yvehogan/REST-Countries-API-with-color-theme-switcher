import React from 'react';

const Header = () => {
  return (
    <div className="w-full">
      <div className="px-4 md:px-16 py-4 flex justify-between items-center shadow-lg">
        <h1 className="text-primary font-bold md:font-extrabold text-xl md:text-2xl">Where in the world?</h1>
        <p>dark mode</p>
      </div>
    </div>
  );
};

export default Header;