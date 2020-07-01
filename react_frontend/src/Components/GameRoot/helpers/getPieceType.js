
export function getPieceType(pieceId, pieceNames) {
    let fenId = pieceId[1].toLowerCase();
    return pieceNames[fenId];
}