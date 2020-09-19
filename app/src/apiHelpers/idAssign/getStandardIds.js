import {standardIds} from "./standardIds";


export function getStandardIds(exclude) {
    /**the standardIds.py.includes(dict) has key the name of piece, and value the id of piece.
       Reverse this definition and return dict with key the id and value the name. filter
       out names of any standard pieces being substituted by assignIds pieces
    */
    var standIds = {}
    var names = Object.keys(standardIds).filter(name => ! exclude.includes(name))
    for (var [name, id] of Object.entries(standardIds)) {
        if (names.includes(name)) {
            standIds[id] = name
        }
    }
    return standIds;
}

