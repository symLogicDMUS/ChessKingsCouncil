import React, {useMemo} from "react";
import {Typography} from "@material-ui/core";
import {RangeBoardExample} from "../../PieceProfiles/Help/RangeBoardExample";
import {getOffsetRangeBoardKnightExample} from "../../PieceProfiles/Help/getOffsetRangeBoardKnightExample";
import {getSpanRangeBoardDragonExample} from "../../PieceProfiles/Help/getSpanRangeBoardDragonExample";
import {useStyles as useMoreStyles} from "../../Reuseables/NavBar/SubTitle.jss";
import {useStyles as useEvenMoreStyles} from "../../Reuseables/NavBar/Help/HelpText.jss";


export function OffsetsAndSpansExplanation(props) {
    const classes = useMoreStyles({theme: props.theme});
    const classes2 = useEvenMoreStyles({theme: props.theme});

    const offsetsExample = useMemo(() =>
        getOffsetRangeBoardKnightExample({theme: props.theme, color: "W"}), []
    )
    const spansExample = useMemo(() =>
        getSpanRangeBoardDragonExample({theme: props.theme, color: "B"}), []
    )

    const label1 = 'A Knight and its offsets'
    const label2 = 'A Dragon and its spans'

    return (
        <div>
            <Typography variant='subtitle2' className={classes2.sub_title}>
                Offsets and Spans
            </Typography>
            <Typography className={classes2.text} paragraph>
                The range of a piece is how it can move. I define ranges as 2
                separate types: <div className={classes2.emphasis}>offsets and spans</div>
            </Typography>
            <Typography className={classes2.text} paragraph>
                <RangeBoardExample
                    theme={props.theme}
                    src1={offsetsExample}
                    label1={label1}
                    alt1={label1}
                    src2={spansExample}
                    label2={label2}
                    alt2={label2}
                />
                <div className={classes2.emphasis}>Offsets are jumps</div>: a Knight moves in offsets of 2 squares
                horizontal and 1 square vertical, or 1 square vertical and 2 squares horizontal. Click on a square and
                the app will measure how many squares X to the left or right, plus how many squares Y up or down, that
                square is from the piece’s current position. This is the offset. Now wherever the piece is in a game,
                whichever square is that offset from the location is somewhere the piece can move. Click the same square
                again to remove the offset.
            </Typography>
            <Typography className={classes2.text} paragraph>
                <div className={classes2.emphasis}>Spans</div> are how Rooks, Bishops, and Queens move. A span of up
                means that starting from the piece’s location, every square in
                front of the piece in its same column is a part of its range,
                until another piece blocks the way or the end of the board is
                reached. The spans listed in clockwise order are: up,
                upper-right, right, lower-right, down, lower-left, left,
                upper-left. Click an arrow key to add that span to the piece’s
                range and click it again to remove it.
            </Typography>
            <Typography className={classes.text} paragraph>
                <div className={classes2.emphasis}>Spans</div> take precedence over offsets, i.e. if you turn on a span
                it will overwrite any offsets lying on its path. Likewise, you cannot turn on an offset that lies on the
                path of a span.
            </Typography>
        </div>
    );
}