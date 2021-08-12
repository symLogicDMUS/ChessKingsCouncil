import React, { memo } from "react";
import { useStyles } from "./Piece.jss";

export const Piece = memo(({ src, sqrSize }) => {
    const classes = useStyles({ sqrSize });
    return (
        <img
            src={src}
            alt="icon of a piece"
            className={classes.piece}
            onContextMenu={(e) => e.preventDefault()}
        />
    );
});
