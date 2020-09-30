

export function getFandR(pieceLocs, statuses) {
    let friends = []
    let enemies = []
    for (let i = 0; i < pieceLocs.length; i++) {
        switch(statuses[i]) {
            case 'f':
                friends.push(pieceLocs[i]);
                break;
            case 'e':
                enemies.push(pieceLocs[i]);
                break;
            default:
                console.log("error in getFandR.js. invalid piece status type");
                break;
        }
    }
    return [friends, enemies]
}

// module.exports = getFandR;