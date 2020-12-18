import React from "react";
import Box from "@material-ui/core/Box";
import { ProfileWB } from "./ProfileWB";
import { useStyles } from "./Profile.jss";
import {fontSize} from "../styles/fontSize.jss";

export function Profile({pieceName, expand, defs, theme, children }) {
    /**children is a piece profile header */
    const classes = useStyles({theme: theme, fontSize: fontSize});

    return (
        <Box className={classes.profile}>
            {children}
            <ProfileWB
                color="W"
                key={pieceName}
                pieceName={pieceName}
                def={defs[pieceName]["W"]}
                expand={expand}
                theme={theme}
            />
            <ProfileWB
                color="B"
                key={pieceName}
                pieceName={pieceName}
                def={defs[pieceName]["B"]}
                expand={expand}
                theme={theme}
            />
        </Box>
    );
}