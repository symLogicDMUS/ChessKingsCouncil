import React from "react";
import Box from "@material-ui/core/Box";
import { useStyles } from "./Profile.jss";

const ProfileWB = React.lazy(() => import('./ProfileWB/ProfileWB'));

/**children is a header for the profile of the piece */
function Profile ({pieceName, expand, defs, theme, screenCase, children }) {

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

export default Profile;