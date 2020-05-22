import React from 'react';
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd'
import "../index.css";

export default function Knight() {
  const [{isDragging}, drag] = useDrag({
    item: { type: ItemTypes.KNIGHT },
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		})
  })
  return (
    <div
    ref={drag}
    style={{
      cursor: 'move'
    }}
  >
      <img src={ require("../images_of_pieces/bN.png")} className={"piece"} />
  </div>
  );
}

