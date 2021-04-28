import React from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {dragonSrcStrWhite} from "../../PieceProfiles/Help/dragonSrcStr";
import {RangeExample} from "../../PieceProfiles/Help/RangeExample";
import {SeeExampleButton} from "../../Reuseables/NavBar/Help/SeeExampleButton";
import {BlackRangeMirrorImageExplanation} from "./BlackRangeMirrorImageExplanation";
import {useStyles as useMoreStyles} from "../../Reuseables/NavBar/Help/HelpText.jss";
import {useStyles} from "../../PieceProfiles/Help/ProfileHelpText.jss";

export function OffsetsAndSpansExplanation(props) {
    const classes = useStyles({ theme: props.theme });
    const classes2 = useMoreStyles({ theme: props.theme });

    const dragonOffsets = [
        [-2,1],
        [-1,2],
        [1,2],
        [2,1],
        [2,-1],
        [1,-2],
        [-1,-2],
        [-2,-1],
    ];
    const dragonSpans = [
        "step_1sqr90d",
        "step_1sqr45d",
        "step_1sqr0d",
        "step_1sqr315d",
        "step_1sqr270d",
        "step_1sqr225d",
        "step_1sqr180d",
        "step_1sqr135d",
    ];

    return (
        <div>
            <Typography className={classes2.text} paragraph>
                The <div className={classes2.emphasis}>range</div> of a piece is
                how it can move. I define ranges as 2 separate types,{" "}
                <div className={classes2.emphasis}>offsets and spans.</div>
            </Typography>
            <Typography className={classes2.text} paragraph>
                <Box className={classes.profile_wb_example}>
                    <Typography className={classes2.text} paragraph>
                        <RangeExample
                            pieceImgStr={dragonSrcStrWhite}
                            range={dragonOffsets}
                            rangeType="offsets"
                            theme={props.theme}
                            item3={true}
                            float={true}
                        />
                        <div className={classes2.emphasis}>
                            Offsets are jumps
                        </div>
                        : a Knight moves in offsets of 2 squares horizontal and
                        1 square vertical, or 1 square vertical and 2 squares
                        horizontal. Click on a square and the app will measure
                        how many squares X to the left or right, plus how many
                        squares Y up or down, that square is from the piece’s
                        current position. This is the offset. Now wherever the
                        piece is in a game, whichever square is that offset from
                        the location is somewhere the piece can move. Click the
                        same square again to remove the offset.
                        <SeeExampleButton
                            theme={props.theme}
                            smSrc={"/Images/gif/thin/offsets.gif"}
                            lgSrc={"/Images/gif/wide/offsets.gif"}
                        />
                    </Typography>
                    <Typography className={classes2.text} paragraph>
                        <RangeExample
                            pieceImgStr={dragonSrcStrWhite}
                            range={dragonSpans}
                            rangeType="spans"
                            theme={props.theme}
                            float={true}
                            item1={true}
                        />
                        <div className={classes2.emphasis}>Spans</div> are how
                        Rooks, Bishops, and Queens move. For example, Rooks and
                        Queens can move in a span of{" "}
                        <div className={classes2.emphasis}>up</div>, meaning
                        that starting from the piece’s location, every square in
                        front of the piece in its same column is a part of its
                        range, until another piece blocks the way or the end of
                        the board is reached. The spans listed in clockwise
                        order are: up, upper-right, right, lower-right, down,
                        lower-left, left, upper-left. On large screens, click an
                        arrow button to add a span to the piece's range, and
                        click it again to remove it.
                        <SeeExampleButton
                            theme={props.theme}
                            smSrc={"/Images/gif/wide/arrow buttons.gif"}
                            lgSrc={"/Images/gif/wide/arrow buttons.gif"}
                        />
                        On smaller screens, the arrow buttons will appear on the
                        squares themselves by clicking the{" "}
                        <SeeExampleButton
                            theme={props.theme}
                            lgSrc={"/Images/gif/thin/spans icon.png"}
                            smSrc={"/Images/gif/thin/spans icon.png"}
                            isText={true}
                        >
                            spans button in the right hand side icon column.
                        </SeeExampleButton>{" "}
                    </Typography>
                </Box>
            </Typography>
            <BlackRangeMirrorImageExplanation theme={props.theme} />
        </div>
    );
}
