import {getFranchisePieceImg} from "./getFranchisePieceImg";
import {getPieceImg} from "./getPieceImg";
import {specialThemeList} from "../../../Components/styles/themes/specialThemeList.jss";

export const getStandardPieceImg = (id, idDict, defs, theme) => {
    if (specialThemeList.includes(theme)) {
        return getFranchisePieceImg(theme, id, idDict)
    } else {
        return getPieceImg(id, idDict, defs)
    }
};