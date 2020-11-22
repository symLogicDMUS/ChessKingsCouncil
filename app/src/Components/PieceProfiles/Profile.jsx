import React from "react";
import { ProfileWB } from "./ProfileWB";
import { useStyles } from "./PieceProfiles.jss";
import { imgLabel } from "./styles/imgLabel.jss";
import { imgWindow } from "./styles/imgWindow.jss";
import { pieceProfileImg } from "./styles/pieceProfileImg.jss";
import { rangeTable } from "./styles/rangeTable.jss";

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
                    imgLabel: imgLabel,
                    imgWindow: imgWindow,
                    pieceProfileImg: pieceProfileImg,
                    rangeTable: rangeTable,
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
                    imgLabel: imgLabel,
                    imgWindow: imgWindow,
                    pieceProfileImg: pieceProfileImg,
                    rangeTable: rangeTable,
                }}
            />
        </div>
    );
}
