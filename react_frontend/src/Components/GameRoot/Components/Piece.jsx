import React from 'react';
import { useDrag } from 'react-dnd'
import "../GameRoot.css";
import {getPieceImg} from "../../helpers/getPieceImg";

export function Piece({pos, id_, idDict}) {
  var img_ = getPieceImg(id_, idDict);
  var iType = id_.slice(0, 2)
  const [{isDragging}, drag] = useDrag({
    item: { type: iType, pos: pos, id_:id_},
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		})
  })
  
  return (
    <div
    ref={drag}
    style={{
      opacity: isDragging ? 0.5 : 1,
      cursor: 'move'
    }}
  >
      <img src={ require(`../pieceImages/${img_}`)} className={"piece"} />
  </div>
  );
}