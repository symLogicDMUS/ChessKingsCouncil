import React from "react";
import { Avatar } from "@material-ui/core";
import { fontSize00301 as fontSize } from "../../styles/fontSize.jss";
import { useStyles } from "./CreatePiecePiece.jss";

export function CreatePiecePiece({ pieceImgBase64Str, rf, theme, isLightSqr }) {
    const classes = useStyles({
        fontSize: fontSize,
        theme: theme,
        isLightSqr: isLightSqr,
    });

    return (
        <>
            {pieceImgBase64Str ? (
                <img src={pieceImgBase64Str} className={classes.img} />
            ) : (
                <Avatar
                    variant="square"
                    className={classes.piece}
                >
                    {rf}
                </Avatar>
            )}
        </>
    );
}
