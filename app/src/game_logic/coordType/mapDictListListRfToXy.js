import {mapListRfToXy} from "./mapListRfToXy";

export function mapDictListListRfToXy(dict) {
    var xyDict = JSON.parse(JSON.stringify(dict))
    for (var k of Object.keys(xyDict)) {
        for (let i = 0; i < xyDict[k].length; i++) {
            xyDict[k][i] = mapListRfToXy(xyDict[k][i])
        }
    }
    return xyDict;
}

// module.exports = mapDictListListRfToXy;

/** for node.js
if (require.main === module) {
    let specialMoves = {
        castles: [ [ 'e1', 'g1' ], [ 'e1', 'c1' ], [ 'e8', 'g8' ], [ 'e8', 'c8' ] ],
        promos: [ [ 'c2', 'c1' ], [ 'c2', 'd1' ] ]
      }
      console.log(mapDictListListRfToXy(specialMoves));

}
*/