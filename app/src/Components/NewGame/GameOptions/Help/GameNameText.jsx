import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../../../Reuseables/NavBar/Help/HelpText.jss";
import { SeeExampleButton } from "../../../Reuseables/NavBar/Help/SeeExampleButton";

export function GameNameText(props) {
    const classes = useStyles({ theme: props.theme });
    return (
        <>
            <Typography className={classes.text} paragraph>
                <div className={classes.emphasis}>Game Name:</div>
            </Typography>
            <Typography className={classes.text} paragraph>
                Type the name of the game. Note that the game is not saved until
                the
                <SeeExampleButton
                    lgSrc="/Images/Help/wide/save.png"
                    smSrc="/Images/Help/thin/save.png"
                    theme={props.theme}
                    isText={true}
                >
                    Save
                </SeeExampleButton>{" "}
                or
                <SeeExampleButton
                    lgSrc="/Images/Help/wide/save as.png"
                    smSrc="/Images/Help/thin/save as.png"
                    theme={props.theme}
                    isText={true}
                >
                    Save As
                </SeeExampleButton>{" "}
                button in used in the game. If you use the Save As button to
                give a different name given on the New Game page, the name given
                on the New Game page will be discarded.
            </Typography>
        </>
    );
}
