import React, { useState } from "react";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import {ClickAwayListener, Tooltip} from "@material-ui/core";
import { useStyles } from "./HelpTitle.jss";

export const HelpTitle = ({ theme, className, children }) => {
    const classes = useStyles({ theme: theme });
    const [open, setOpen] = useState(false);

    return (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Tooltip
                arrow
                open={open}
                title={children}
                placement="bottom"
                TransitionComponent={"Zoom"}
                onClick={() => setOpen(! open)}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                <Typography
                    noWrap
                    variant="h6"
                    className={clsx(classes.help_title, {
                        [className]: className,
                    })}
                >
                    {children}
                </Typography>
            </Tooltip>
        </ClickAwayListener>
    );
};
