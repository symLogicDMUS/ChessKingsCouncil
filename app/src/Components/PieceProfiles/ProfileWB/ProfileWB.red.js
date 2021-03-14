import React from "react";
import {ListItem} from "../../Reuseables/ScrollTable/ListItem";
import {stepFuncNamesToText} from "../../helpers/spanToText";
import {offsetToText} from "../../helpers/offsetToText";

export function reducer(state, action) {
    switch (action.type) {
        case 'open-spans':
            return {isModal: true, rangeType: 'span'}
        case 'open-offsets':
            return {isModal: true, rangeType: 'offset'}
        case "close":
            return {isModal: false, rangeType: null};
        default:
            throw new Error();
    }
}