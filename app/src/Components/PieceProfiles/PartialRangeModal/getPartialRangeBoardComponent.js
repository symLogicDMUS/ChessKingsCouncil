import React from "react";
import {v4 as uuidv4} from "uuid";
import {rankfiles} from "../../helpers/rankfiles";
import {binaryBoard} from "../../helpers/binaryBoard";
import {PartialRangePiece as Piece} from "./PartialRangePiece";
import {PartialRangeSquare as Square} from "./PartialRangeSquare";

export const getPartialRangeBoardComponent = (boardObj, location, src, theme, rangeType) => {
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
                >
                    {null}
                </Square>
            );
        }
    }
    return squares;
};