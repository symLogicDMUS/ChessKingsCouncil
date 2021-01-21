import React from "react";
import { motion } from "framer-motion";
import {fontSize01 as fontSize} from "../../styles/fontSize.jss";
import { useStyles } from "./PromoChoice.jss";

export function PromoChoice({ promoChoice, id, pieceImgBase64Str, alt, theme }) {
    const classes = useStyles({fontSize, theme});
    let className = classes.normal;
    if (promoChoice === id) {
        className = classes.selected;
    }
    return (
        <motion.img
            src={pieceImgBase64Str}
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
            alt={`${alt} (icon of piece)`}
            className={className}
        />
    );
}
