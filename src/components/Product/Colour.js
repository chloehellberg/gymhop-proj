import React, { useState } from "react";
import { ColourButton } from "../ColourButton/ColourButton";
import "./Colour.css";

function Colour() {
  const [selectedColour, setSelectedColour] = useState("");

  return (
    <>
      <h4 className="colourTitle">Colour</h4>
      <div className="colourContainer">
        <a href="#redProd">
          <ColourButton
            color="red"
            isActive={selectedColour === "red"}
            onClick={() => setSelectedColour("red")}
          />
        </a>
        <a href="#greenProd">
          <ColourButton
            color="green"
            isActive={selectedColour === "green"}
            onClick={() => setSelectedColour("green")}
          />
        </a>
        <a href="#blueProd">
          <ColourButton
            color="blue"
            isActive={selectedColour === "blue"}
            onClick={() => setSelectedColour("blue")}
          />
        </a>
      </div>
    </>
  );
}

export default Colour;
