import React from "react";
import "./ColourButton.css";

export const ColourButton = (props) => {
  const getClassName = () => {
    return props.isActive
      ? `colourButton activeColour ${props.color}`
      : `colourButton ${props.color}`;
  };

  return (
    <button className={getClassName()} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
