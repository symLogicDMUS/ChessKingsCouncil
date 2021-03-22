import React, {useState} from "react";
import {motion} from "framer-motion";
import Box from "@material-ui/core/Box";
import {Portal} from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
import {icons} from "../../styles/icons/top/icons.jss";
import {fontSize002} from "../../styles/fontSizes.jss";
import {close_icon} from "../Modals/StandardModal.jss";
import {Close} from "../Modals/Close";
import {useStyles} from "./ToolButton.jss";
import clsx from "clsx";

export function ToolButton({onClick, isActive, theme, iconName, children}) {
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