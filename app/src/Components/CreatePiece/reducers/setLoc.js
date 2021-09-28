import { getBinaryBoardAllFalse } from "../../helpers/getBinaryBoardAllFalse";
import { setOffsetDisplays } from "./setOffsetDisplays";
import { setSpanDisplays } from "./setSpanDisplays";

export const setLoc = (newState, rf) => {
    newState.location = rf;
    newState.spansDispays = getBinaryBoardAllFalse();
    newState.offsetDisplays = getBinaryBoardAllFalse();
    setSpanDisplays(newState);
    setOffsetDisplays(newState);
};
