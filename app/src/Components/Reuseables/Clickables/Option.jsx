import React from "react";
import clsx from "clsx";
import { themes } from "../../styles/themes/themes.jss";
import { icons } from "../../styles/icons/top/icons.jss";
import { IconButton, SvgIcon } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./Option.jss";

function Option(props) {
    const {
        onClick,
        iconType,
        name,
        theme,
        className,
        isGameOption,
        ...other
    } = props;

    const classes = useStyles({ theme: theme });

    return (
        <IconButton
            className={clsx(null, {
                [classes.game_option]: isGameOption,
                [classes.create_piece_option]: !isGameOption,
                [className]: className,
            })}
            classes={{ label: classes.label }}
            onClick={onClick}
            {...other}
        >
            <SvgIcon className={classes.icon}>
                {icons[iconType](themes[theme].button_text)}
            </SvgIcon>
            <Typography className={classes.text} noWrap>
                {name}
            </Typography>
        </IconButton>
    );
}

export default Option;
