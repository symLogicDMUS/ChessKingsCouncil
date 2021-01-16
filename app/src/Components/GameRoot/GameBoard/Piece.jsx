import React, { useState } from "react";
import { useStyles } from "./Piece.jss";

/**
 * @param src: a base 64 binary string
 * @param board
 */
export const Piece = ({ src, sqrSize }) => {
    const classes = useStyles({sqrSize});
    return (
        <img
            src={src}
            className={classes.piece}
        />
    );
};
