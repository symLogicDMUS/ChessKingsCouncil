import React from "react";
import "../scss/Promo.scss";
import {useStyles} from "./PromoChoice.jss";

export function PromoChoice({selected, key, pieceImgBase64Str, alt}) {
    const classes = useStyles()
    const className = (selected === key) ? classes.selected : classes.normal;
    return <img src={pieceImgBase64Str} className={className} alt={`${alt} (icon of piece)`} />;
}