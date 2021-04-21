import React from "react";
import Box from "@material-ui/core/Box";
import {themes} from "../../styles/themes.jss";
import Typography from "@material-ui/core/Typography";
import {offsetExample1} from "../../CreatePiece/Help/offsetExample1";
import {offsetExample2} from "../../CreatePiece/Help/offsetExample2";
import { useStyles as useMoreStyles } from "../../Reuseables/NavBar/Help/HelpText.jss";
import { useStyles } from "./BlackImageMirrorRangeExplanation.jss";

export function BlackPieceMirrorImageExplanation({theme}) {
    const classes = useStyles({theme: theme});
    const classes2 =  useMoreStyles({theme: theme})

    return (
        <div>
            <Typography className={classes2.text} paragraph>
                When you add an offset or a span to your piece, you are adding
                it to the white version of the piece. The black version becomes
                the “mirror image” of what you added. For example, when you
                click the up arrow, <i className={classes2.emphasis}>down</i>
                is added to the black version of the piece automatically.
                This is done to prevent an unfair imbalance between white
                and black versions of the same piece, while still allowing for
                the same level of customization. For example, if you created a
                piece that could only move up, and then substituted this piece
                for any of Rook, Bishop, Queen, or Knight, than if white and
                black versions of pieces were defined the same, the black version
                of this piece would be useless.
            </Typography>
            <Box className={classes.examples}>
                {offsetExample1(
                    themes[theme].light_normal,
                    themes[theme].dark_normal,
                    themes[theme].offset,
                    '25vh',
                    '25vh'
                )}
                {offsetExample2(
                    themes[theme].light_normal,
                    themes[theme].dark_normal,
                    themes[theme].offset,
                    '25vh',
                    '25vh'
                )}
            </Box>
            <Typography className={classes2.text} paragraph>
                    Another example off adding range is if you click the square that
                    is 2 up and 1 to the left from the piece’s location, than “+2,
                    -1” would be added to the white version of this piece, and “-2,
                    +1” would be added to the black version.
            </Typography>
            <Typography className={classes2.text} paragraph>
                If a square on the board is part of a span, the word “span” is
                displayed on the square. If the square is part of an offset, the
                offset calculation is displayed on the square. The text
                displayed on squares can be turned off in the settings in the
                NavBar.
            </Typography>
        </div>
    )
}