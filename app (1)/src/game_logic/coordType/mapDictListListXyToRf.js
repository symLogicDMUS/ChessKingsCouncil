import {mapListXyToRf} from "./mapListXyToRf";



export function mapDictListListXyToRf(dict) {
    var rfDict = JSON.parse(JSON.stringify(dict))
    for (var k of Object.keys(rfDict)) {
        for (let i = 0; i < rfDict[k].length; i++) {
            rfDict[k][i] = mapListXyToRf(rfDict[k][i])
        }
    }
    return rfDict;
}

// module.exports = mapDictListListXyToRf;

/** for node.js
if (require.main === module) {
    let specialMoves = {
        castles: [
          [
            [5, 1],
            [7, 1],
          ],
          [
            [5, 1],
            [3, 1],
          ],
          [
            [5, 8],
            [7, 8],
          ],
          [
            [5, 8],
            [3, 8],
          ],
        ],

        promos: [
          [
            [3, 2],
            [3, 1],
          ],
          [
            [3, 2],
            [4, 1],
          ],
        ],
      };
    console.log(mapDictListListXyToRf(specialMoves));

}
*/