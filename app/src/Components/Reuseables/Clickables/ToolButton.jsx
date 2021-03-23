import React from "react";
import clsx from "clsx";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
import {icons} from "../../styles/icons/top/icons.jss";
import {useStyles} from "./ToolButton.jss";

export function ToolButton({onClick, isActive, theme, iconName}) {
    const classes = useStyles({theme});

    return (
        <>
            <IconButton
                className={classes.button}
                classes={{label: classes.label}}
                onClick={onClick}
            >
                <SvgIcon className={clsx(classes.icon, {
                    [classes.active_tool]: isActive,
                })}>
                    {icons[iconName]}
                </SvgIcon>
            </IconButton>
        </>
    );
}