import React from "react";
import clsx from "clsx";
import {IconButton, SvgIcon} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {themes} from "../../styles/themes.jss";
import {icons} from "../../styles/icons/top/icons.jss";
import {useStyles as useMoreStyles} from "../CreatePiece.jss";
import {useStyles} from "./Option.jss";

export function Option({onClick, iconType, theme,  className}) {
    const classes = useStyles({theme: theme})
    const classes2 = useMoreStyles({theme: theme})
    return (
        <Button className={clsx(classes2.button, {
            [classes2.icon_button]: true,
            [className]: className,
        })} >
            <IconButton className={classes.icon_button} classes={{label: classes.label}} onClick={onClick}>
                <SvgIcon className={classes.icon}>
                    {icons[iconType](themes[theme].button_text)}
                </SvgIcon>
                <div className={classes.text}>{iconType}</div>
            </IconButton>
        </Button>
    );
}
