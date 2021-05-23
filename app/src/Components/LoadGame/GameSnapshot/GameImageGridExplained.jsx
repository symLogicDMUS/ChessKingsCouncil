import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../../Reuseables/NavBar/Help/HelpText.jss";
import {SeeExampleButton} from "../../Reuseables/NavBar/Help/SeeExampleButton";

export function GameImageGridExplained(props) {
    const classes = useStyles({theme: props.theme});
    return <Typography
        className={classes.text}
        paragraph
    >
        Each game has an image of the current position of the board and the name of the game under the image. You
        can turn the names on and off with the
        <SeeExampleButton
            theme={props.theme}
            lgSrc={'/Images/help/wide/show names.png'}
            smSrc={'/Images/help/thin/show names.png'}
            isText={true}
        >
            Show Names
        </SeeExampleButton>checkbox Currently, all game Categories (Standard, Custom,
        and Council) are together in 1 group.
    </Typography>;
}