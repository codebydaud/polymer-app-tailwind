import React from "react";

const RecipeTitle = ({ name }) => {
  return (
    <div className="p-3 bg-green-400 text-white rounded text-center">
      {name}
    </div>
  );
};

export default RecipeTitle;
