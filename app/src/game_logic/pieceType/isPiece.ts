import SqrContent from "../types/SqrContent";

export function isPiece(id: SqrContent) {
    /*return true if id matches piece id pattern, otherwise return false **/
    return id.match(`(W|B)[A-Z][1-9]`) !== null;
}