import React from "react";
import { Avatar } from "@material-ui/core";
import { useStyles } from "./Piece.jss";

/**
 * @param src: a base 64 binary string
 * @param board
 */
export const Piece = ({ src, sqrSize }) => {
    const classes = useStyles({sqrSize});
    return (
        <Avatar className={classes.piece} variant='square' src={src} />
    );
};
