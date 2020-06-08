import React from "react";
import ReactDOM from "react-dom";

import {Promo} from "./Components/GameRoot/components/Promo";


export function tests(testNo) {
    switch(testNo) {
        case 1:
            // PromoChoices.js
            ReactDOM.render(<Promo />, document.getElementById('root'))
            break;
        default:
            break;
    }
    return
}