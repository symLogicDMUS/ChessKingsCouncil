import React from "react";
import {fontSize0040} from "../../styles/fontSizes.jss";
import { useStyles } from "./MiniPiece.jss";

export function MiniPiece({
    togglePiece,
    openProfile,
    pieceImgBase64Str,
    alt,
}) {
    const classes = useStyles({ fontSize: fontSize0040 });
    return (
        <>
            <img
                src={pieceImgBase64Str}
                className={classes.piece}
                onClick={() =>  {
                    openProfile();
                    togglePiece();
                }}
                alt={`${alt} (icon of a piece)`}
            />
        </>
    );
}
