import React from "react";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import {Typography} from "@material-ui/core";
import {example_box} from "./HelpText.jss";
import {RangeToolExample} from "./RangeToolExample";
import {fontSize002, fontSize00301} from "../../styles/fontSizes.jss";
import {help_text} from "../../Reuseables/NavBar/HelpText.jss";
import {ProfileHelpTextAlt} from "../../PieceProfiles/Help/ProfileHelpTextAlt";
import {getSpanRangeBoardDragonExample} from "../../PieceProfiles/Help/getSpanRangeBoardDragonExample";
import {img_example} from "./OffsetsAndSpansExplanation.jss";
import {useStyles} from "../../Reuseables/SubTitle.jss";


export function OffsetsAndSpansExplanation(props) {
    const classes = useStyles({theme: props.theme, fontSize: fontSize002});

    const getExamples = (screenCase) => {
        return (
            <Box style={example_box(screenCase)}>
                <img
                    src={getSpanRangeBoardDragonExample({theme: props.theme})}
                    alt="span board for dragon"
                    style={img_example()}
                />
                <RangeToolExample theme={props.theme}/>
            </Box>
        )
    };


    return (
        <div>
            <Typography variant='h6' className={classes.sub_title}>
                Offsets and Spans
            </Typography>
            <Typography style={help_text(props.fontSize, props.theme)}>
                The range of a piece is how it can move. I define ranges as 2
                separate types: <i>offsets and spans</i>
            </Typography>
            <ProfileHelpTextAlt theme={props.theme}/>
            <Typography paragraph style={help_text(props.fontSize, props.theme)}>
                <p>
                    Click on a square and the app will measure how many squares X to
                    the left or right, plus how many squares Y up or down, that
                    square is from the piece’s current position. This is the offset.
                    Now wherever the piece is in a game, whichever square is that
                    offset from the location is somewhere the piece can move. Click
                    the same square again to remove the offset.
                </p>
            </Typography>
            <Typography paragraph style={help_text(props.fontSize, props.theme)}>
                <p>
                    Spans are how Rooks, Bishops, and Queens move. A span of up
                    means that starting from the piece’s location, every square in
                    front of the piece in its same column is a part of its range,
                    until another piece blocks the way or the end of the board is
                    reached. The spans listed in clockwise order are: up,
                    upper-right, right, lower-right, down, lower-left, left,
                    upper-left. Click an arrow key to add that span to the piece’s
                    range and click it again to remove it.
                </p>
            </Typography>
            <MediaQuery minDeviceWidth={768}>{getExamples('desktop')}</MediaQuery>
            <MediaQuery maxDeviceWidth={767}>{getExamples('mobile')}</MediaQuery>
            <Typography paragraph style={help_text(props.fontSize, props.theme)}>
                <p>
                    Spans take precedence over offsets, i.e. if you turn on a span it will overwrite any offsets lying
                    on its
                    path. Likewise, you cannot turn on an offset that lies on the path of a span.
                </p>
            </Typography>
        </div>
    );
}