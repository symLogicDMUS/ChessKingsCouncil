import React from "react";
import { motion } from "framer-motion";
import { useStyles } from "./PromoChoice.jss";

export function PromoChoice({ selected, key, pieceImgBase64Str, alt }) {
    const classes = useStyles();
    const className = selected === key ? classes.selected : classes.normal;
    return (
        <motion.img
            src={pieceImgBase64Str}
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
            className={className}
            alt={`${alt} (icon of piece)`}
        />
    );
}
