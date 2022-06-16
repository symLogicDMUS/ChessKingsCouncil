import { mapListRfToXy } from "./mapListRfToXy";

export function mapDictListListRfToXy(dict) {
    const xyDict = JSON.parse(JSON.stringify(dict));
    for (const k of Object.keys(xyDict)) {
        for (let i = 0; i < xyDict[k].length; i++) {
            xyDict[k][i] = mapListRfToXy(xyDict[k][i]);
        }
    }
    return xyDict;
}
