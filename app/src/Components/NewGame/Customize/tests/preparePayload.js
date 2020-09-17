let subs_ = {
    "Rook":"Duke",
    "Bishop":"Jester",
    "Queen":null,
    "Knight":null
}

promos = ["evilMorty", "Firelord"]

names = []

function preparePayload() {
    let names = [];
    let subs = {};
    Object.entries(subs_).forEach( ([standard, sub]) => {
        if (sub != null)
            subs[sub] = standard;
    });
    names.push(...Object.keys(subs))
    names.push(...promos);
    return [names, subs]
}

if (require.main === module)
    console.log(preparePayload())