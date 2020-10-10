import { standardPieceImgStrs } from "./standardPieceImgStrs";

export function filterStandardPieces(imgDict) {
    var standardPieceStrs = Object.values(standardPieceImgStrs);
    var newImgDict = {};
    for (var [imgName, imgStr] of Object.entries(imgDict)) {
        if (!standardPieceStrs.includes(imgStr)) {
            newImgDict[imgName] = imgStr;
        }
    }
    return newImgDict;
}
