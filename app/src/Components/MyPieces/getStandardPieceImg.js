import {specialThemeList} from "../styles/themes.jss";
import {getFranchisePieceImg} from "./getFranchisePieceImg";
import {getPieceImg} from "./getPieceImg";

export const getStandardPieceImg = (id, idDict, defs, theme) => {
    if (specialThemeList.includes(theme)) {
        return getFranchisePieceImg(theme, id, idDict)
    } else {
        return getPieceImg(id, idDict, defs)
    }
};