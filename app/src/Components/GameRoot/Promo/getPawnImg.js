import {franchisePieceImgs} from "../../styles/themes/specialThemeImgs/franchisePieceImgs";
import {specialPieceImgs} from "../../../API/sampleData/specialPieceImgs";
import {specialThemeList} from "../../styles/themes/specialThemeImgs/specialThemeList.jss";

export function getPawnImg(gameType, color, theme) {
    if (gameType === 'Standard' && specialThemeList.includes(theme)) {
        return franchisePieceImgs[theme]['Pawn'][color]
    } else {
        return specialPieceImgs['Pawn'][color];
    }
}