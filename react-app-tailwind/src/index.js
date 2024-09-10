// import React from 'react';
// import ReactDOM from 'react-dom';
import reactToWebComponent from '@r2wc/react-to-web-component';
import TextField from './components/TextField';

const TextFieldWC = reactToWebComponent(TextField, {
  props: {label: "string", type: "string", name: "string", newValue: "string", onValueChange: "function", placeholder: "string"},
});

customElements.define('text-field', TextFieldWC);
