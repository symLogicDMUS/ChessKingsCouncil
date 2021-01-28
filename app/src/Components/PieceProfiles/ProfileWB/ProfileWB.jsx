import React, {memo, useReducer} from "react";
import {v4 as uuidv4} from 'uuid';
import Box from "@material-ui/core/Box";
import { Portal } from "@material-ui/core";
import { ProfileWBAvatar } from "./ProfileWBAvatar";
import { ProfileWBRange } from "./ProfileWBRange";
import { PartialRangeModal } from "../PartialRangeModal/PartialRangeModal";
import { reducer } from "./ProfileWB.red";
import { useStyles } from "./ProfileWB.jss";
import {getRangeBoardImgStr} from "./getRangeBoardImgStr";

/**
 * className: profileWB class
 * color: is for W or B piece,
 * def: spans, offsets, and img of W or B piece
 * */
export const ProfileWB = ({ pieceName, color, def, theme, screenCase }) => {
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
                        <Box className={classes.range_modal}>
                            <PartialRangeModal
                                range={(state.rangeType === 'span') ? def.spans : def.offsets}
                                rangeType={state.rangeType}
                                close={() => dispatch({ type: "close" })}
                                src={def.img}
                                color={color}
                                theme={theme}
                                pieceName={pieceName}
                                screenCase={screenCase}
                            />
                        </Box>
                    </div>
                </Portal>
            ) : null}
            <div className={classes.profile_wb}>
                <ProfileWBAvatar
                    src={def.img}
                    color={color}
                    theme={theme}
                    pieceName={pieceName}
                />
                <ProfileWBRange
                    key={uuidv4()}
                    src={def.span_img}
                    rangeType='Spans'
                    color={color}
                    theme={theme}
                    openRangeModal={() => dispatch({ type: "open-spans" })}
                />
                <ProfileWBRange
                    key={uuidv4()}
                    src={def.offset_img}
                    rangeType='Offsets'
                    color={color}
                    theme={theme}
                    openRangeModal={() => dispatch({ type: "open-offsets" })}
                />
            </div>
        </>
    );
}
