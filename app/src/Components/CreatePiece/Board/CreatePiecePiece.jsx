import React, {memo} from "react";
import clsx from "clsx";
import {Avatar, Typography} from "@material-ui/core";
import { binaryBoard } from "../../helpers/binaryBoard";
import { useStyles } from "./CreatePiecePiece.jss";

export const CreatePiecePiece = memo(({ imgUrl, rf, theme, pieceLocHighlight }) => {
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
                        [classes.piece_loc_highlight]: pieceLocHighlight,
                    })}
                >
                    <Typography className={classes.rf_text} variant='button'>{rf}</Typography>
                </Avatar>
            )}
        </>
    );
});
