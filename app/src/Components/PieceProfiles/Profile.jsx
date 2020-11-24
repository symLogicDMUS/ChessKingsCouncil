import React from "react";
import { ProfileWB } from "./ProfileWB";
import { useStyles } from "./Profile.jss";

export function Profile({ theme, pieceName, expand, defs, context, children }) {
    /**children is a piece profile header */
    const classes = useStyles[context]();
    return (
        <div className={classes.profile}>
            {children}
            <ProfileWB
                color="W"
                pieceName={pieceName}
                def={defs[pieceName]["W"]}
                expand={expand}
                theme={theme}
                classes={{
                    profileWB: classes.profileWB,
                    imgLabel: classes.imgLabel,
                    imgWindow: classes.imgWindow,
                    pieceProfileImg: classes.pieceProfileImg,
                    rangeTable: classes.rangeTable,
                }}
            />
            <ProfileWB
                color="B"
                pieceName={pieceName}
                def={defs[pieceName]["B"]}
                expand={expand}
                theme={theme}
                classes={{
                    profileWB: classes.profileWB,
                    imgLabel: classes.imgLabel,
                    imgWindow: classes.imgWindow,
                    pieceProfileImg: classes.pieceProfileImg,
                    rangeTable: classes.rangeTable,
                }}
            />
        </div>
    );
}
