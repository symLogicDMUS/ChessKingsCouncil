import { mapListXyToRf } from "./mapListXyToRf";

export function mapDictListXyToRf(dict) {
    /**rfDict not rf yet, but will make it be. */
    const rfDict = JSON.parse(JSON.stringify(dict));
    for (const k of Object.keys(rfDict)) {
        rfDict[k] = mapListXyToRf(rfDict[k]);
    }
    return rfDict;
}
