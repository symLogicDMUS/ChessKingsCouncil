import {themes} from "../../styles/themes/themes.jss";
import {rankfiles} from "../../helpers/rankfiles";
import {binaryBoard} from "../../helpers/binaryBoard";
import {getOffsetDisplays} from "../ProfileWB/BoardSvgStr/getOffsetDisplays";
import {getSpanDisplays} from "../ProfileWB/BoardSvgStr/getSpanDisplays";

export function getExampleRangeBoardImgStr(theme, src, range, rangeType) {
    const fToTop = {
        8: 0,
        7: 60,
        6: 120,
        5: 180,
        4: 240,
        3: 300,
        2: 360,
        1: 420,
    };
    const rToLeft = {
        a: 0,
        b: 60,
        c: 120,
        d: 180,
        e: 240,
        f: 300,
        g: 360,
        h: 420,
    };
    let rangeBoard;
    if (rangeType==="offsets") {
        rangeBoard = getOffsetDisplays(range, 'd4')
    }
    else {
        rangeBoard = getSpanDisplays(range, 'd4')
    }
    const light_sqr_fill = themes[theme].even_row;
    const dark_sqr_fill = themes[theme].odd_row;
    let range_fill;
    if (rangeType==="offsets") {
        range_fill = themes[theme].offset;
    }
    else {
        range_fill = themes[theme].span;
    }
    let left, top;
    let imgStr = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="480" height="480" viewBox="0 0 480 480">`;
    for (const rf of rankfiles) {
        left = rToLeft[rf[0]];
        top = fToTop[rf[1]];
        if (rf === 'd4') {
            imgStr += `<rect id="${rf}" width="60" height="60" transform="translate(${left} ${top})" fill="${binaryBoard[rf] ? light_sqr_fill : dark_sqr_fill}"/>`
            imgStr += `<image id="Knight" xlink:href="${src}" width="60" height="60" transform="translate(${left} ${top})"/>`;
        } else if (rangeBoard[rf]) {
            imgStr += `<rect id="${rf}" width="60" height="60" transform="translate(${left} ${top})" fill="${range_fill}"/>`;
        } else if (binaryBoard[rf]) {
            imgStr += `<rect id="${rf}" width="60" height="60" transform="translate(${left} ${top})" fill="${light_sqr_fill}"/>`;
        } else {
            imgStr += `<rect id="${rf}" width="60" height="60" transform="translate(${left} ${top})" fill="${dark_sqr_fill}"/>`;
        }
    }
    imgStr += `</svg>`;
    return `data:image/svg+xml;base64,` + btoa(imgStr);
}