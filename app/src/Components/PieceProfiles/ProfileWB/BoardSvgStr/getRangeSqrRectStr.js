import {themes} from "../../../styles/themes/themes.jss";
import {fToTop, rToLeft} from "./profileWBCrdCnvrt";

export function getRangeSqrRectStr(rangeType, theme, rf) {
    const left = rToLeft[rf[0]];
    const top = fToTop[rf[1]];
    if (rangeType === "span") {
        return `<rect id="${rf}" width="60" height="60" transform="translate(${left} ${top})" fill="${themes[theme].span_alt}"/>`;
    }
    return `<rect id="${rf}" width="60" height="60" transform="translate(${left} ${top})" fill="${themes[theme].offset}"/>`;
}