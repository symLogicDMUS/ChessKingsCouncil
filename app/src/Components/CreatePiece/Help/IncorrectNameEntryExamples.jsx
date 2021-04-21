import React from "react";
import Box from "@material-ui/core/Box";
import {MuiTextField} from "../../Reuseables/UserInput/MuiTextField";
import {useStyles} from "./IncorrectNameEntryExamples.jss";
import {Typography} from "@material-ui/core";

export function IncorrectNameEntryExamples({theme}) {
    const classes = useStyles({theme: theme});
    return (
        <div>
            <Box className={classes.example}>
                <MuiTextField
                    className={classes.text_field}
                    variant="outlined"
                    defaultValue="Queen"
                    disabled={true}
                />
                <Typography variant='button' className={classes.warning}>no</Typography>
            </Box>
            <Box className={classes.example}>
                <MuiTextField
                    className={classes.text_field}
                    variant="outlined"
                    defaultValue="#$[]."
                    disabled={true}
                />
                <Typography variant='button' className={classes.warning}>not allowed</Typography>
            </Box>
            <Box className={classes.example}>
                <MuiTextField
                    className={classes.text_field}
                    variant="outlined"
                    defaultValue=""
                    disabled={true}
                />
                <Typography variant='button' className={classes.warning}>can't do it</Typography>
            </Box>
        </div>
    );
}