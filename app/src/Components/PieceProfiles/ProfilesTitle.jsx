import React from "react";
import Box from "@material-ui/core/Box";
import {Divider} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {fontSize} from "../styles/fontSize.jss";
import {useStyles} from "./ProfilesTitle.jss";

/**
 * For pages without Permanent Drawer
 * */
export function ProfilesTitle({theme, children}) {
    const classes = useStyles({theme: theme, fontSize: fontSize});
    return (
        <>
            <Box className={classes.title_bar}>
                <Typography className={classes.title} variant='h6'>{children}</Typography>
            </Box>
            <Divider className={classes.divider} />
        </>
    );
}