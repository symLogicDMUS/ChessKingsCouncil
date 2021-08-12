import { useStyles } from "../../Reuseables/NavBar/Help/HelpText.jss";
import { Typography } from "@material-ui/core";
import React from "react";

export function SavingAGame(props) {
    const classes = useStyles({ theme: props.theme });
    return (
        <div>
            <Typography className={classes.text} paragraph>
                Games are not saved automatically. Any moves including resigning
                the game won't take effect until the Saved or Save-As button is
                used.
            </Typography>
            <Typography className={classes.text}>
                If you save the game with a different name then you saved with
                previously, than you created a new copy of the game with the new
                name. If the first time you save a game you use a different name
                than what you gave on the New Game page, then no copy exists
                with that name.
            </Typography>
        </div>
    );
}
