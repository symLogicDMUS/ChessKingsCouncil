import {getRangeBoardImgStr} from "./getRangeBoardImgStr";


export function getRangeBoardImgStrs(theme, defs) {
    const colors = ["W", "B"];
    for (const pieceName of Object.keys(defs)) {
        for (const color of colors) {
            defs[pieceName][color].span_img = getRangeBoardImgStr(
                "d4",
                "span",
                defs[pieceName][color].spans,
                theme,
            );
            defs[pieceName][color].offset_img = getRangeBoardImgStr(
                'd4',
                'offset',
                defs[pieceName][color].offsets,
                theme
            )
        }
    }
    return defs
}