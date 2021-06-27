import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Colour.css";

function Colour() {
  return (
    <div className="colourRender">
      <h6 className="colourTitle">Colour</h6>
      <div className="colourButtons">
        <Button className="colourRed"></Button>
        <Button className="colourGreen"></Button>
        <Button className="colourBlue"></Button>
      </div>
    </div>
  );
}

export default Colour;
