import {mapListRfToXy} from "./mapListRfToXy";
import {mapListXyToRf} from "./mapListXyToRf";

export function mapDictListRfToXy(dict) {
  var xyDict = JSON.parse(JSON.stringify(dict))
  for (var k of Object.keys(xyDict)) {
    xyDict[k] = mapListRfToXy(xyDict[k]);
  }
  return xyDict;
}

// module.exports = mapDictListRfToXy;

/** for node.js
if (require.main === module) {
  let ranges = {
    'WB1':[],
    'WR1': [],
    'WB2': [],
    'WR2': [],
    'WK1': [],
    'WQ1': [],
    'WP1': ["a3", "a4"],
    'WP2': ["b3", "b4"],
    'WP3': ["c3", "c4"],
    'WP4': ["d3", "d4"],
    'WP5': ["e3", "e4"],
    'WP6': ["f3", "f4"],
    'WP7': ["g3", "g4"],
    'WP8': ["h3", "h4"],
    'WN1': ["a3", "c3"],
    'WN2': ["f3", "h3"]
    }
    console.log(mapDictListRfToXy(ranges))

}
*/
