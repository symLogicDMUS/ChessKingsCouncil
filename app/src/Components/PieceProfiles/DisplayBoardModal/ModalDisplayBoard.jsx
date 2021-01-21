import React, {useEffect, useReducer, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {rankfiles} from "../../helpers/rankfiles";
import {ModalDisplayPiece as Piece} from "./ModalDisplayPiece";
import {stepFuncDict2} from "../../helpers/stepFuncs";
import {outOfBounds} from "../../helpers/oob";
import {rfToXy, xyToRf} from "../../helpers/crdCnvrt";
import {ModalDisplaySquare as Square} from "./ModalDisplaySquare";
import {getBinaryBoarAllFalse} from "../../helpers/getBinaryBoardAllFalse";
import {smallBoardFontSizeDesktop as fontSize} from "../../Reuseables/Board.jss";
import {binaryBoard} from "../../helpers/binaryBoard";
import {useStyles} from "./ModalDisplayBoard.jss";

export function reducer(state, action) {
    let rf, stepFunc;
    switch (action.type) {
        case "spans":
            let spans = getBinaryBoarAllFalse()
            for (const funcName of action.range) {
                stepFunc = stepFuncDict2[funcName];
                rf = action.location;
                rf = stepFunc(rf);
                while (!outOfBounds(rf)) {
                    spans[rf] = true;
                    rf = stepFunc(rf);
                }
            }
            return {offsets: state.offsets, spans: spans};
        case "offsets":
            let offsets = getBinaryBoarAllFalse()
            let [x1, y1] = rfToXy(action.location);
            let [dx, dy] = [-1, -1];
            action.range.forEach((xy) => {
                dx = x1 + xy[0];
                dy = y1 + xy[1];
                offsets[xyToRf(dx, dy)] = true;
            });
            return {offsets: offsets, spans: state.spans};
        default:
            throw new Error();
    }
}

export function ModalDisplayBoard({img, pieceName, range, rangeType, theme, location}) {
    const classes = useStyles({theme: theme, fontSize: fontSize});

    const [state, dispatch] = useReducer(reducer, {spans: getBinaryBoarAllFalse(), offsets: getBinaryBoarAllFalse()})

    useEffect(() => {
        switch (rangeType) {
            case 'spans':
                dispatch({type: 'spans', range: range, location: location});
                break;
            case 'offsets':
                dispatch({type: 'offsets', range: range, location: location})
                break;
            default:
                break;
        }
    }, [pieceName, range, rangeType])

    const getBoard = () => {
        let sqrType = null;
        const squares = [];
        for (const rf of rankfiles) {
            if (state.spans[rf]) {
                sqrType = 'span'
            }
            else if (state.offsets[rf]) {
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

    return <div className={classes.display_board}>{getBoard()}</div>
}

export default ModalDisplayBoard;