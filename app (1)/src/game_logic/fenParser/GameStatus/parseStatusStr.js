

export function parseStatusStr(statusStr) {
    /*break the status part of the fen string into its components &&  return**/
    let turn = statusStr.match(/(w|b)/g)[0]
    statusStr = statusStr.replace(turn, '')

    let castleAvail = statusStr.match(/(KQkq|KQk|KQq|KQ|Qkq|Qk|Qq|Q|Kkq|Kk|Kq|K|kq|k|q|-)/g)[0]
    statusStr = statusStr.replace(castleAvail, '', 1)

    let enPassantAvail = statusStr.match(/(([a-h][1-8])|-)/g)[0]
    statusStr = statusStr.replace(enPassantAvail, '')

    let hmNum = statusStr.match(/\d+/g)[0]
    statusStr = statusStr.replace(hmNum, '')

    let fmNum = statusStr.match(/\d+/)[0]
    statusStr = statusStr.replace(fmNum, '')

    return [turn, castleAvail, enPassantAvail, hmNum, fmNum]
}

// module.exports = parseStatusStr;

/** for node.js
if (require.main === module) {
    let statusStrs =
        ['w KQkq - 1 25',
         'w K - 0 1',
         'w KQkq - 8 13',
         'w KQkq - 8 13',
         'w - - 0 1',
         'w - - 0 1',
         'w - - 0 1',
         'w - - 0 1',
         'w - - 0 1',
         'w KQkq b6 0 3',
         'w KQ a6 0 10',
         'w KQkq - 0 1',
         'w - - 0 1',
         'w KQ a6 0 10',
         'b KQkq - 1 11',
         'w KQkq h6 0 7',
         'w - - 0 1',
         'w - - 0 1',
         'w - - 0 1',
         'w - - 0 1',
         'w - - 0 1',
         'w - - 0 1'
        ]
    for (var s of statusStrs) {
        console.log(parseStatusStr(s))
    }

}
*/