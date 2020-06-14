import React from 'react';
import "../GameRoot.css";
import {getPieceImg} from "../../helpers/getPieceImg";

/**for use during pawn promotion */
export function InactivePiece({id_}) {

  var img_ = getPieceImg(id_);

  return (
    <div>
      <img src={ require(`../pieceImages/${img_}`)} className={"piece"} />
    </div>
  );
}