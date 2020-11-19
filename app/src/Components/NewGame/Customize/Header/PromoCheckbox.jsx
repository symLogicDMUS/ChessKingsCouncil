import React from "react";
import {CheckBox} from '../../../Reuseables/CheckBox';
import { styleObjects  } from "../CustomizeStyle";
import "./PromoCheckbox.scss";

export function PromoCheckbox({ screenCase, theme, pieceName, promos, toglePromo }) {
    let isCheckmark = false;
    if (promos.includes(pieceName)) {
        isCheckmark = true;
    } 
    return (
        <div className="promo-form-control-label">
            <CheckBox
                theme={theme}
                screenCase={screenCase}
                clickMethod={toglePromo}
                clickValue={pieceName}
                styleObjects={styleObjects}
                labelText="Promotion"
                labelStyleMethod="PromoLabel"
                boxStyleMethod="PromoCheckbox"
                fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                checkmarkState={isCheckmark}
            />
        </div>
    );
}
