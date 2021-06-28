import React, { useState } from "react";
import { ColourButton } from "../ColourButton/ColourButton";
import "./Colour.css";

function Colour() {
  const [selectedColour, setSelectedColour] = useState("");

  return (
    <>
      <h4 className="colourTitle">Colour</h4>
      <div className="colourContainer">
        <ColourButton
          color="red"
          isActive={selectedColour === "red"}
          onClick={() => setSelectedColour("red")}
        />
        <ColourButton
          color="green"
          isActive={selectedColour === "green"}
          onClick={() => setSelectedColour("green")}
        />
        <ColourButton
          color="blue"
          isActive={selectedColour === "blue"}
          onClick={() => setSelectedColour("blue")}
        />
      </div>
    </>
  );
}

export default Colour;
