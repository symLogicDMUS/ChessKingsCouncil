import { standardPieceImgStrs } from "./standardPieceImgStrs";

export function filterStandardPieces(imgDict) {
    const standardPieceStrs = Object.values(standardPieceImgStrs);
    const newImgDict = {};
    for (const [imgName, imgStr] of Object.entries(imgDict)) {
        if (!standardPieceStrs.includes(imgStr)) {
            newImgDict[imgName] = imgStr;
        }
    }
    return newImgDict;
}
