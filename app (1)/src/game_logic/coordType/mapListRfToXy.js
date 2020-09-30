import {rfToXy} from "./crdCnvrt"


export function mapListRfToXy(list) {
    var xyList = JSON.parse(JSON.stringify(list))
    for (let i = 0; i < xyList.length; i++) {
        xyList[i] = rfToXy(xyList[i])
    }
    return xyList;
}

// module.exports = mapListRfToXy;

/** for node.js
if (require.main === module) {
    var rankfiles = ["a3", "a5", "b1", "c1", "c3", "c5", "d1", "d3", "d5", "f3", "f5", "h3", "h5"]
    console.log(mapListRfToXy(rankfiles))

}
*/