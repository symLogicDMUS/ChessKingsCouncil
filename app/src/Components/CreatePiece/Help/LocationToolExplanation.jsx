import React from "react";
import Typography from "@material-ui/core/Typography";
import { fourLocationsBoard } from "./fourLocationBoard";
import { useStyles as useMoreStyles } from "../../Reuseables/NavBar/Help/HelpText.jss";
import { useStyles } from "./LocationToolExplaination.jss";
import { SeeExampleButton } from "../../Reuseables/NavBar/Help/SeeExampleButton";

export function LocationToolExplanation(props) {
    const classes = useStyles({ theme: props.theme });
    const classes2 = useMoreStyles({ theme: props.theme });

    return (
        <div>
            <Typography className={classes2.text} paragraph>
                When creating a piece, you can position the piece in one of 4
                locations in the center of the board: D4, D5, E4, or E5.
            </Typography>
            <Typography className={classes2.text} paragraph>
                {fourLocationsBoard(classes.locations_board, props.theme)}
                On larger screens, you can use the{" "}
                <SeeExampleButton
                    isText={true}
                    theme={props.theme}
                    lgSrc={"/Images/gif/wide/location buttons.png"}
                    smSrc={"/Images/gif/wide/location buttons.png"}
                >
                    location buttons
                </SeeExampleButton>{" "}
                to switch to any of the 4 locations at any time. On smaller
                screens, the location buttons will appear on the squares
                themselves by clicking the{" "}
                <SeeExampleButton
                    isText={true}
                    theme={props.theme}
                    lgSrc={"/Images/gif/thin/location icon.png"}
                    smSrc={"/Images/gif/thin/location icon.png"}
                >
                    location button in the right hand side icon column.
                </SeeExampleButton>{" "}
                Click the square to move the piece to that location. When a
                piece changes locations the offsets and spans you added change
                with it, so you are now seeing how the piece will be able to
                move at that location. These are the 4 squares that allow for
                the most symmetric customization. For example, if you have an
                offset of 2 squares up and 1 square to the right, you could also
                add the mirror of this: 2 squares down and 1 square to the left.
                The 4 squares in the center of the board are the 4 that you can
                add mirrors of offsets and spans the most often.
            </Typography>
            <Typography className={classes2.text} paragraph>
                Piece location is also restricted to these 4 squares when
                creating a piece to prevent situations in which the game would
                be over by default. An example of this would be positioning the
                piece at D1, adding an offset of 8 squares up and 1 square to
                the right, and then substituting your piece for the Queen in
                your game. Since the black version of the piece is the mirror
                image of the white version, the white and black King would also
                be trapped, creating a situation where both Kings are checkmated
                at the same time. This is an impossible situation in regular
                Chess and has no definition. You could extend the definition of
                stalemate to include this, but regardless the game would be over
                before the first move.
            </Typography>
        </div>
    );
}
