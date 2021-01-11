import {rankfiles} from "../../../helpers/rankfiles";
import {OnHoverSquare} from "../OnHoverSquare";
import React from "react";

export function reducer(state, action) {
    switch (action.type) {
        case "turn-on":
            return rankfiles.map((rf) => (<OnHoverSquare key={rf} isActive={true} theme={action.theme} />))
        case "turn-off":
            return rankfiles.map((rf) => (<OnHoverSquare key={rf} isActive={false} theme={action.theme} />))
        default:
            throw new Error();
    }
}