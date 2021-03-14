import Typography from "@material-ui/core/Typography";
import {help_text} from "../HelpText.jss";
import {fontSize0026} from "../../../../styles/fontSizes.jss";
import React from "react";

export function PlayerTypesExplained(props) {
    return <Typography paragraph={true} style={help_text(fontSize0026, props.theme)}>
        <p>
            You can play as black or white as usual, but there is also the 'Test' option, to test the game or pieces
            that you created to see if you like it, demonstrate a sequence of moves to someone, or in the developer's
            case check that a new feature works after it is updated/added.
        </p>
    </Typography>;
}