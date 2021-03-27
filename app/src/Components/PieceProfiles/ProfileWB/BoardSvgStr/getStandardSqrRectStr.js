import {themes} from "../../../styles/themes.jss";
import {binaryBoard} from "../../../helpers/binaryBoard";
import {fToTop, rToLeft} from "./profileWBCrdCnvrt";

export function getStandardSqrRectStr(theme, rf) {
    const left = rToLeft[rf[0]];
    const top = fToTop[rf[1]];
    if (binaryBoard[rf]) {
        return `<rect id="${rf}" width="60" height="60" transform="translate(${left} ${top})" fill="${themes[theme].even_row}"/>`
    }
    return `<rect id="${rf}" width="60" height="60" transform="translate(${left} ${top})" fill="${themes[theme].odd_row}"/>`;
}