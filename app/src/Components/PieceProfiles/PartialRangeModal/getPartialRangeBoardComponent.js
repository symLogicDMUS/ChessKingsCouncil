import React from "react";
import {v4 as uuidv4} from "uuid";
import {rankfiles} from "../../helpers/rankfiles";
import {binaryBoard} from "../../helpers/binaryBoard";
import {PartialRangePiece as Piece} from "./PartialRangePiece";
import {PartialRangeSquare as Square} from "./PartialRangeSquare";

export const getPartialRangeBoardComponent = (parentDispatch, boardObj, location, src, theme, rangeType, screenCase) => {
    const squares = [];
    for (let rf of rankfiles) {
        if (rf === location) {
            squares.push(
                <Square
                    rf={rf}
                    key={uuidv4()}
                    theme={theme}
                    rangeType={rangeType}
                    isHighlight={boardObj[rf]}
                    isLightSqr={binaryBoard[rf]}
                    screenCase={screenCase}
                    onClick={() => parentDispatch({type: 'set-location', newLoc: rf})}
                >
                    <Piece
                        src={src}
                        key={uuidv4()}
                    />
                </Square>
            );
        } else {
            squares.push(
                <Square
                    rf={rf}
                    key={uuidv4()}
                    theme={theme}
                    rangeType={rangeType}
                    isHighlight={boardObj[rf]}
                    isLightSqr={binaryBoard[rf]}
                    onClick={() => parentDispatch({type: 'set-location', newLoc: rf})}
                >
                    {null}
                </Square>
            );
        }
    }
    return squares;
};