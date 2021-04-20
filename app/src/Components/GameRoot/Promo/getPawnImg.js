import {specialThemeList} from "../../styles/themes.jss";
import {franchisePieceImgs} from "../../../API/sampleData/specialThemeImgs/prod/franchisePieceImgs";
import {specialPieceImg} from "../../../API/sampleData/specialThemeImgs/specialPieceImg/prod";

export function getPawnImg(gameType, color, theme) {
    if (gameType === 'Standard' && specialThemeList.includes(theme)) {
        return franchisePieceImgs[theme]['Pawn'][color]
    } else {
        return specialPieceImg['Pawn'][color];
    }
}