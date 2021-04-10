import {specialThemeList} from "../../styles/themes.jss";
import {franchisePieceImgs} from "../../MyPieces/dev1/franchisePieceImgs";
import {specialPieceImg} from "../../MyPieces/specialPieceImg/dev1";

export function getPawnImg(gameType, color, theme) {
    if (gameType === 'Standard' && specialThemeList.includes(theme)) {
        return franchisePieceImgs[theme]['Pawn'][color]
    } else {
        return specialPieceImg['Pawn'][color];
    }
}