import {rankfiles} from "../../../helpers/rankfiles";
import {RangeDisplaySquare} from "../RangeDisplaySquare";
import {v4 as uuidv4} from "uuid";
import {binaryBoard} from "../../../helpers/binaryBoard";
import React from "react";

export function reducer(state, action) {
    switch (action.type) {
        case "update":
            const squares = []
            for (let rf of rankfiles) {
                squares.push(
                    <RangeDisplaySquare
                        key={uuidv4()}
                        theme={action.theme}
                        isInRange={action.rangeBoard[rf]}
                        isLightColorSqr={binaryBoard[rf]}
                    />
                )
            }
            return squares;
        default:
            throw new Error();
    }
}