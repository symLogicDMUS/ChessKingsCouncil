import { mapListRfToXy } from "./mapListRfToXy";
import { mapListXyToRf } from "./mapListXyToRf";

export function mapDictListRfToXy(dict) {
    const xyDict = JSON.parse(JSON.stringify(dict));
    for (const k of Object.keys(xyDict)) {
        xyDict[k] = mapListRfToXy(xyDict[k]);
    }
    return xyDict;
}