import { getRangeBoardImgStr } from "../../PieceProfiles/ProfileWB/getRangeBoardImgStr";

export const addRangeImgToDefs = (pieceDefs, theme) => {
    const colors = ["W", "B"];
    for (const pieceName of Object.keys(pieceDefs)) {
        for (const color of colors) {
            pieceDefs[pieceName][color].span_img = getRangeBoardImgStr(
                pieceDefs[pieceName][color].img,
                "d4",
                "span",
                pieceDefs[pieceName][color].spans,
                pieceName,
                theme
            );
            pieceDefs[pieceName][color].offset_img = getRangeBoardImgStr(
                pieceDefs[pieceName][color].img,
                "d4",
                "offset",
                pieceDefs[pieceName][color].offsets,
                pieceName,
                theme
            );
        }
    }
    return pieceDefs;
};
