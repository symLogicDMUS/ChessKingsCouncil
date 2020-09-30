

export function promoMove(gameroot, start, dest) {

    if (! gameroot.specialMoves.isPromo([start, dest])) {
        return 
    }

    gameroot.updateSpecialCase("promo");
    gameroot.specialMoves.pendingPromo = dest;
    gameroot.specialMoves.removePromo([start, dest]);
}