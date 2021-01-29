// Props
// Short for properties
// Parameters of a component function that get passed into the component to aid in its reuseability.
// Dynamic data can be assigned to child components.
// for use with class components, not needed with functional: import React from 'react';

import App from '../App';

const NameProp = (props) => {
  // property returning React element
  return <h1> Hello, {props.name}</h1>;
};

export default NameProp;
