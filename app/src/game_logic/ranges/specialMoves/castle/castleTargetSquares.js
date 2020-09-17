// squares to move the king to initiate a castle. First let key = color, second is is
// 'K' for king side &&  'Q' for queen side
export const castleTargetSquares = {'W': {'Q': "c1", 'K': "g1"},
                                    'B': {'Q': "c8", 'K': "g8"}}
Object.preventExtensions(castleTargetSquares);
Object.seal(castleTargetSquares);
Object.freeze(castleTargetSquares);
// module.exports = castleTargetSquares;