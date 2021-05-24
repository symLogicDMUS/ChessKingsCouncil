import React, {useMemo} from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {getRangeBoardImgStr} from "./BoardSvgStr/getRangeBoardImgStr";
import {resolvePlayerType} from "../../helpers/resolvePlayerType";
import { useStyles as useMoreStyles } from "./ProfileWB.jss";
import { useStyles } from "./ProfileWBRange.jss";

function ProfileWBRange (props) {
    const {
        pieceName,
        pieceImgUrl,
        theme,
        color,
        range,
        rangeType,
        adjust,
    } = props;


    const rangeBoardImgStr = useMemo(() =>
        getRangeBoardImgStr("d4", rangeType, range, theme), [theme, range.length]
    )

    const classes = useStyles({ theme: theme, board_img: rangeBoardImgStr });
    const classes2 = useMoreStyles({ theme: theme });

    return (
        <Box
            className={clsx(classes2.sqr_item_area, {
                [classes2.item2]: rangeType === "span",
                [classes2.item3]: rangeType === "offset",
            })}
        >
            <Box className={clsx(classes2.sqr_item_header, {
            })}>
                <Typography variant='caption' className={classes2.sqr_item_title}>
                    {resolvePlayerType(color)} {rangeType}s
                </Typography>
            </Box>
            <Box
                className={clsx(classes.board_window, {
                    [classes2.sqr_item]: true,
                })}
            >
                <img
                    src={rangeBoardImgStr}
                    className={classes.board_img}
                    alt={`image of board with ranges for ${pieceName} highlighted`}
                />
                <div className={clsx(classes.board_grid,{[classes.adjust]:adjust})}>
                    <img src={pieceImgUrl} className={classes.piece_img} alt={`image of piece ${pieceName}`} />
                </div>
            </Box>
        </Box>
    );
}

export default ProfileWBRange;
