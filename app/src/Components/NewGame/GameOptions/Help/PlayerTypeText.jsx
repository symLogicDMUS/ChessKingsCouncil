import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../../../Reuseables/NavBar/Help/HelpText.jss";

export function PlayerTypeText(props) {
    const classes = useStyles({theme: props.theme});
    return <Typography className={classes.text} paragraph={true}>
        <p>Play As:</p>
        <p>
            You can play as black or white as usual, but there is also the 'Test' option, to test the game or pieces
            that you created to see if you like it, demonstrate a sequence of moves to someone, or in the developer's
            case check that a new feature works after it is updated/added.
        </p>
    </Typography>;
}