import SqrContent from "../types/SqrContent";

export function getIndexFirstPiece(ids: SqrContent []) {
    /*take a list of assignIds &&  return the index of the first piece id**/
    for (let i = 0; i < ids.length; i++) {
        if (ids[i] !== "#") {
            return i;
        }
    }
    return "no pieces";
}