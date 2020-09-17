

export function promoMove(gameroot, start, dest) {

    if (! gameroot.specialMoves.isPromo(start, dest)) {
        return 
    }

    gameroot.updateSpecialCase("promo");
    gameroot.specialMoves.currentDest = dest;
    gameroot.specialMoves.removePromo([start, dest]);
}