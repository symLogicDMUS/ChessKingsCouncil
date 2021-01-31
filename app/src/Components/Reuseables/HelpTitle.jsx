import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./HelpTitle.jss";


export const HelpTitle = ({theme, children}) => {
    const classes = useStyles({theme});
    return (
        <Typography variant="h1" className={classes.help_title}>
            {children}
        </Typography>
    )
};