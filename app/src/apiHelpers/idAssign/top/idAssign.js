import {rentIds} from "../rentIds";
import {getStandardIds} from "../getStandardIds";
import {subIds} from "../subIds";

export function idAssign(customPieceNames, subs) {
    /**
    assign custom piece names to standard piece ids, therefore "subbing" for those standard pieces. Standard ids not subed
    for keep their standard piece assignments. For custom pieces not subed but that are pawn promotion options, rent from
    1 of 20 non-standard ids.
    */
    var idDict = subIds(subs)
    idDict = rentIds(idDict, customPieceNames, Object.keys(subs))  // "ignore" subs because just did that
    idDict = {...idDict, ...getStandardIds(Object.values(subs)) } // get ids the of standard pieces not subbing for.
    return idDict;
}


/**  for node.js
if (require.main === module) {
    console.log(idAssign(['Jester',
                      'Duke',
                      'Joker',
                      'Morty'], {'Jester': 'Queen', 'Duke': 'Bishop'}))
}
*/