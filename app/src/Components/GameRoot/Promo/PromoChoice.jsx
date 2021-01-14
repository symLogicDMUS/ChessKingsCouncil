import React from "react";
import { motion } from "framer-motion";
import {fontSizeAlt7 as fontSize} from "../../styles/fontSize.jss";
import { useStyles } from "./PromoChoice.jss";

export function PromoChoice({ selected, id, pieceImgBase64Str, alt, theme }) {
    const classes = useStyles({fontSize, theme});
    const className = (selected === id) ? classes.selected : classes.normal;
    return (
        <motion.img
            src={pieceImgBase64Str}
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
            className={className}
            alt={`${alt} (icon of piece)`}
        />
    );
}
