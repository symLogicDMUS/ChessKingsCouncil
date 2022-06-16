import { getSqrCase } from "../../sqrCase/getSqrCase";
import { OOB, FRIEND } from "../../sqrCase/sqrCases";
import { dist } from "../../helpers/formulas";
import { mapListRfToXy } from "../../coordType/mapListRfToXy";
import { rfToXy } from "../../coordType/crdCnvrt";
import Rankfile from "../../types/Rankfile";

export function getKingInitialMoves(board, sqr, color) {
    /*get every initial 'king' move (one square away from sqr)**/
    let initMoves = Object.keys(board).filter(
        (sqr2: Rankfile) =>
            dist(sqr, rfToXy(sqr2)) === Math.sqrt(2) ||
            dist(sqr, rfToXy(sqr2)) === 1
    );
    initMoves = initMoves.filter((rf: Rankfile) => {
        const sqr = rfToXy(rf);
        return getSqrCase(board, ...sqr, color) !== OOB;
    });
    initMoves = initMoves.filter((rf: Rankfile) => {
        const sqr = rfToXy(rf);
        return getSqrCase(board, ...sqr, color) !== FRIEND;
    });
    return mapListRfToXy(initMoves);
}