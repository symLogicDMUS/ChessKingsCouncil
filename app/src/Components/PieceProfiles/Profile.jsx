import React from "react";
import { ProfileWB } from "./ProfileWB";
import { useStyles } from "./Profile.jss";

export function Profile({pieceName, expand, defs, context, children }) {
    /**children is a piece profile header */
    const classes = useStyles(context);
    return (
        <div className={classes.profile}>
            {children}
            <ProfileWB
                color="W"
                pieceName={pieceName}
                def={defs[pieceName]["W"]}
                context={context}
                expand={expand}
            />
            <ProfileWB
                color="B"
                pieceName={pieceName}
                def={defs[pieceName]["B"]}
                context={context}
                expand={expand}
            />
        </div>
    );
}
