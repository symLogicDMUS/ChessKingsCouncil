// imported from ChessKingsCouncil enPassants.js
export const enPassants = {
    'W': {
        'b5a5': [1, 6],
        'a5b5': [2, 6],
        'c5b5': [2, 6],
        'b5c5': [3, 6],
        'd5c5': [3, 6],
        'c5d5': [4, 6],
        'e5d5': [4, 6],
        'd5e5': [5, 6],
        'f5e5': [5, 6],
        'e5f5': [6, 6],
        'g5f5': [6, 6],
        'f5g5': [7, 6],
        'h5g5': [7, 6],
        'g5h5': [8, 6]
    },
    'B': {
        'b4a4': [1, 3],
        'a4b4': [2, 3],
        'c4b4': [2, 3],
        'b4c4': [3, 3],
        'd4c4': [3, 3],
        'c4d4': [4, 3],
        'e4d4': [4, 3],
        'd4e4': [5, 3],
        'f4e4': [5, 3],
        'e4f4': [6, 3],
        'g4f4': [6, 3],
        'f4g4': [7, 3],
        'h4g4': [7, 3],
        'g4h4': [8, 3]
    }
}
Object.preventExtensions(enPassants);
Object.seal(enPassants);
Object.freeze(enPassants);
// module.exports = enPassants;