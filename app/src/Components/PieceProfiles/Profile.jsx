import React from "react";
import { ProfileWB } from "./ProfileWB";
import {styleObjects} from "./PieceProfileStyle"

export function Profile({ theme, screenCase, pieceName, expand, defs, pieceProfilesStyle, children }) {
    /**children is a piece profile header */
    return (
    <div style={styleObjects[screenCase]['Profile'](pieceProfilesStyle)}>
            {children}
            <ProfileWB
                color="W"
                theme={theme}
                screenCase={screenCase}
                pieceName={pieceName}
                expand={expand}
                def={defs[pieceName]["W"]}
                pieceProfilesStyle={pieceProfilesStyle}
            />
            <ProfileWB
                color="B"
                theme={theme}
                screenCase={screenCase}
                pieceName={pieceName}
                expand={expand}
                def={defs[pieceName]["B"]}
                pieceProfilesStyle={pieceProfilesStyle}
            />
        </div>
    );
}
