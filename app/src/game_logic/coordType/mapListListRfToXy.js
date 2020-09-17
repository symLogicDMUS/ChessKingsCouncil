import {mapListRfToXy} from "./mapListRfToXy";


export function mapListListRfToXy(nestedList) {
    var newNestedList = []
    for (var list of nestedList) {
        newNestedList.push(mapListRfToXy(list))
    }
    return newNestedList;
}

// module.exports = mapListListRfToXy;