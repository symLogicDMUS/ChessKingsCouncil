

export function promoMove(data, start, dest) {

    if (! data.specialMoves.isPromo(start, dest)) {
        return 
    }

    data.promo = true;
    data.specialMoves.currentDest = dest;
    data.specialMoves.removePromo([start, dest]);
}