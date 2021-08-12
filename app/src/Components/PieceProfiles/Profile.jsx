import React from "react";
import Box from "@material-ui/core/Box";
import { useStyles } from "./Profile.jss";

const ProfileWB = React.lazy(() => import("./ProfileWB/ProfileWB"));

/**children is a header for the profile of the piece */
function Profile({
    pieceName,
    expand,
    defs,
    theme,
    screenCase,
    adjust,
    children,
}) {
    const classes = useStyles({ theme: theme });

    return (
        <Box className={classes.profile}>
            {children}
            <ProfileWB
                color="W"
                expand={expand}
                pieceName={pieceName}
                def={defs[pieceName]["W"]}
                screenCase={screenCase}
                adjust={adjust}
                theme={theme}
            />
            <ProfileWB
                color="B"
                expand={expand}
                pieceName={pieceName}
                def={defs[pieceName]["B"]}
                screenCase={screenCase}
                adjust={adjust}
                theme={theme}
            />
        </Box>
    );
}

export default Profile;
