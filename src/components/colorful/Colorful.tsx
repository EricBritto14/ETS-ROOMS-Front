import React from "react";
import { HexColorPicker } from "react-colorful";

export default function Colorful(props) {
  const handleColorChange = (color) => {
    props.onColorChange(color);
  };
  return (
    <HexColorPicker
      style={{ width: "140px", height: "150px" }}
      color={props.color}
      onChange={handleColorChange}
    />
  );
}
