import clsx from "clsx";
import React, { memo } from "react";
import { useStyles } from "./ProfileWB.jss";

const ProfileWBRange = React.lazy(() => import("./ProfileWBRange"));
const ProfileWBAvatar = React.lazy(() => import("./ProfileWBAvatar"));

/**
 * className: profileWB class
 * color: is for W or B piece,
 * def: spans, offsets, and img of W or B piece
 * */
const ProfileWB = memo(
    ({ pieceName, color, def, theme, screenCase, adjust }) => {
        const classes = useStyles({ theme: theme });

        return (
            <>
                <div
                    className={clsx(classes.profile_wb, {
                        [classes.profile_w]: color === "W",
                        [classes.profile_b]: color === "B",
                    })}
                >
                    <ProfileWBAvatar
                        src={def.img}
                        color={color}
                        theme={theme}
                        pieceName={pieceName}
                    />
                    <ProfileWBRange
                        pieceName={pieceName}
                        pieceImgUrl={def.img}
                        range={def.spans}
                        rangeType="span"
                        color={color}
                        theme={theme}
                        adjust={adjust}
                        screenCase={screenCase}
                    />
                    <ProfileWBRange
                        pieceName={pieceName}
                        pieceImgUrl={def.img}
                        range={def.offsets}
                        rangeType="offset"
                        color={color}
                        theme={theme}
                        adjust={adjust}
                        screenCase={screenCase}
                    />
                </div>
            </>
        );
    }
);

export default ProfileWB;
