import React, {memo, useReducer} from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import { Portal } from "@material-ui/core";
import ProfileWBAvatar  from "./ProfileWBAvatar";
import ProfileWBRange from "./ProfileWBRange";
import { PartialRangeModal } from
        "../PartialRangeModal/PartialRangeModal";
import { reducer } from "./ProfileWB.red";
import {Close} from "../../Reuseables/Modals/Close";
import { useStyles } from "./ProfileWB.jss";

/**
 * className: profileWB class
 * color: is for W or B piece,
 * def: spans, offsets, and img of W or B piece
 * */
export const ProfileWB = memo(({ pieceName, color, def, theme, screenCase, hasDrawerParent }) => {
    const [state, dispatch] = useReducer(reducer, {
        isModal: false,
        rangeType: null,
    });

    const classes = useStyles({ theme: theme });

    return (
        <>
            {state.isModal ? (
                <Portal>
                    <div className={classes.modal}>
                        <Box className={clsx(classes.range_analysis, {
                            [classes.profile_wb_drawer_item]: hasDrawerParent,
                        })}>
                            <Box className={classes.x_icon_flexbox}>
                                <Close
                                    onClick={() => dispatch({ type: "close" })}
                                    className={classes.close_icon}
                                    theme={theme}
                                />
                            </Box>
                            <PartialRangeModal
                                screenCase={screenCase}
                                rangeType={state.rangeType}
                                range={(state.rangeType === 'span') ? def.spans : def.offsets}
                                pieceName={pieceName}
                                src={def.img}
                                color={color}
                                theme={theme}
                            />
                        </Box>
                    </div>
                </Portal>
            ) : null}
            <div className={clsx(classes.profile_wb, {
                [classes.profile_wb_drawer_item]: hasDrawerParent,
                [classes.profile_w]: color === 'W',
                [classes.profile_b]: color === 'B'
            })}>
                <ProfileWBAvatar
                    src={def.img}
                    color={color}
                    theme={theme}
                    pieceName={pieceName}
                    hasDrawerParent={hasDrawerParent}
                />
                <ProfileWBRange
                    pieceName={pieceName}
                    pieceImgUrl={def.img}
                    range={def.spans}
                    rangeType='span'
                    color={color}
                    theme={theme}
                    openRangeModal={() => dispatch({ type: "open-spans" })}
                    hasDrawerParent={hasDrawerParent}
                    screenCase={screenCase}
                />
                <ProfileWBRange
                    pieceName={pieceName}
                    pieceImgUrl={def.img}
                    range={def.offsets}
                    rangeType='offset'
                    color={color}
                    theme={theme}
                    openRangeModal={() => dispatch({ type: "open-offsets" })}
                    hasDrawerParent={hasDrawerParent}
                    screenCase={screenCase}
                />
            </div>
        </>
    );
})
