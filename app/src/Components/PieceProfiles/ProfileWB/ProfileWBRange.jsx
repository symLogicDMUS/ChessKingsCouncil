import React, { useMemo } from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {getRangeBoardImgStr} from "./BoardSvgStr/getRangeBoardImgStr";
import { ProfileWBRangeHeader } from "../ProfileWBRangeHeader";
import { useStyles as useMoreStyles } from "./ProfileWB.jss";
import { useStyles } from "./ProfileWBRange.jss";

function ProfileWBRange ({
    pieceName,
    pieceImgUrl,
    theme,
    color,
    range,
    rangeType,
    openRangeModal,
    hasDrawerParent,
}) {
    const rangeBoardImgStr = useMemo(() => getRangeBoardImgStr("d4", rangeType, range, theme), [])

    const classes = useStyles({ theme: theme, board_img: rangeBoardImgStr });
    const classes2 = useMoreStyles({ theme: theme });

    return (
        <Box
            className={clsx(classes2.sqr_item_area, {
                [classes2.item2]: rangeType === "span",
                [classes2.item3]: rangeType === "offset",
                [classes2.profile_wb_drawer_item]: hasDrawerParent,
                [classes2.drawer_item_margins]: hasDrawerParent,
            })}
        >
            <ProfileWBRangeHeader
                theme={theme}
                color={color}
                rangeType={rangeType}
                openRangeModal={openRangeModal}
                hasDrawerParent={hasDrawerParent}
            />
            <Box
                className={clsx(classes.board_window, {
                    [classes2.sqr_item]: true,
                    [classes2.profile_wb_drawer_item]: hasDrawerParent,
                })}
            >
                <img
                    src={rangeBoardImgStr}
                    className={classes.board_img}
                    alt={`image of board with ranges for ${pieceName} highlighted`}
                />
                <div className={classes.board_grid}>
                    <img src={pieceImgUrl} className={classes.piece_img} alt={`image of piece ${pieceName}`} />
                </div>
            </Box>
        </Box>
    );
}

export default ProfileWBRange;
