const rentIds = require("apiHelpers/idAssign_/rentIds");
const getStandardIds = require("apiHelpers/idAssign_/getStandardIds");
const subIds = require("apiHelpers/idAssign_/subIds");

function idAssign(customPieceNames, subs) {
    /**
    assign custom piece names to standard piece ids, therefore "subbing" for those standard pieces. Standard ids not subed
    for keep their standard piece assignments. For custom pieces not subed but that are pawn promotion options, rent from
    1 of 20 non-standard ids.
    */
    let idDict = subIds(subs)
    idDict = rentIds(idDict, customPieceNames, ignore=Object.keys(subs))  # "ignore" subs because just did that
    idDict.update(getStandardIds(exclude=Object.values(subs)))  # get ids the of standard pieces not subbing for.
    return idDict
}
if (require.main === module) {
    console.log(idAssign(['Jester',
                      'Duke',
                      'Joker',
                      'Morty'],
}
                     {'Jester': 'Queen', 'Duke': 'Bishop'}))

