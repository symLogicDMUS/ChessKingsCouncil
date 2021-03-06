import React from "react";
import {v4 as uuidv4} from "uuid";
import {src} from "./dragonSrcStr";
import MediaQuery from "react-responsive/src";
import {rankfiles} from "../../helpers/rankfiles";
import {binaryBoard} from "../../helpers/binaryBoard";
import {PartialRangePiece as Piece} from "../PartialRangeModal/PartialRangePiece";
import {getBinaryBoarAllFalse} from "../../helpers/getBinaryBoardAllFalse";
import {fontSize00301, fontSize00276} from "../../styles/fontSizes.jss";
import {board} from "../../Reuseables/Board.jss";
import {useStyles} from "../../Reuseables/Square.jss";

export const fontSizes = {
    desktop: fontSize00301,
    mobile: fontSize00276,
}

export function SampleRangeBoard({theme}) {

    const classes = useStyles({theme: theme, fontSize: fontSizes.desktop, type: 'normal'});

    const locationC3 = 'c3'
    const rangeTypeSpan = 'span';
    const sampleBoardObj = getBinaryBoarAllFalse()
    for (const rf of ['d4', 'e5', 'f6', 'g7', 'h8']) {
        sampleBoardObj[rf] = true
    }

    const getBoard = () => {
        const squares = [];
        for (let rf of rankfiles) {
            if (rf === locationC3) {
                squares.push(
                    <div key={uuidv4()}
                         className={sampleBoardObj[rf] ? classes.span :
                         (binaryBoard[rf] ? classes.light_normal : classes.dark_normal)}
                    >
                        <Piece
                            src={src}
                            key={uuidv4()}
                        />
                    </div>
                );
            } else {
                squares.push(
                    <div key={uuidv4()}
                         className={sampleBoardObj[rf] ? classes.span :
                             (binaryBoard[rf] ? classes.light_normal : classes.dark_normal)}
                    >
                        {null}
                    </div>
                );
            }
        }
        return squares;
    };


    return (
        <div>
            <MediaQuery minDeviceHeight={768}>
                <div style={board(fontSizes.desktop)}>
                    {getBoard()}
                </div>
            </MediaQuery>
            <MediaQuery maxDeviceHeight={767}>
                <div style={board(fontSizes.mobile)}>
                    {getBoard()}
                </div>
            </MediaQuery>
        </div>
    );
}
