import React from "react";
import {Avatar} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {themes} from "../../../styles/themes/themes.jss";

export const useStyles = makeStyles((theme) => ({
    offsetInt: (props) => ({
        margin: 'auto',
        // background: themes[props.theme].offset,
        // color: themes[props.theme].sqr_text,
        background: 'none',
        color: themes[props.theme].offset,
        "@media screen and (max-width: 360px)": {
            width: "calc(10vw * 0.5)",
            height: "calc(10vw * 0.5)",
        },
        "@media screen and (min-width: 360px) and (max-width: 960px)": {
            width: "calc(10.5vw * 0.5)",
            height: "calc(10.5vw * 0.5)",
        },
        "@media screen and (min-width: 960px)": {
            width: "calc(5.3125vw * 0.5)",
            height: "calc(5.3125vw * 0.5)",
        },
        maxWidth: "calc(11vh * 0.5)",
        maxHeight: "calc(11vh * 0.5)",
        minWidth: "unset",
        minHeight: "unset",
    }),
}), { index: 1 });

function OffsetInt({theme, children}) {
    const classes = useStyles({theme});

    return (
        <Avatar className={classes.offsetInt}>
            {children}
        </Avatar>
    )
}

export default OffsetInt;