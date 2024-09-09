import React from "react";

const NameCard = ({ name }) => {
  return (
    <div className="w-1/4 px-16 py-8 rounded-md bg-green-600 text-white text-center font-bold text-xl shadow-lg">
      {name}
    </div>
  );
};

export default NameCard;
