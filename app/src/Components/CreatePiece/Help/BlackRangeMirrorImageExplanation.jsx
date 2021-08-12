import React from "react";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { RangeExample } from "../../PieceProfiles/Help/RangeExample";
import {
    dockerSrcStrBlack,
    dockerSrcStrWhite,
} from "../../PieceProfiles/Help/dockerStcStr";
import { useStyles as useMoreStyles } from "../../Reuseables/NavBar/Help/HelpText.jss";
import { useStyles } from "../../PieceProfiles/Help/ProfileHelpText.jss";

export function BlackRangeMirrorImageExplanation(props) {
    const classes = useStyles({ theme: props.theme });
    const classes2 = useMoreStyles({ theme: props.theme });

    const dockerBlackOffsets = [
        [2, -1],
        [0, -1],
        [1, -1],
        [-1, -1],
        [-2, -1],
        [1, -2],
        [0, -2],
        [-1, -2],
        [-1, -3],
    ];
    const dockerWhiteOffsets = [
        [-2, 1],
        [0, 1],
        [-1, 1],
        [1, 1],
        [2, 1],
        [-1, 2],
        [0, 2],
        [1, 2],
        [1, 3],
    ];

    return (
        <>
            <Typography className={classes2.text} paragraph>
                <Box className={classes.profile_wb_example}>
                    <RangeExample
                        pieceImgStr={dockerSrcStrWhite}
                        range={dockerWhiteOffsets}
                        rangeType="offsets"
                        theme={props.theme}
                        header="white version of Docker"
                    />
                    <RangeExample
                        pieceImgStr={dockerSrcStrBlack}
                        range={dockerBlackOffsets}
                        rangeType="offsets"
                        theme={props.theme}
                        header="black mirror image range"
                    />
                </Box>
                The range of the <div className={classes2.emphasis}>black</div>
                version of a piece you create, is the inverse aka{" "}
                <div className={classes2.emphasis}>mirror image</div>
                of the white version of the piece. when adding range to the
                white piece, the inverse is added to the black piece
                automatically. You can't put the black piece on the board when
                creating a piece.
                <Typography className={classes2.text} paragraph>
                    For <div className={classes2.emphasis}>offsets</div>, if the
                    white piece takes some number of steps to the left, the
                    black piece takes the same number of steps to the right, and
                    vice versa. If the white piece takes some number of steps
                    up, the black piece takes the same number of steps down, and
                    vice versa.
                </Typography>
                <Typography>
                    For <div className={classes2.emphasis}>spans</div>, when a
                    span is added to the white piece, the 180 degree rotation is
                    added to the black. For example, a span of up would be
                    matched with down, left would be matched with right,
                    upper-left would be matched with lower-right, and lower-left
                    would be matched with upper-right. You could remember what
                    span will be added to the black piece by what would would
                    continue along the same path.
                </Typography>
                <Typography className={classes2.text}>
                    One of the reasons that range is added to the black piece
                    this way, is to not allow an in-balance between the
                    usefulness of white and black versions of the same piece.
                    For example, if you created a piece that only moves in a
                    span of up, and then substituted it for the Queen (or any
                    other piece you can sub for), and black was given the same,
                    then it would never be able to leave it's starting square
                    because it is already at the most upward position possible.
                    (the 8th row aka file).
                </Typography>
            </Typography>
        </>
    );
}
