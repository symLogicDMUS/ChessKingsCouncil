const standardIds = require("./standardIds");


function getStandardIds(exclude=[]) {
    /**the standardIds.py.includes(dict) has key the name of piece, and value the id of piece.
       Reverse this definition and return dict with key the id and value the name. filter
       out names of any standard pieces being substituted by assignIds pieces
    */
    let standardIds = {}
    let names = Object.keys(standardIds).filter(name => ! exclude.includes(name))
    for (var [name, id_] of Object.entries(standardIds)) {
        if (names.includes(name)) {
            standardIds[id_] = name
        }
    }
    return standardIds
}

