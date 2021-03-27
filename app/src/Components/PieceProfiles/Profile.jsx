import React from "react";
import Box from "@material-ui/core/Box";
import { ProfileWB } from "./ProfileWB/ProfileWB";
import { useStyles } from "./Profile.jss";

/**children is a header for the profile of the piece */
export function Profile ({pieceName, expand, defs, theme, screenCase, children }) {

    const classes = useStyles({theme: theme});

    return (
        <Box className={classes.profile}>
            {children}
            <ProfileWB
                color="W"
                expand={expand}
                pieceName={pieceName}
                def={defs[pieceName]["W"]}
                screenCase={screenCase}
                theme={theme}
            />
            <ProfileWB
                color="B"
                expand={expand}
                pieceName={pieceName}
                def={defs[pieceName]["B"]}
                screenCase={screenCase}
                theme={theme}
            />
        </Box>
    );
}