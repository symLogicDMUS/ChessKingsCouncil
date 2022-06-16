import Rankfile from "../types/Rankfile";
import { mapDictListXyToRf } from "./mapDictListXyToRf";
import { mapListXyToRf } from "./mapListXyToRf";
import Ranges from "../types/Ranges";

export function convertToRf(initRanges: Ranges, pins: Ranges, threatArea: Rankfile [], mtRestriction: Ranges) {
    initRanges = mapDictListXyToRf(initRanges);
    pins = mapDictListXyToRf(pins);
    threatArea = mapListXyToRf(threatArea);
    mtRestriction = mapDictListXyToRf(mtRestriction);

    return [initRanges, pins, threatArea, mtRestriction];
}
