const pawn2SqrFirstMoves = [[[1, 2], [1, 4]], [[2, 2], [2, 4]], [[3, 2], [3, 4]], [[4, 2], [4, 4]], 
                          [[5, 2], [5, 4]], [[6, 2], [6, 4]], [[7, 2], [7, 4]], [[8, 2], [8, 4]], 
                          [[1, 7], [1, 5]], [[2, 7], [2, 5]], [[3, 7], [3, 5]], [[4, 7], [4, 5]], 
                          [[5, 7], [5, 5]], [[6, 7], [6, 5]], [[7, 7], [7, 5]], [[8, 7], [8, 5]]]
Object.preventExtensions(pawn2SqrFirstMoves);
Object.seal(pawn2SqrFirstMoves);
Object.freeze(pawn2SqrFirstMoves)
module.exports = pawn2SqrFirstMoves;