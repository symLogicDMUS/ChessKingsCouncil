import React from "react";
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { useStyles } from "./GifDiagrams.jss";
import {HelpSlideshow} from "../HelpSlideshow";

export function MakingYourPieceAnOptionForPawnsToPromoteTo(props) {
    const classes = useStyles({theme: props.theme});
    return (
        <HelpSlideshow theme={props.theme} onClose={props.onClose} initialState={{ pos: 0, numSlides: 2 }} >
            <Box className={classes.flex_row}>
                <img src={"/Images/gif/choosing promotions.gif"} className={classes.gif} alt="Gif diagram of selecting pawn promotions" />
                <Typography className={classes.steps2}>
                    Click the checkbox for every piece you would like a pawn to turn into, then click the OK button.
                </Typography>
            </Box>
            <Box className={classes.flex_row}>
                <img src={"/Images/gif/pawn getting promoted.gif"} className={classes.gif} alt="Gif of a Pawn being promoted" />
                <Typography className={classes.steps2}>
                    Your pieces will appear in a list of options when your pawn reaches the back row.
                </Typography>
            </Box>
        </HelpSlideshow>
    );
}