import React from "react";
import { MuiTextField as TextField } from
        "../../Reuseables/UserInput/MuiTextField";
import { useStyles } from "./Name.jss";

function Name({
    updateName,
    defaultValue,
    theme,
}) {
    const classes = useStyles({ theme: theme });

    const handleInput = (e) => {
        updateName(e.target.value);
    };

    return (
        <TextField
            theme={theme}
            fullWidth={true}
            label="Piece Name"
            autoComplete="off"
            autoFocus={true}
            variant="outlined"
            onChange={handleInput}
            defaultValue={defaultValue}
            className={classes.name}
            size={"medium"}
            id="game-name"
        />
    );
}

export default Name;