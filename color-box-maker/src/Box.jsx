import React from "react";
import "./Box.css";

const Box = ({ id, backgroundColor, width, height, deleteBox }) => {
  return (
    <>
      <div
        className="box"
        data-testid="box"
        style={{
          "--box-bg-color": backgroundColor,
          "--box-width": `${width}px`,
          "--box-height": `${height}px`,
        }}
      ></div>
      <button onClick={() => deleteBox(id)}>X</button>
    </>
  );
};

export default Box;
