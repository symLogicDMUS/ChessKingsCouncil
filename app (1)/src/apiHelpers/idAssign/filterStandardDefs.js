import {StandardIds} from "./standardIds";


export function filterStandardDefs(subs) {
    /* **/
    let names = JSON.parse(JSON.stringify(StandardIds))
    for (var s of Object.keys(subs)) {
        delete names[subs[s]]
    }
    return names
}


/** for node.js
if (require.main === module) {
    console.log(filterStandardDefs({'Jester': 'Queen', 'Duke': 'Bishop'}))

}
*/