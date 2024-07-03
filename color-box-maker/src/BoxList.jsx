import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

const BoxList = () => {
  const INITIAL_STATE = [];
  const [boxes, setBoxes] = useState(INITIAL_STATE);
  const addBox = (box) => {
    const newBox = { ...box, id: uuid() };
    setBoxes((boxes) => [...boxes, newBox]);
  };
  function deleteBox(id) {
    setBoxes(boxes.filter((box) => box.id !== id));
  }

  return (
    <>
      <NewBoxForm addBox={addBox} />
      {boxes.map(({ id, backgroundColor, width, height }) => (
          <Box
            key={id}
            id={id}
            backgroundColor={backgroundColor}
            width={width}
            height={height}
            deleteBox={deleteBox}
          />
        ))}
    </>
  );
};

export default BoxList;
