import React from "react";
import { ProfileWB } from "./ProfileWB";
import "./Profile.scss";

export function Profile({ screenCase, pieceName, expand, displayDefs, pieceProfilesStyle, children }) {
    return (
    <div className="piece-profile">
            {children}
            <ProfileWB
                color="W"
                screenCase={screenCase}
                pieceName={pieceName}
                expand={expand}
                def={displayDefs[pieceName]["W"]}
                pieceProfilesStyle={pieceProfilesStyle}
            />
            <ProfileWB
                color="B"
                screenCase={screenCase}
                pieceName={pieceName}
                expand={expand}
                def={displayDefs[pieceName]["B"]}
                pieceProfilesStyle={pieceProfilesStyle}
            />
        </div>
    );
}
