import React, { useState } from "react";
import { SizeButton } from "../SizeButton/SizeButton";
import "./Size.css";

function Size() {
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <>
      <h4 className="sizeTitle">Size</h4>
      <div className="buttonContainer">
        <SizeButton
          isActive={selectedSize === "small"}
          onClick={() => setSelectedSize("small")}
        >
          Small
        </SizeButton>
        <SizeButton
          isActive={selectedSize === "medium"}
          onClick={() => setSelectedSize("medium")}
        >
          Medium
        </SizeButton>
        <SizeButton
          isActive={selectedSize === "large"}
          onClick={() => setSelectedSize("large")}
        >
          Large
        </SizeButton>
        <SizeButton
          isActive={selectedSize === "xl"}
          onClick={() => setSelectedSize("xl")}
        >
          Extra Large
        </SizeButton>
      </div>
      <hr className="lineStrike" />
    </>
  );
}

export default Size;
