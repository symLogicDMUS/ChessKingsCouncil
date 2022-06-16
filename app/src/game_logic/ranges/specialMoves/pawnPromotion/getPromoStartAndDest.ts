export function getPromoStartAndDest(promos) {
    /**for printing a board */
    const promoStarts = [];
    const promoDests = [];
    for (const promo of promos) {
        if (promo.length === 2) {
            promoStarts.push(promo[0]);
            promoDests.push(promo[1]);
        }
    }
    return [promoStarts, promoDests];
}

// module.exports = getPromoStartAndDest;
