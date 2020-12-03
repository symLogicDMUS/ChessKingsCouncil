import React from "react";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./PickName.jss";

export function PickName({ setGameName, gameName, fontSize }) {
    const classes = useStyles({ fontSize: fontSize, text: "Game Name" });

    return (
        <>
            <Typography className={classes.title}>Game Name</Typography>
            <TextField
                value={gameName}
                className={classes.text_field}
                onChange={setGameName}
                id="game-name"
                label="Pick Name"
                variant="outlined"
            />
        </>
    );
}
