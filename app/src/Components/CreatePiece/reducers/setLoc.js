import {getBinaryBoarAllFalse} from "../../helpers/getBinaryBoardAllFalse";
import {setOffsetDisplays} from "./setOffsetDisplays";
import {setSpanDisplays} from "./setSpanDisplays";

export const setLoc = (newState, rf) => {
    newState.location = rf;
    newState.spansDispays = getBinaryBoarAllFalse()
    newState.offsetDisplays = getBinaryBoarAllFalse();
    setSpanDisplays(newState);
    setOffsetDisplays(newState);
};