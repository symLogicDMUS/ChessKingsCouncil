import React from "react";
import { useStyles } from "./Piece.jss";

/**
 * @param src: a base 64 binary string
 * @param board
 */
export const Piece = ({ src, sqrSize }) => {
    const classes = useStyles({sqrSize});
    console.log('piece source:', src)
    return (
        <img className={classes.piece} src={src} alt='icon of a piece' onContextMenu={(e)=> e.preventDefault()} />
    );
};