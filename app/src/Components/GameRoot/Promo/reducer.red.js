import {PromoChoice} from "./PromoChoice";
import React from "react";

export function reducer(state, action) {
    switch (action.type) {
        case "new-list":
            let pieceName = null;
            let pieceImgBase64Str = null;
            let promoChoices = [];
            for (const id of Object.keys(action.idDict)) {
                pieceName = action.idDict[id];
                if (action.promoChoices.includes(pieceName)) {
                    pieceImgBase64Str = action.pieceDefs[pieceName][action.color]["img"];
                    promoChoices.push(
                        <PromoChoice
                            id={id}
                            key={id}
                            pieceImgBase64Str={pieceImgBase64Str}
                            promoChoice={state.promoChoice}
                            alt={pieceName}
                        />
                    );
                }
            }
            return {promoChoice: state.promoChoice, promoChoices: promoChoices};
        case "select":
            return {
                promoChoice: action.key,
                promoChoices: state.promoChoices,
            };
        default:
            throw new Error();
    }
}