import React from "react";
import Box from "@material-ui/core/Box";
import BlockIcon from "@material-ui/icons/Block";
import {MuiTextField} from "../../Reuseables/UserInput/MuiTextField";
import {useStyles} from "./IncorrectNameEntryExamples.jss";

export function IncorrectNameEntryExamples({fontSize, theme}) {
    const classes = useStyles({fontSize: fontSize, theme: theme});
    return (
        <div>
            <Box className={classes.incorrect_name_entry_examples}>
                <MuiTextField variant='outlined' defaultValue='Queen' disabled={true} />
                <MuiTextField variant='outlined' defaultValue='' disabled={true} />
                <MuiTextField variant='outlined' defaultValue='#$[].' disabled={true} />
            </Box>
            <Box className={classes.block_icons}>
                <BlockIcon className={classes.block_icon} />
                <BlockIcon className={classes.block_icon} />
                <BlockIcon className={classes.block_icon} />
            </Box>
        </div>
    )
}