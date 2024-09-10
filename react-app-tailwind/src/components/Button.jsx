import React from 'react';

const Button = ({ label, onButtonClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onButtonClick}
      className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'}
    >
      {label}
    </button>
  );
};

export default Button;
