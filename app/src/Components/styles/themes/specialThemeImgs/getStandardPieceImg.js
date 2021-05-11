import {getPieceImg} from "./getPieceImg";
import {getFranchisePieceImg} from "./getFranchisePieceImg";
import {specialThemeList} from "./specialThemeList.jss";

export const getStandardPieceImg = (id, idDict, defs, theme) => {
    if (specialThemeList.includes(theme)) {
        return getFranchisePieceImg(theme, id, idDict)
    } else {
        return getPieceImg(id, idDict, defs)
    }
};