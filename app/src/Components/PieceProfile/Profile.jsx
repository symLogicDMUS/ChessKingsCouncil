import React from "react";
import { ProfileWB } from "./ProfileWB";
import "./Profile.scss";

export function Profile({ screenCase, pieceName, expand, displayDefs, children }) {
    return (
        <div className="piece-profile">
            {children}
            <ProfileWB
                color="W"
                screenCase={screenCase}
                pieceName={pieceName}
                expand={expand}
                def={displayDefs[pieceName]["W"]}
            />
            <ProfileWB
                color="B"
                screenCase={screenCase}
                pieceName={pieceName}
                expand={expand}
                def={displayDefs[pieceName]["B"]}
            />
        </div>
    );
}
