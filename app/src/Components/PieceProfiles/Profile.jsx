import React from "react";
import { ProfileWB } from "./ProfileWB";

export function Profile({
    theme,
    screenCase,
    pieceName,
    expand,
    defs,
    context,
    children,
}) {
    /**children is a piece profile header */

    return (
        <div className={}>
            {children}
            <ProfileWB
                color="W"
                theme={theme}
                screenCase={screenCase}
                pieceName={pieceName}
                expand={expand}
                def={defs[pieceName]["W"]}

            />
            <ProfileWB
                color="B"
                theme={theme}
                screenCase={screenCase}
                pieceName={pieceName}
                expand={expand}
                def={defs[pieceName]["B"]}
            />
        </div>
    );
}
