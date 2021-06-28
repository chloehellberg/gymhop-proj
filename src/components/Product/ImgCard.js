import React from "react";

import Rectangle21 from "./../../img/Rectangle_21.png";
import Rectangle23 from "./../../img/Rectangle_23.png";
import Rectangle24 from "./../../img/Rectangle_24.png";
import "./ImgCard.css";
import Vector from "./../../img/Vector.png";
import Ellipse from "./../../img/Ellipse.png";

function ImgCard() {
  return (
    <div className="imgRender">
      {/* <div className="container">
        <img className="shoeImage" src={Rectangle23} alt="Shoe" />
        <div className="zoomIn">
          <img className="imgOne zoom" src={Ellipse} alt="zoomCircle" />
          <img className="imgTwo zoom" src={Vector} alt="zoom" />
        </div>
      </div> */}
      <div className="container">
        <img className="shoeImage" src={Rectangle23} alt="Shoe" />
        <div className="zoomIn"></div>
        <img className="zoom" src={Vector} alt="zoom" />
      </div>
      {/* <div className="container">
        <img className="shoeImage" src={Rectangle21} alt="Shoe" />
        <img className="zoomImage" src={Vector} alt="zoom" />
        <img className="zoomCircle" src={Ellipse} alt="zoomCircle" />
      </div>
      <div className="container">
        <img className="shoeImage" src={Rectangle24} alt="Shoe" />{" "}
        <img className="zoomImage" src={Vector} alt="zoom" />
        <img className="zoomCircle" src={Ellipse} alt="zoomCircle" />
      </div> */}
    </div>
  );
}

export default ImgCard;
