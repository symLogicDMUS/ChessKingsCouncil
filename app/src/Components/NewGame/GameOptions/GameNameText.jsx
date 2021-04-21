import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../../Reuseables/NavBar/Help/HelpText.jss";

export function GameNameText(props) {
    const classes = useStyles({theme: props.theme});

    return <Typography className={classes.text} paragraph={true}>
        <p>Game Name:</p>
        <p>
            Type the name of the game. Note that the game is not saved until the Save or Save As button in used in the
            game. If
            you use the Save As button to give a different name than here, the name given here will be discarded.
        </p>
    </Typography>;
}