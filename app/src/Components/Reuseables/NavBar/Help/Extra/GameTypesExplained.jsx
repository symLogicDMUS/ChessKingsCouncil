import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../HelpText.jss";

export function GameTypesExplained(props) {
    const classes = useStyles({theme: props.theme});
    return <Typography className={classes.text} paragraph={true}>
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