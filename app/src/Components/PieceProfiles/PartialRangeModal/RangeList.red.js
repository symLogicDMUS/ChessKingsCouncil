import {RangeListItem} from "../RangeListItem";
import {stepFuncNamesToText} from "../../helpers/spanToText";
import {offsetToText} from "../../helpers/offsetToText";
import React from "react";

export function reducer(state, action) {
    switch (action.type) {
        case "range-init":
            const spanPartials = [];
            for (const span of action.spans) {
                spanPartials.push(
                    <RangeListItem
                        theme={action.theme}
                        rangeText={stepFuncNamesToText[span]}
                        onClick={action.parentDispatch({
                            type: "span",
                            rangeType: "span",
                            span: span,
                            src: action.src,
                            theme: action.theme,
                            location: action.location,
                        })}
                    />
                );
            }
            const offsetPartials = [];
            action.offsets.forEach((offset) => {
                offsetPartials.push(
                    <RangeListItem
                        theme={action.theme}
                        rangeText={offsetToText(offset)}
                        onClick={action.parentDispatch({
                            type: "offset",
                            rangeType: "offset",
                            offset: offset,
                            location: action.location,
                            src: action.src,
                            theme: action.theme,
                        })}
                    />
                );
            });
            return {
                spanPartials: spanPartials,
                offsetPartials: offsetPartials,
            };
        default:
            throw new Error();
    }
}