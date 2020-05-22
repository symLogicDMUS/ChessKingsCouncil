import React from 'react';
import { useDrag } from 'react-dnd'
import "../index.css";
import {getPieceImg} from "../helperFuncs/getPieceImg";
import {getItemType} from "../helperFuncs/getItemType";

export default function Piece({pos, id_}) {
  var img_ = getPieceImg(id_);
  var iType = getItemType(id_);
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
      <img src={ require(`../images_of_pieces/${img_}`)} className={"piece"} />
  </div>
  );
}