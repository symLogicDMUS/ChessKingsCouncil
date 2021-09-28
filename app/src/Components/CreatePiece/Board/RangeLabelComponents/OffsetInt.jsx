import React from "react";
import {Avatar} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
    offsetInt: {
        margin: 'auto',
        background: 'none',
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
    }
}), { index: 1 });

function OffsetInt({children}) {
    const classes = useStyles();

    return (
        <Avatar className={classes.offsetInt} variant={"square"}>
            {children}
        </Avatar>
    )
}

export default OffsetInt;