import {ListItem} from "../../Reuseables/ScrollTable/ListItem";
import {stepFuncNamesToText} from "../../helpers/spanToText";
import {offsetToText} from "../../helpers/offsetToText";
import React from "react";

export function reducer(state, action) {
    switch (action.type) {
        case "range-init":
            const spanPartials = [];
            action.spans.forEach((span, index) => {
                spanPartials.push(
                    <ListItem
                        key={index}
                        theme={action.theme}
                        // text={stepFuncNamesToText[span]}
                        onClick={action.parentDispatch({
                            type: "span",
                            rangeType: "span",
                            span: span,
                            src: action.src,
                            theme: action.theme,
                            location: action.location,
                        })}
                    >
                        {stepFuncNamesToText[span]}
                    </ListItem>
                );
            })
            const offsetPartials = [];
            action.offsets.forEach((offset, index) => {
                offsetPartials.push(
                    <ListItem
                        key={index}
                        theme={action.theme}
                        // text={offsetToText(offset)}
                        onClick={action.parentDispatch({
                            type: "offset",
                            rangeType: "offset",
                            offset: offset,
                            location: action.location,
                            src: action.src,
                            theme: action.theme,
                        })}
                    >
                        {offsetToText(offset)}
                    </ListItem>
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