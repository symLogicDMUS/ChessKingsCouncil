import React from "react";
import {def} from "./dockerDef";
import {v4 as uuidv4} from "uuid";
import {useStyles} from "../ProfileWB/ProfileWB.jss";
import {ProfileWBAvatar} from "../ProfileWB/ProfileWBAvatar";
import {ProfileWBRange} from "../ProfileWB/ProfileWBRange";
import {getOffsetRangeBoardDockerExample} from "./getOffsetRangeBoardDockerExample";
import {getSpanRangeBoardDockerExample} from "./getSpanRangeBoardDockerExample";

export const ProfileWBExampleDocker = ({color, theme }) => {

    const classes = useStyles({ theme: theme });

    return (
        <>
            <div className={classes.profile_wb}>
                <ProfileWBAvatar
                    src={def[color].img}
                    color={color}
                    theme={theme}
                    pieceName='Docker'
                />
                <ProfileWBRange
                    key={uuidv4()}
                    color={color}
                    theme={theme}
                    rangeType='Spans'
                    src={getSpanRangeBoardDockerExample({theme: theme, color: color})}
                />
                <ProfileWBRange
                    key={uuidv4()}
                    color={color}
                    theme={theme}
                    rangeType='Offsets'
                    src={getOffsetRangeBoardDockerExample({theme: theme, color: color})}
                />
            </div>
        </>
    );
}
