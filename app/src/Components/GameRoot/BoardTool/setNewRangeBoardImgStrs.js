// import {specialThemeList} from "../../styles/themes.jss";
// import {franchisePieceImgs} from "../../MyPieces/dev1/franchisePieceImgs";
// import {standardPieceDefs} from "../../NewGame/standardPieceDefs/dev1";
// import {getRangeBoardImgStrs} from "../../PieceProfiles/ProfileWB/getRangeBoardImgStrs";

/*
export function setNewRangeBoardImgStrs(theme, gameType, idDict, pieceDefs) {
    const colors = ["W", "B"];
    if (gameType === 'Standard') {
        if (specialThemeList.includes(theme)) {
            for (const pieceName of Object.keys(pieceDefs)) {
                for (const color of colors) {
                    pieceDefs[pieceName][color].img = franchisePieceImgs[theme][pieceName][color]
                }
            }
        } else {
            for (const pieceName of Object.keys(pieceDefs)) {
                for (const color of colors) {
                    pieceDefs[pieceName][color].img = standardPieceDefs[pieceName][color].img;
                }
            }
        }
        return getRangeBoardImgStrs(theme, pieceDefs);
    }
    else {
        return getRangeBoardImgStrs(theme, pieceDefs);
    }
}
*/