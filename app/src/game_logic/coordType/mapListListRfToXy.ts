import { mapListRfToXy } from "./mapListRfToXy";

export function mapListListRfToXy(nestedList) {
    const newNestedList = [];
    for (const list of nestedList) {
        newNestedList.push(mapListRfToXy(list));
    }
    return newNestedList;
}

