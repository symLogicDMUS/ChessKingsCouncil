import React from "react";
import {Option} from "./Option";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {fontSize} from "../fontSize.jss";
import {useStyles} from "./Options.jss";

export function Options({save, reset, toggleLoadModal, eraseRange, theme}) {
    const classes = useStyles({theme: theme, fontSize: fontSize})
    return (
        <div className={classes.options_tool}>
            <Box className={classes.box}>
                <Typography className={classes.title}>Options</Typography>
                <Option clickMethod={toggleLoadModal} iconType='load' theme={theme}/>
                <Option clickMethod={save} iconType='save' theme={theme}/>
                <Option clickMethod={reset} iconType='reset' theme={theme}/>
                <Option clickMethod={eraseRange} iconType='erase' theme={theme}/>
            </Box>
        </div>
    );
}
