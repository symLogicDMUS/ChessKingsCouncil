import React, { useState, useEffect } from "react";
import { fontSizes } from "../../styles/fontSizes";
import {styleObjects} from "./CustomizeStyle";
import "./PromoAll.scss";

export function PromoAll({ screenCase, toglePromoAll }) {
    let [checkmark, setCheckmark] = useState(false);

    const getCheckmark = () => {
        if (checkmark) {
            return (
                <img
                    src="/Images/checkmark/silver-checkmark.svg"
                    className="customize-checked"
                    alt="checkmark shows all indicates all pieces promoted."
                />
            );
        } else {
            return null;
        }
    };
    const toglePromos = () => {
        if (checkmark) {
            setCheckmark(!checkmark)
            toglePromoAll(false)
        }
        else {
            setCheckmark(!checkmark)
            toglePromoAll(true)
        }
    }
    return (
        <>
            <div className="customize-promo-all-label" style={styleObjects[screenCase]['PromoAllLabel']()}>
                Promo All
            </div>
            <div
                className="customize-promo-all-checkbox"
                style={styleObjects[screenCase]['PromoAllCheckbox']()}
                onClick={() => {toglePromos()}}
            >
                {getCheckmark()}
            </div>
        </>
    );
}
