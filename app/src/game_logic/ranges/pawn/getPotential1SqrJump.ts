import { step_1sqr90d, step_1sqr270d } from "../../helpers/stepFuncs";
import XY from "../../types/XY";
import Color from "../../types/Color";

export function getPotential1SqrJump(sqr: XY, color: Color) {
    /* get the potential 1 square move ahead, for the pawn at location sqr of given color**/
    if (color === "W") {
        return step_1sqr90d(...sqr);
    } else if (color === "B") {
        return step_1sqr270d(...sqr);
    }
}

