import React from "react";
import clsx from "clsx";
import {DragIndicator} from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "./TopArea.jss";

function TopArea({close, theme}) {
    const classes = useStyles({theme});
    return (
        <span className={classes.top_area}>
            <DragIndicator
                className={clsx(classes.icon, {
                    [classes.drag_icon]: true,
                })}
            />
            <CloseIcon
                onClick={close}
                className={clsx(classes.icon, {
                    [classes.close_icon]: true,
                })}
            />
        </span>
    )
}

export default TopArea;