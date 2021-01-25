import React, {memo} from "react";
import {v4 as uuidv4} from 'uuid';
import Box from "@material-ui/core/Box";
import { ProfileWB } from "./ProfileWB";
import { useStyles } from "./Profile.jss";

export const Profile = memo(({pieceName, expand, defs, theme, screenCase, children }) => {
    /**children is a header for the profile of the piece */
    const classes = useStyles({theme: theme});

    return (
        <Box className={classes.profile}>
            {children}
            <ProfileWB
                color="W"
                key={uuidv4()}
                expand={expand}
                pieceName={pieceName}
                def={defs[pieceName]["W"]}
                screenCase={screenCase}
                theme={theme}
            />
            <ProfileWB
                color="B"
                key={uuidv4()}
                expand={expand}
                pieceName={pieceName}
                def={defs[pieceName]["B"]}
                screenCase={screenCase}
                theme={theme}
            />
        </Box>
    );
});