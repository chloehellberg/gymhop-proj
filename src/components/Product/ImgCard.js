import React from "react";
import Rectangle21 from "./../../img/Rectangle_21.png";
import Rectangle23 from "./../../img/Rectangle_23.png";
import Rectangle24 from "./../../img/Rectangle_24.png";
import "./ImgCard.css";
import Vector from "./../../img/Vector.png";

function ImgCard() {
  return (
    <div className="imgContainer">
      <div className="container">
        <img className="shoeImage" id="redProd" src={Rectangle23} alt="Shoe" />
        <div className="zoomIn">
          <img src={Vector} alt="Zoom" />
        </div>
      </div>
      <div className="container">
        <img
          className="shoeImage"
          id="greenProd"
          src={Rectangle21}
          alt="Shoe"
        />
        <div className="zoomIn">
          <img src={Vector} alt="Zoom" />
        </div>
      </div>
      <div className="container">
        <img className="shoeImage" id="blueProd" src={Rectangle24} alt="Shoe" />
        <div className="zoomIn">
          <img src={Vector} alt="Zoom" />
        </div>
      </div>
    </div>
  );
}

export default ImgCard;
