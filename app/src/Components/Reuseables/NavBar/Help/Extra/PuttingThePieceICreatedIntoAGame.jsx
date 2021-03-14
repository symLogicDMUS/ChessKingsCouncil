import React from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {HelpSlideshow} from "../HelpSlideshow";
import {useStyles} from "./GifDiagrams.jss";

export function PuttingThePieceICreatedIntoAGame(props) {
    const classes = useStyles({theme: props.theme});

    return <HelpSlideshow
        onClose={props.onClose}
        initialState={{pos: 0, numSlides: 3}}
        title={props.title}
        theme={props.theme}
    >
        <Box className={classes.flex_row}>
            <img
                className={classes.gif}
                src={"/Images/gif/putting created piece into a game.gif"}
                alt="Putting piece you created into a game"
            />
            <Box className={classes.steps1}>
                <ol className={classes.ordered_list}>
                    <li>Go to the New Game Page.</li>
                    <li>In the Game Name text field, type any name.</li>
                    <li>Under Pick Type, choose Custom option.</li>
                    <li>Under the Play As dropdown, choose White or Black.</li>
                    <li>Click the Play Button.</li>
                </ol>
                <Typography className={classes.text}>
                    Click the next button below for rest of steps.
                </Typography>
            </Box>
        </Box>
        <Box className={classes.flex_row}>
            <img
                className={classes.gif}
                src={"/Images/gif/subbing piece.gif"}
                alt="Selecting my Piece as a Sub"
            />
            <Box className={classes.steps2}>
                <ol className={classes.ordered_list}>
                    <li>Scroll down to find your piece if necessary.</li>
                    <li>Select one of the 4 icons for Queen, Rook, Knight, or Bishop. In the example above, Knight is selected.</li>
                    <li>click the OK button.</li>
                </ol>
                <Typography className={classes.text}>
                    Click the next button to below to see the result.
                </Typography>
            </Box>
        </Box>
        <Box className={classes.flex_row}>
            <img
                className={classes.gif}
                src={"/Images/Help Diagrams/game with sub.png"}
                alt="image of game with sub for knight"
            />
            <Box className={classes.steps2}>
                <Typography className={classes.text} style={{transform: 'translate(0, -1em)'}}>
                    The game starts with your piece in place of the piece you subbed for. In the example above, the Knight was subbed for.
                </Typography>
            </Box>
        </Box>
    </HelpSlideshow>;
}