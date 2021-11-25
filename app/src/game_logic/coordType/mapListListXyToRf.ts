import { mapListXyToRf } from "./mapListXyToRf";

export function mapListListXyToRf(nestedList) {
    const newNestedList = [];
    for (const list of nestedList) {
        newNestedList.push(mapListXyToRf(list));
    }
    return newNestedList;
}

