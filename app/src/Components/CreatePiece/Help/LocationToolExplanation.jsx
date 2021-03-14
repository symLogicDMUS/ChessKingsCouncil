import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {fourLocationsBoard} from "./fourLocationBoard";
import {help_text} from "../../Reuseables/NavBar/Help/HelpText.jss";
import {availHeight} from "../../helpers/windowMeasurments";
import {LocationToolExample} from "./LocationToolExample";
import {themes} from "../../styles/themes.jss";
import {example_box} from "./HelpText.jss";
import {useStyles} from "./LocationToolExplaination.jss";

export function LocationToolExplanation(props) {
    const classes = useStyles({theme: props.theme, fontSize: props.fontSize});

    return <div>
        <Typography variant='h6' className={classes.sub_title}>
            Location of Piece when Creating it
        </Typography>
        <Typography paragraph style={help_text(props.fontSize, props.theme)}>
            <p>
                You can position the piece in one of 4 locations in the center
                of the board: D4, D5, E4, or E5.
            </p>
        </Typography>
        <Box className={classes.flexbox}>
            {fourLocationsBoard(
                availHeight() * 0.25,
                availHeight() * 0.25,
                themes[props.theme].light_normal,
                themes[props.theme].dark_normal
            )}
        </Box>
        <Typography paragraph style={help_text(props.fontSize, props.theme)}>
            <p>
                You can use the location buttons to switch to any of the 4 locations at any time. You will be able to
                see how the piece can move from that location and add to its range from that location. The button
                matching
                the square the piece is at, is highlighted.
            </p>
        </Typography>
        <LocationToolExample theme={props.theme}/>
        <Typography paragraph style={help_text(props.fontSize, props.theme)}>
            <p>
                These are the 4 squares that allow for the most symmetric
                customization. For example, if you have an offset of 2 squares
                up and 1 square to the right, you could also add the mirror of
                this: 2 squares down and 1 square to the left. The 4 squares in
                the center of the board are the 4 that you can add mirrors of
                offsets and spans the most often.{" "}
            </p>
            <p>
                Piece location is also restricted to these 4 squares when
                creating a piece to prevent situations in which the game would
                be over by default. An example of this would be positioning the
                piece at d1, adding an offset of 8 squares up and 1 square to
                the right, and then substituting your piece for the Queen in
                your game. Since the black version of the piece is the mirror
                image of the white version, the white and black King would also
                be trapped, creating a situation where both Kings are checkmated
                at the same time. This is an impossible situation in regular
                Chess and has no definition. You could extend the definition of
                stalemate to include this, but regardless the game would be over
                before the first move.
            </p>
        </Typography>
    </div>;
}