import {getSpanDisplays} from "../ProfileWB/getSpanDisplays";
import {themes} from "../../styles/themes.jss";
import {rankfiles} from "../../helpers/rankfiles";
import {binaryBoard} from "../../helpers/binaryBoard";
import {src} from "./dragonSrcStr";

export function getSpanRangeBoardDragonExample({theme}) {
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
    const range = [
        "step_1sqr90d",
        "step_1sqr45d",
        "step_1sqr0d",
        "step_1sqr315d",
        "step_1sqr270d",
        "step_1sqr225d",
        "step_1sqr180d",
        "step_1sqr135d",
    ]

    let rangeBoard = getSpanDisplays(range, 'd4')
    const light_sqr_fill = themes[theme].even_row;
    const dark_sqr_fill = themes[theme].odd_row;
    const range_fill = themes[theme].span_alt
    let left, top;
    let imgStr = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="480" height="480" viewBox="0 0 480 480">`
    for (const rf of rankfiles) {
        left = rToLeft[rf[0]];
        top = fToTop[rf[1]];
        if (rf === 'd4') {
            imgStr += `<rect id="${rf}" width="60" height="60" transform="translate(${left} ${top})" fill="${binaryBoard[rf] ? light_sqr_fill : dark_sqr_fill}"/>`
            imgStr += `<image id="Dragon" xlink:href="${src}" width="60" height="60" transform="translate(${left} ${top})"/>`;
        } else if (rangeBoard[rf]) {
            imgStr += `<rect id="${rf}" width="60" height="60" transform="translate(${left} ${top})" fill="${range_fill}"/>`;
        } else if (binaryBoard[rf]) {
            imgStr += `<rect id="${rf}" width="60" height="60" transform="translate(${left} ${top})" fill="${light_sqr_fill}"/>`;
        }
        else {
            imgStr += `<rect id="${rf}" width="60" height="60" transform="translate(${left} ${top})" fill="${dark_sqr_fill}"/>`;
        }
    }
    imgStr += `</svg>`;
    return `data:image/svg+xml;base64,` + btoa(imgStr);
}