export function promoMove(gameRoot, start, dest, dispatch) {
    if (!gameRoot.specialMoves.isPromo([start, dest])) {
        return;
    }

    gameRoot.isPromo = true;
    gameRoot.specialMoves.pendingPromo = dest;
    gameRoot.specialMoves.removePromo([start, dest]);
}
