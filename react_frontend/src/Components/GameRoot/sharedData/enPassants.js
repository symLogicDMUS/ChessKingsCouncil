
export const enPassants = {
    'W': {
        'b5a5': "a6",
        'a5b5': "b6",
        'c5b5': "b6",
        'b5c5': "c6",
        'd5c5': "c6",
        'c5d5': "d6",
        'e5d5': "d6",
        'd5e5': "e6",
        'f5e5': "e6",
        'e5f5': "f6",
        'g5f5': "f6",
        'f5g5': "g6",
        'h5g5': "g6",
        'g5h5': "h6"
    },
    'B': {
        'b4a4': "a3",
        'a4b4': "b3",
        'c4b4': "b3",
        'b4c4': "c3",
        'd4c4': "c3",
        'c4d4': "d3",
        'e4d4': "d3",
        'd4e4': "e3",
        'f4e4': "e3",
        'e4f4': "f3",
        'g4f4': "f3",
        'f4g4': "g3",
        'h4g4': "g3",
        'g4h4': "h3"
    }
}
Object.preventExtensions(enPassants);
Object.seal(enPassants);
Object.freeze(enPassants);

