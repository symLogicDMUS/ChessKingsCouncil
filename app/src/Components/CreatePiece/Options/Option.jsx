import React from "react";
import clsx from "clsx";
import {themes} from "../../styles/themes/themes.jss";
import {icons} from "../../styles/icons/top/icons.jss";
import {IconButton, SvgIcon, Typography} from "@material-ui/core";
import {useStyles as useMoreStyles} from "../CreatePiece.jss";
import {useStyles} from "./Option.jss";

function Option({onClick, iconType, name, theme, className}) {
    const classes = useStyles({theme: theme})
    const classes2 = useMoreStyles({theme: theme})
    return (
        <IconButton
            className={clsx(classes2.button, {
                [classes2.icon_button]: true,
                [className]: className,
            })}
            classes={{label: classes.label}}
            onClick={onClick}
        >
            <SvgIcon className={classes.icon}>
                {icons[iconType](themes[theme].button_text)}
            </SvgIcon>
            <Typography className={classes.text}>{name}</Typography>
        </IconButton>
    );
}

export default Option;