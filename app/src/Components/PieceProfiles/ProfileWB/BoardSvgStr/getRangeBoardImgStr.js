import { rankfiles } from "../../../helpers/rankfiles";
import { getSpanDisplays } from "./getSpanDisplays";
import { getOffsetDisplays } from "./getOffsetDisplays";
import { getStandardSqrRectStr } from "./getStandardSqrRectStr";
import { getRangeSqrRectStr } from "./getRangeSqrRectStr";

export function getRangeBoardImgStr(location, rangeType, range, theme) {
    let rangeBoardObj;
    if (rangeType === "span") {
        rangeBoardObj = getSpanDisplays(range, location);
    } else {
        rangeBoardObj = getOffsetDisplays(range, location);
    }

    let imgStr = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="480" height="480" viewBox="0 0 480 480">`;
    for (const rf of rankfiles) {
        if (rangeBoardObj[rf]) {
            imgStr = imgStr + getRangeSqrRectStr(rangeType, theme, rf);
        } else {
            imgStr = imgStr + getStandardSqrRectStr(theme, rf);
        }
    }
    imgStr += `</svg>`;
    return `data:image/svg+xml;base64,${btoa(imgStr)}`;
}
