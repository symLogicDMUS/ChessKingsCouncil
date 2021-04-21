import React from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {SpansExample} from "./SpansExample";
import {AvatarExample} from "./AvatarExample";
import {OffsetsExample} from "./OffsetsExample";
import {useStyles as useMoreStyles} from
        "../../Reuseables/NavBar/Help/HelpText.jss";
import {useStyles} from "./ProfileHelpText.jss";

export function PieceProfilesHelp(props) {
    const classes = useStyles({theme: props.theme});
    const classes2 = useMoreStyles({theme: props.theme});

    return (
        <div>
            <Typography className={classes2.text} paragraph>
                The <div className={classes2.emphasis}>profile</div> of a piece shows the image, spans, and offsets, for the white and black version of the
                piece. Each profile also has a header including the name and other content which differs depending on
                the page you're viewing it on. Below are the white image, spans, and offsets, for the piece named
                {" "}<div className={classes2.emphasis}>Dragon</div>
            </Typography>
            <Typography className={classes2.text} paragraph>
                <Box className={classes.profile_wb_example}>
                    <Typography className={classes2.text} paragraph>
                        <AvatarExample classes={classes} theme={props.theme}/>
                        The Avatar of a piece can be upload from your device, or chosen from the variety of sample images
                        that supplied for each user. The Dragon is one of the sample images. To see all sample images,
                        go the the CreatePiece page and click one of <i>White</i> or <i>Black</i> avatar boxes, or on small screens,
                        the image icon. More info in <i>Uploading Images For Your Piece</i> section.
                    </Typography>
                    <Typography className={classes2.text} paragraph>
                        <SpansExample classes={classes} theme={props.theme}/>
                        Spans are how Rooks, Bishops and Queens move. A span moves in 1 of 8 possible directions until a
                        piece blocks the way or the end of the board is reached. In the example show the Dragon is given
                        all possible spans, like the Queen. One advantage of spans is you can trap pieces on the path when
                        moving would put their king in the way of the path.
                    </Typography>
                    <Typography className={classes2.text} paragraph>
                        <OffsetsExample classes={classes} theme={props.theme}/>
                        Offsets are how Knights move. An offset combines moving left or right some number of squares,
                        with up or down some number of squares. As with the Knight, all offsets 'jump' over any piece,
                        i.e. it doesn't matter if a piece is in the path of motion. Offsets use + and - for right and left,
                        an offset of <div className={classes2.emphasis}>+2 -3</div> would be 2 to the right and 3 down.
                    </Typography>
                    <Typography className={classes2.text}>
                        For more about spans and offsets see the <i>Offsets and Spans explained</i> section of the help table.
                    </Typography>
                </Box>
            </Typography>

        </div>
    );
}