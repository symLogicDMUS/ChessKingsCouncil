import React, {memo} from "react";
import clsx from "clsx";
import ProfileWBAvatar  from "./ProfileWBAvatar";
import ProfileWBRange from "./ProfileWBRange";
import { useStyles } from "./ProfileWB.jss";

/**
 * className: profileWB class
 * color: is for W or B piece,
 * def: spans, offsets, and img of W or B piece
 * */
export const ProfileWB = memo(({ pieceName, color, def, theme, screenCase, hasDrawerParent }) => {

    const classes = useStyles({ theme: theme });

    return (
        <>
            <div className={clsx(classes.profile_wb, {
                [classes.profile_wb_drawer_item]: hasDrawerParent,
                [classes.profile_w]: color === 'W',
                [classes.profile_b]: color === 'B',
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
                    hasDrawerParent={hasDrawerParent}
                    screenCase={screenCase}
                />
            </div>
        </>
    );
})
