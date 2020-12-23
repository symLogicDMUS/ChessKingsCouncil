import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import {rankfiles} from "../../helpers/rankfiles";
import {ModalDisplayPiece as Piece} from "./ModalDisplayPiece";
import {stepFuncDict2} from "../../helpers/stepFuncs";
import {outOfBounds} from "../../helpers/oob";
import {rfToXy, xyToRf} from "../../helpers/crdCnvrt";
import {ModalDisplaySquare as Square} from "./ModalDisplaySquare";
import {smallBoardFontSize as fontSize} from "../../styles/fontSize.jss";
import {getBinaryBoarAllFalse} from "../../helpers/getBinaryBoardAllFalse";
import {binaryBoard} from "../../helpers/binaryBoard";
import {useStyles} from "./ModalDisplayBoard.jss";

export function ModalDisplayBoard({img, rangeType, range, theme, location}) {

    let [spanDisplays, setSpanDisplays] = useState({})
    let [offsetDisplays, setOffsetDisplays] = useState({})

    const classes = useStyles({theme: theme, fontSize: fontSize});

    const setSpan = (_spanDisplays, stepFunc) => {
        let rf = location;
        rf = stepFunc(rf);
        while (!outOfBounds(rf)) {
            _spanDisplays[rf] = true;
            rf = stepFunc(rf);
        }
    }

    const setSpans = () => {
        let stepFunc = null;
        let _spanDisplays = getBinaryBoarAllFalse()
        for (const funcName of range) {
            stepFunc = stepFuncDict2[funcName];
            setSpan(_spanDisplays, stepFunc);
        }
        setSpanDisplays(_spanDisplays)
    }

    const setOffsets = () => {
        let [x1, y1] = rfToXy(location);
        let [dx, dy] = [-1, -1];
        let _offsetDisplays = getBinaryBoarAllFalse()
        range.forEach((xy) => {
            dx = x1 + xy[0];
            dy = y1 + xy[1];
            _offsetDisplays[xyToRf(dx, dy)] = true;
        });
        setOffsetDisplays(_offsetDisplays)
    }

    const getSqrType = (rf) => {
        if (spanDisplays[rf]) return 'span'
        if (offsetDisplays[rf]) return 'offset'
        if (binaryBoard[rf]) return 'light_normal'
        return 'dark_normal'
    }

    const getBoard = () => {
        const squares = [];
        for (const rf of rankfiles) {
            if (rf === location) {
                squares.push(
                    <Square rf={rf} key={rf} theme={theme} sqrType={getSqrType(rf)}>
                        <Piece pieceImgBase64Str={img} key={uuidv4()} theme={theme}/>
                    </Square>
                );
            } else {
                squares.push(<Square rf={rf} key={rf} sqrType={getSqrType(rf)} theme={theme}>{null}</Square>);
            }
        }
        return squares;
    }

    if (rangeType === "offsets") setOffsets();
    else if (rangeType === "spans") setSpans();
    else return <div style={{color: "#EC2525"}}>ERROR: invalid rangeType</div>;
    return <div className={classes.display_board}>{getBoard()}</div>;
}

export default ModalDisplayBoard;