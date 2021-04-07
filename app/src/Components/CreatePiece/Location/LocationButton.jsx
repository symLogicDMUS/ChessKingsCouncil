import React, {memo} from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {useStyles as useMoreStyles} from "../CreatePiece.jss";
import { useStyles } from "./LocationButton.jss";

export const LocationButton = memo(({rf, onClick, selected, theme, toggleMiniVariantTool}) => {
    const classes = useStyles({theme: theme, rf: rf})
    const classes2 = useMoreStyles({theme: theme});
    return (
        <>
            <MediaQuery maxWidth={960}>
                <IconButton onClick={onClick} className={classes.sqr_button}>
                    <Typography className={classes.text} variant='button'>{rf}</Typography>
                </IconButton>
            </MediaQuery>
            <MediaQuery minWidth={960}>
                <Button
                    onClick={onClick}
                    className={
                        clsx(classes2.button, {
                            [classes.button_selected]: selected,
                            [classes.button_normal]: ! selected,
                            [classes2.icon_button]: true,
                        })} variant={'outlined'}>
                    {rf}
                </Button>
            </MediaQuery>
        </>
    );
});