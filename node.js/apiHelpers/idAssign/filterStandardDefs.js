const StandardIds = require("./standardIds");


function filterStandardDefs(subs) {
    /* **/
    let names = JSON.parse(JSON.stringify(StandardIds))
    for (var s of Object.keys(subs)) {
        delete names[subs[s]]
    }
    return names
}


if (require.main === module) {
    console.log(filterStandardDefs({'Jester': 'Queen', 'Duke': 'Bishop'}))
}