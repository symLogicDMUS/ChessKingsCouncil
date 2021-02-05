import React from "react";
import Box from "@material-ui/core/Box";
import {TextField, Typography} from "@material-ui/core";
import {useStyles} from "./IncorrectNameEntryExamples.jss";

export function IncorrectNameEntryExamples({fontSize, theme}) {
    const classes = useStyles({fontSize: fontSize, theme: theme});
    return (
        <Box className={classes.incorrect_name_entry_examples}>
            <TextField
                error
                className={classes.incorrect_entry}
                label="Error"
                id="standard-name-error"
                variant='outlined'
                defaultValue="Queen"
                helperText={<Typography style={{fontSize: fontSize}}>Error: standard piece name</Typography>}
            />
            <TextField
                error
                className={classes.incorrect_entry}
                id="name-blank-error"
                variant='outlined'
                helperText={<Typography style={{fontSize: fontSize}}>Error: name field blank</Typography>}
            />
            <TextField
                error
                className={classes.incorrect_entry}
                label="Error"
                id="invalid-characters-error"
                variant='outlined'
                defaultValue=".#$[]"
                helperText={<Typography style={{fontSize: fontSize}}>Error: invalid characters</Typography>}
            />
        </Box>
    )
}