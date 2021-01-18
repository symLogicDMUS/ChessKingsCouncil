import React from "react";
import {board_svg_str} from "../../styles/icons/board_svg_str";
import {rankfiles} from "../../helpers/rankfiles";

export function getBoardImgBase64Str(pieces, board) {
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
    let pieceId, left, top, src;
    let svgPieces = [];
    for (const rf of rankfiles) {
        if (board[rf] !== "#") {
            pieceId = board[rf];
            left = rToLeft[rf[0]];
            top = fToTop[rf[1]];
            src = pieces[pieceId].src;
            svgPieces.push(`<g id="${rf + pieceId}" transform="translate(${left} ${top})"><symbol id="${pieceId}" viewBox="0 0 60 60">${atob(src.split(",")[1])}</symbol><use xlink:href="#${pieceId}" width="35.5"  height="35.5" /></g>`);
        }
    }
    return <div>{board_svg_str(svgPieces)}</div>;
}
