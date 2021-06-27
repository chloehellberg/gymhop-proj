import React from "react";
import { Card } from "react-bootstrap";
import Rectangle21 from "./../../img/Rectangle_21.png";
import Rectangle23 from "./../../img/Rectangle_23.png";
import Rectangle24 from "./../../img/Rectangle_24.png";
import "./ImgCard.css";

function ImgCard() {
  return (
    <div className="imgRender">
      <Card>
        <Card.Img className="shoeImage" src={Rectangle21} alt="Shoe" />
      </Card>
    </div>
  );
}

export default ImgCard;
