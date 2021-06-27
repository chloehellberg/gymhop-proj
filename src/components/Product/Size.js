import React from "react";
import { Button } from "react-bootstrap";
import "./Size.css";

function Size() {
  return (
    <div className="sizeRender">
      <h3 className="sizeTitle">Size</h3>
      <div className="sizeButtons">
        <Button defaultActiveKey="#first" className="sizeSmall">
          Small
        </Button>
        <Button className="sizeMedium">Medium</Button>
        <Button className="sizeLarge">Large</Button>
        <Button className="sizeExtraLarge">Extra Large</Button>
      </div>
      <div className="lineStrike"></div>
    </div>
  );
}

export default Size;
