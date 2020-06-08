

export function promoMove(data, start, dest) {

    if (! data.specialMoves.isPromo(start, dest)) {
        return 
    }

    data.promo = true;
    data.specialMoves.currentDest = dest;
    let loc = data.specialMoves.promos.indexOf([start, dest])
    data.specialMoves.promos.splice(loc, 1);
    
}