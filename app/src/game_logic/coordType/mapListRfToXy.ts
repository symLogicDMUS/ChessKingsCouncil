import { rfToXy } from "./crdCnvrt";

export function mapListRfToXy(list) {
    const xyList = JSON.parse(JSON.stringify(list));
    for (let i = 0; i < xyList.length; i++) {
        xyList[i] = rfToXy(xyList[i]);
    }
    return xyList;
}

