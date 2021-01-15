export function promoMove(gameRoot, start, dest, setIsPromo) {
    if (!gameRoot.specialMoves.isPromo([start, dest])) {
        setIsPromo(false);
    }

    gameRoot.specialMoves.promoStart = start;
    gameRoot.specialMoves.promoDest = dest;
    gameRoot.specialMoves.removePromo([start, dest]);
    setIsPromo(true);
}
