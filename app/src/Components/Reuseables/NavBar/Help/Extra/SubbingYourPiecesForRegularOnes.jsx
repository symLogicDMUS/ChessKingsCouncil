import React from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {SubExample} from "../../../../NewGame/Customize/Help/SubExample";
import BlockIcon from "@material-ui/icons/Block";
import { useStyles } from "./GifDiagrams.jss";

export function SubbingYourPiecesForRegularOnes({theme}) {
    const classes = useStyles({theme: theme});

    return (
        <Box className={classes.flex_row}>
            <img src={"/Images/gif/choosing a sub.gif"} alt='gif of making sub selections' className={classes.gif} />
            <Typography className={classes.steps2}>
                For each piece you would like to start the game, select the icon of the piece you want it to start in place
                of then click the OK button. The <BlockIcon className={classes.icon} /> means the piece is not subbed for
                anything, and is default.<SubExample theme={theme} />
            </Typography>
        </Box>
    );
}