import React from "react";
import { Card, Button } from "react-bootstrap";
import "./App.css";
import ImgCard from "./components/Product/ImgCard.js";
import Title from "./components/Product/Title.js";
import Size from "./components/Product/Size.js";
import Colour from "./components/Product/Colour.js";

function App() {
  return (
    <div className="App">
      <Card
        className="mainContainer"
        style={{ width: "960px", height: "735px" }}
      >
        <Card.Header>
          <Title />
          <Size />
          <Colour />
          <Button className="cartAdd">Add to Cart</Button>
        </Card.Header>
        <Card.Body>
          <ImgCard />
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
