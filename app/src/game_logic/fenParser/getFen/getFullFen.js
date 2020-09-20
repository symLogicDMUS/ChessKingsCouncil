

export function getFullFen(posStr, fenObj) {
    /*join the position string with the status attributes updated throughout the game, to get the full fen string**/
    var fen = posStr + 
              " " +  
              fenObj["turn"] + 
              " " + 
              fenObj["castle_avail"] + 
              " " + 
              fenObj["en_passant_avail"] + 
              " " + 
              fenObj["hm_clock"].toString() + 
              " " + 
              fenObj["fm_clock"].toString()
    return fen;
}

// module.exports = getFullFen;

/* for Node.js
if (require.main === module) {

}
*/
