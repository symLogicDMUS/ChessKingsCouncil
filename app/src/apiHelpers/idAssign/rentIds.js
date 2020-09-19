import {idsForRent} from "./idsForRent";
import {shuffle} from "../../Components/helpers/shuffleArray";


export function rentIds(idDict, customNames, ignore) {
    /**for custom pieces not for.includes(subbing) a standard (these are pawn promotion options), pick id from the 20 alphabet
       characters not used by a standard piece.
    */
    var id;
    var ids = JSON.parse(JSON.stringify(idsForRent))
    ids = shuffle(ids)
    for (var name of customNames) {
        if (ignore && ignore.includes(name)) {
            continue
        }
        id = ids.shift();
        idDict[id] = name;
    }
    return idDict;
}

// module.exports = rentIds;

/** for node.js
if (require.main === module) {
    console.log(rentIds({'b': 'Duke', 'q': 'Jester'}, ['Joker', 'Morty']))

}
*/