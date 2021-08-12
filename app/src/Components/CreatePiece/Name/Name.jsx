import React from "react";
import clsx from "clsx";
import { MuiTextField as TextField } from "../../Reuseables/UserInput/MuiTextField";
import { useStyles } from "./Name.jss";

function Name({ updateName, defaultValue, theme }) {
    const classes = useStyles({ theme: theme });

    const handleInput = (e) => {
        updateName(e.target.value);
    };

    return (
        <TextField
            theme={theme}
            id="game-name"
            size={"medium"}
            fullWidth={true}
            label="Piece Name"
            autoComplete="off"
            autoFocus={true}
            variant="outlined"
            onChange={handleInput}
            defaultValue={defaultValue}
            className={clsx(classes.name, {
                [classes.special_case_fill]: theme === "NBA",
            })}
        />
    );
}

export default Name;
