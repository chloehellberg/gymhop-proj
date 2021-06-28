import React from "react";
import "./SizeButton.css";

export const SizeButton = (props) => {
  const getClassName = () => {
    return props.isActive ? "sizeButton active" : "sizeButton";
  };

  return (
    <button className={getClassName()} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
