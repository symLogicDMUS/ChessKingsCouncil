import React, { memo } from "react";
import {Avatar, Chip, ClickAwayListener} from "@material-ui/core";
import { useStyles } from "./NoProfile.jss";

export const NoProfile = memo(({ pieceName, imgUrl, closeProfile, theme }) => {
    const classes = useStyles({ theme: theme });
    return (
        <div className={classes.modal}>
            <ClickAwayListener
                onClickAway={closeProfile}
                mouseEvent="onMouseDown"
                touchEvent="onTouchStart"
            >
                <Chip
                    className={classes.window}
                    avatar={<Avatar src={imgUrl}  />}
                    label={`No profile for ${pieceName}`}
                    onClick={closeProfile}
                    onDelete={closeProfile}
                />
            </ClickAwayListener>
        </div>
    );
});
