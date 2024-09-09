import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import RecipeTitle from "./components/RecipeTitle";
import DetailsButton from "./components/DetailsButton";

const RecipeTitleWC = reactToWebComponent(RecipeTitle, React, ReactDOM, {
  props: ["name"],
});
const DetailsButtonWC = reactToWebComponent(DetailsButton, React, ReactDOM, {
  props: ["name"],
});

customElements.define("recipe-title", RecipeTitleWC);
customElements.define("details-button", DetailsButtonWC);
