import React, { memo } from "react";
import clsx from "clsx";
import { Avatar, Typography } from "@material-ui/core";
import { useStyles } from "./CreatePiecePiece.jss";

const CreatePiecePiece = memo(({ imgUrl, rf, theme, className }) => {
    const classes = useStyles({
        theme: theme,
    });

    return (
        <>
            {imgUrl ? (
                <img
                    src={imgUrl}
                    className={classes.img}
                    alt={"avatar of piece being created"}
                />
            ) : (
                <Avatar
                    variant="square"
                    className={clsx(classes.piece, {
                        [className]: className,
                    })}
                    src={imgUrl}
                >
                    <Typography className={classes.rf_text} variant="button">
                        {rf}
                    </Typography>
                </Avatar>
            )}
        </>
    );
});

export default CreatePiecePiece;
