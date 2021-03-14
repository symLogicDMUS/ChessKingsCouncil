import Typography from "@material-ui/core/Typography";
import {help_text} from "../HelpText.jss";
import {fontSize0026} from "../../../../styles/fontSizes.jss";
import React from "react";

export function GameTypesExplained(props) {
    return <Typography key='game-types-paragraph' paragraph={true} style={help_text(fontSize0026, props.theme)}>
        <ol>
            <li><i>Standard</i>: Regular Chess. Chess is played by millions of people all over the world.</li>
            <li>
                <i>Custom</i>: Use pieces that you created in your game. You created a piece by deciding how it moves
                and
                what it looks like, now decide how it’s going to be included in your game. Select this option to go to
                that page and then its help button for more information
            </li>
            <li>
                <i>Council</i>:A modification of Chess where it is possible to have multiple Kings. See the Council
                Rules page for more information.
            </li>
        </ol>
    </Typography>;
}