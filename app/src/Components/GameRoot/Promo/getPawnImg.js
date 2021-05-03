import {franchisePieceImgs} from "../../../API/sampleData/specialThemeImgs/franchisePieceImgs";
import {specialPieceImgs} from "../../../API/sampleData/specialPieceImgs";
import {specialThemeList} from "../../styles/themes/specialThemeList.jss";

export function getPawnImg(gameType, color, theme) {
    if (gameType === 'Standard' && specialThemeList.includes(theme)) {
        return franchisePieceImgs[theme]['Pawn'][color]
    } else {
        return specialPieceImgs['Pawn'][color];
    }
}