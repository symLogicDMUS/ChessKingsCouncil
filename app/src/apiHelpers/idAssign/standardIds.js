export const standardIds = {
    'Rook': 'r',
    'Bishop': 'b',
    'Knight': 'n',
    'Queen': 'q',
    'King': 'k',
    'Pawn': 'p'
}
Object.preventExtensions(standardIds);
Object.seal(standardIds);
Object.freeze(standardIds);