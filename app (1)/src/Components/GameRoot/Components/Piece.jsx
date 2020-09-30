import React from 'react';
import { useDrag, DragPreviewImage } from 'react-dnd';
import "../css/piece.css";

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
      <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move'}}>
          <img src={`/Images/Pieces/${img_}`} className={"piece"} alt="icon of piece" />
      </div>
    </>
  );
}