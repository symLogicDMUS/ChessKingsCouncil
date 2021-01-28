import React from "react";
import Box from "@material-ui/core/Box";
import {TextField} from "@material-ui/core";
import { useStyles} from "./IncorrectNameEntryExamples.jss";

export function IncorrectNameEntryExamples({theme}) {
    const classes = useStyles({theme});
    return (
        <Box className={classes.incorrect_name_entry_examples}>
            <TextField
                error
                className={classes.incorrect_entry}
                label="Error"
                id="standard-name-error"
                variant='outlined'
                defaultValue="Queen"
                helperText="Error: standard piece name"
            />
            <TextField
                error
                className={classes.incorrect_entry}
                id="name-blank-error"
                variant='outlined'
                helperText="Error: name field blank"
            />
            <TextField
                error
                className={classes.incorrect_entry}
                label="Error"
                id="invalid-characters-error"
                variant='outlined'
                defaultValue=".#$[]"
                helperText="Error: invalid characters"
            />
        </Box>
    )
}