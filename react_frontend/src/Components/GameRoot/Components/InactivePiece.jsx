import React from 'react';
import "../GameRoot.css";
import {getPieceImg} from "../../MyPieces/getPieceImg";

/**for use during pawn promotion */
export function InactivePiece({id_, idDict}) {

  let img_ = getPieceImg(id_, idDict);

  return (
    <div>
      <img src={ require(`../../MyPieces/Images/${img_}`)} className={"piece"} />
    </div>
  );
}