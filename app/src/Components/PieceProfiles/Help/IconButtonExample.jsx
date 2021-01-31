import {useStyles} from "./ProfileHelpText.jss";
import {IconButton} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import React from "react";

export const IconButtonExample = ({theme}) => {
    const classes = useStyles({theme: theme});
    return (
        <IconButton className={classes.icon_button}>
            <Add className={classes.add_icon}/>
        </IconButton>
    )
}