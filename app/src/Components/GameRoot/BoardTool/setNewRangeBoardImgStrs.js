import {newData} from "../../NewGame/NewData";
import {specialThemeList} from "../../styles/themes.jss";
import {getRangeBoardImgStrs} from "../../PieceProfiles/ProfileWB/getRangeBoardImgStrs";
import {franchisePieceImgs} from "../../MyPieces/franchisePieceImgs";

export function setNewRangeBoardImgStrs(theme, gameType, idDict, pieceDefs) {
    const colors = ["W", "B"];
    if (gameType === 'Standard' && specialThemeList.includes(theme)) {
        for (const pieceName of Object.keys(pieceDefs)) {
            for (const color of colors) {
                pieceDefs[pieceName][color].img = franchisePieceImgs[theme][pieceName][color]
            }
        }
    } else {
        for (const pieceName of Object.keys(pieceDefs)) {
            for (const color of colors) {
                pieceDefs[pieceName][color].img = newData.piece_defs[pieceName][color].img;
            }
        }
    }
    return getRangeBoardImgStrs(theme, pieceDefs)
}