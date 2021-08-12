export const board = () => ({
    display: "grid",
});

export const dnd_layer = (boardSize, boardPos, z) => ({
    zIndex: z,
    width: boardSize,
    height: boardSize,
    top: boardPos.top,
    left: boardPos.left,
    position: "fixed",
});

export const game_board = (boardSize, boardPos, z) => ({
    ...dnd_layer(boardSize, boardPos, z),
    display: "grid",
});
