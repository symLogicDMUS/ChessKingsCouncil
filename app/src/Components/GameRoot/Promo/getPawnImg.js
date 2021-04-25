import {franchisePieceImgs} from "../../../API/sampleData/specialThemeImgs/prod/franchisePieceImgs";
import {specialPieceImg} from "../../../API/sampleData/specialThemeImgs/specialPieceImg/prod";
import {specialThemeList} from "../../styles/themes/specialThemeList.jss";

export function getPawnImg(gameType, color, theme) {
    if (gameType === 'Standard' && specialThemeList.includes(theme)) {
        return franchisePieceImgs[theme]['Pawn'][color]
    } else {
        return specialPieceImg['Pawn'][color];
    }
}