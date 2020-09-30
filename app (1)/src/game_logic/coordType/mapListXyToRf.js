import {xyToRf} from "./crdCnvrt";

export function mapListXyToRf(list) {
    var rfList = JSON.parse(JSON.stringify(list))
    for (let i = 0; i < rfList.length; i++) {
        rfList[i] = xyToRf(rfList[i][0], rfList[i][1])
    }
    return rfList;
}

// module.exports = mapListXyToRf;