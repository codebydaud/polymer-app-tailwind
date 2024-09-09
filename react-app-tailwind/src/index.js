import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import NameCard from "./components/NameCard";

const NameCardWC = reactToWebComponent(NameCard, React, ReactDOM, {
  props: ["name"],
});

customElements.define("name-card", NameCardWC);
