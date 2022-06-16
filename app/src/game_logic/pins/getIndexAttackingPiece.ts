import SqrContent from "../types/SqrContent";

export function getIndexAttackingPiece(pieceIds: SqrContent [], allIds: SqrContent []) {
    /*at this step in the process it has been determined that there is a pin. Therefore the attacking piece
      is the second piece encountered on the path. get the id of that piece. then find where it is in the 
      path as a whole. return that index location
    **/
    const pieceId = pieceIds[1];
    return allIds.findIndex((el) => el === pieceId);
}