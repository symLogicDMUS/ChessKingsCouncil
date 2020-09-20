import {mapDictListXyToRf} from "./mapDictListXyToRf";
import {mapListXyToRf} from "./mapListXyToRf";


export function convertToRf(initRanges, pins, threatArea, mtRestriction) {

    initRanges = mapDictListXyToRf(initRanges);
    pins = mapDictListXyToRf(pins);
    threatArea = mapListXyToRf(threatArea);
    mtRestriction = mapDictListXyToRf(mtRestriction);

    return [initRanges, pins, threatArea, mtRestriction]
}