import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./HelpTitle.jss";


export const HelpTitle = ({theme, fontSize, children}) => {
    const classes = useStyles({theme: theme, fontSize: fontSize});
    return (
        <Typography variant="h6" className={classes.help_title}>
            {children}
        </Typography>
    )
};