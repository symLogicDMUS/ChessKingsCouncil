// key is a type of piece, value is list of the type of paths that piece can attack on.
let PieceTypes = {'Rook': ['0d', '90d', '180d', '270d'],
                  'Bishop': ['45d', '135d', '225d', '315d'],
                  'Queen': ['0d', '90d', '180d', '270d', '45d', '135d', '225d', '315d'],
                  'King': [],
                  'Knight': [],
                  'Pawn': [] 
                }

// module.exports = PieceTypes;