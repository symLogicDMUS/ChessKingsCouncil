import { useStyles } from "../../Reuseables/NavBar/Help/HelpText.jss";
import { Typography } from "@material-ui/core";
import React from "react";
import { SeeExampleButton } from "../../Reuseables/NavBar/Help/SeeExampleButton";
import { MoreVert } from "@material-ui/icons";

export function RangeAnalysisExample(props) {
    const classes = useStyles({ theme: props.theme });
    return (
        <>
            <Typography className={classes.text}>
                The Range Analysis board is a a board that lets you see where
                any piece can move including the opponent (pretending it was
                there turn). It also opens the profile of a piece when you click
                on it. If you don't want to open the profile on click, you can
                disable this in the settings when playing a game.
            </Typography>
            <Typography className={classes.text}>
                On larger screens, the Range Analysis Board{" "}
                <SeeExampleButton
                    isText={true}
                    theme={props.theme}
                    lgSrc={"Images/Help/wide/range analysis.png"}
                    smSrc={"Images/Help/wide/range analysis.png"}
                >
                    is on the right hand side with other content
                </SeeExampleButton>
                , and on smaller screens it replaces the game board when you
                flip the
                <SeeExampleButton
                    isText={true}
                    theme={props.theme}
                    lgSrc={"Images/Help/thin/range analysis.png"}
                    smSrc={"Images/Help/thin/range analysis.png"}
                >
                    Range Analysis Switch
                </SeeExampleButton>
                . The small screen Analysis Board has an outer glow to remind
                you that it's not the game board.
            </Typography>
        </>
    );
}
