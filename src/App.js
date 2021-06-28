import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import ImgCard from "./components/Product/ImgCard.js";
import Title from "./components/Product/Title.js";
import Size from "./components/Product/Size.js";
import Colour from "./components/Product/Colour.js";

function App() {
  return (
    <div className="App">
      <div className="leftColumn">
        <ImgCard />
      </div>
      <div className="rightColumn">
        <div className="productControls">
          <Title />
          <Size />
          <Colour />
          <Button className="cartAdd">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
