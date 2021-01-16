import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {rankfiles} from "../../helpers/rankfiles";
import {ModalDisplayPiece as Piece} from "./ModalDisplayPiece";
import {stepFuncDict2} from "../../helpers/stepFuncs";
import {outOfBounds} from "../../helpers/oob";
import {rfToXy, xyToRf} from "../../helpers/crdCnvrt";
import {ModalDisplaySquare as Square} from "./ModalDisplaySquare";
import {getBinaryBoarAllFalse} from "../../helpers/getBinaryBoardAllFalse";
import {binaryBoard} from "../../helpers/binaryBoard";
import {useStyles} from "./ModalDisplayBoard.jss";
import {smallBoardFontSizeDesktop as fontSize} from "../../Reuseables/Board.jss";

export function ModalDisplayBoard({img, rangeType, range, theme, location}) {

    const classes = useStyles({theme: theme, fontSize: fontSize});

    const getSpans = () => {
        let rf = location;
        let stepFunc = null;
        let spanDisplays = getBinaryBoarAllFalse()
        for (const funcName of range) {
            stepFunc = stepFuncDict2[funcName];
            rf = stepFunc(rf);
            while (!outOfBounds(rf)) {
                spanDisplays[rf] = true;
                rf = stepFunc(rf);
            }
        }
        return spanDisplays;
    }

    const getOffsets = () => {
        let [x1, y1] = rfToXy(location);
        let [dx, dy] = [-1, -1];
        let offsetDisplays = getBinaryBoarAllFalse()
        range.forEach((xy) => {
            dx = x1 + xy[0];
            dy = y1 + xy[1];
            offsetDisplays[xyToRf(dx, dy)] = true;
        });
        return offsetDisplays;
    }

    const getBoard = (spans, offsets) => {
        let sqrType = null;
        const squares = [];
        for (const rf of rankfiles) {
            if (spans[rf]) {
                sqrType = 'span'
            }
            else if (offsets[rf]) {
                sqrType = 'offset';
            }
            else if (binaryBoard[rf]) {
                sqrType = 'light_normal'
            }
            else {
                sqrType = 'dark_normal'
            }
            if (rf === location) {
                squares.push(
                    <Square rf={rf} key={uuidv4()} sqrType={sqrType} theme={theme}>
                        <Piece pieceImgBase64Str={img} key={uuidv4()} theme={theme}/>
                    </Square>
                );
            } else {
                squares.push(<Square rf={rf} key={uuidv4()} sqrType={sqrType} theme={theme}>{null}</Square>);
            }
        }
        return squares;
    }

    let spans = [];
    let offsets = [];
    if (rangeType === "offsets") offsets = getOffsets();
    else if (rangeType === "spans") spans = getSpans();
    return <div className={classes.display_board}>{getBoard(spans, offsets)}</div>
}

export default ModalDisplayBoard;