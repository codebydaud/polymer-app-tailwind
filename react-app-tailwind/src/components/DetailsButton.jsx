import React from "react";

const DetailsButton = ({ name }) => {
  return (
    <button
      className="bg-green-400 text-white py-2 px-4 rounded border-none cursor-pointer hover:bg-green-700"
      onClick={() => alert("Button clicked!")}
    >
      {name}
    </button>
  );
};

export default DetailsButton;
