import React from 'react';
import { DragPreviewImage, useDrag } from 'react-dnd';
import "../css/Piece.css";

export function Piece({pos, id_, img_}) {
  let iType = id_.slice(0, 2);
  const [{isDragging}, drag] = useDrag({
    item: { type: iType, pos: pos, id_:id_},
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		})
  })
  
  return (
    <>
      <div ref={drag} style={{ opacity: isDragging ? 0 : 1, cursor: 'move'}}>
          <img src={ require(`../../MyPieces/Images/${img_}`)} className={"piece"} />
      </div>
    </>
  );
}