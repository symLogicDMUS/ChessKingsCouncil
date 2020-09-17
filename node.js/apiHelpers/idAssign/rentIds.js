const idsForRent = require("./idsForRent");


function rentIds(idDict, customNames, ignore=[]) {
    /**for custom pieces not for.includes(subbing) a standard (these are pawn promotion options), pick id from the 20 alphabet
       characters not used by a standard piece.
    */
    let ids = JSON.parse(JSON.stringify(idsForRent))
    //call to function to shuffle array goes here
    for (var name of customNames) {
        if (ignore.includes(name)) {
            continue
        }
        let id_ = ids.shift();
        idDict[id_] = name;
    }
    return idDict;
}

module.exports = rentIds;

if (require.main === module) {
    console.log(rentIds({'b': 'Duke', 'q': 'Jester'}, ['Joker', 'Morty']))
}