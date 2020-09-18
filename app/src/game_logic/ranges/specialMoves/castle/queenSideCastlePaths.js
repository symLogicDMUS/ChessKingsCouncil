// squares between the king &&  the queen-side their.includes(rook) starting positions 
export const queenSideCastlePaths = {'W':["b1", "c1", "d1"],
                            'B':["b8", "c8", "d8"]};                  
Object.preventExtensions(queenSideCastlePaths);
Object.seal(queenSideCastlePaths);
Object.freeze(queenSideCastlePaths);
// module.exports = queenSideCastlePaths;