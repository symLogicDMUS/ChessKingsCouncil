import React from "react";
import { Typography } from "@material-ui/core";
import { MuiTextField } from "../../Reuseables/MuiTextField";
import { useStyles, text_field } from "./PickName.jss";

export function PickName({ setGameName, gameName, fontSize, theme }) {
    const classes = useStyles({ fontSize: fontSize, text: "Game Name" });

    return (
        <>
            <Typography className={classes.title}>Game Name</Typography>
            <MuiTextField
                value={gameName}
                onChange={setGameName}
                style={text_field}
                theme={theme}
                id={"pick-game-name"}
                label={"Pick game name"}
                variant={"outlined"}
            />
        </>
    );
}
