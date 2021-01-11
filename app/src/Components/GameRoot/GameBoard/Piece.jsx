import React, { useState } from "react";
import { useStyles } from "./Piece.jss";

/**
 * @param src: a base 64 binary string
 */
export const Piece = ({ src }) => {
    const classes = useStyles();
    return (
        <img
            src={src}
            className={classes.piece}
        />
    );
};
