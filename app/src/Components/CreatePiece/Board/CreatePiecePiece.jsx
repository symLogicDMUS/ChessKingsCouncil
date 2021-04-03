import React from "react";
import clsx from "clsx";
import { Avatar } from "@material-ui/core";
import { binaryBoard } from "../../helpers/binaryBoard";
import { useStyles } from "./CreatePiecePiece.jss";

export function CreatePiecePiece({ imgUrl, rf, theme, pieceLocHighlight }) {
    const classes = useStyles({
        theme: theme,
    });

    return (
        <>
            {imgUrl ? (
                <img src={imgUrl} className={classes.img} />
            ) : (
                <Avatar
                    variant="square"
                    className={clsx(classes.piece, {
                        [classes.light_sqr_text]: binaryBoard[rf] && ! pieceLocHighlight,
                        [classes.dark_sqr_text]: ! binaryBoard[rf] && ! pieceLocHighlight,
                        [classes.piece_loc_highlight]: pieceLocHighlight,
                    })}
                >
                    {rf}
                </Avatar>
            )}
        </>
    );
}
