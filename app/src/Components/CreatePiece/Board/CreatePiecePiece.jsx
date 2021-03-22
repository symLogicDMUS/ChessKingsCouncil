import React from "react";
import clsx from "clsx";
import { Avatar } from "@material-ui/core";
import { useStyles } from "./CreatePiecePiece.jss";
import { binaryBoard } from "../../helpers/binaryBoard";

export function CreatePiecePiece({ imgUrl, rf, theme }) {
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
                        [classes.light_sqr_text]: binaryBoard[rf],
                        [classes.dark_sqr_text]: !binaryBoard[rf],
                    })}
                >
                    {rf}
                </Avatar>
            )}
        </>
    );
}
