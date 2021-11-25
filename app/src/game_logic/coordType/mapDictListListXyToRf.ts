import { mapListXyToRf } from "./mapListXyToRf";

export function mapDictListListXyToRf(dict) {
    const rfDict = JSON.parse(JSON.stringify(dict));
    for (const k of Object.keys(rfDict)) {
        for (let i = 0; i < rfDict[k].length; i++) {
            rfDict[k][i] = mapListXyToRf(rfDict[k][i]);
        }
    }
    return rfDict;
}