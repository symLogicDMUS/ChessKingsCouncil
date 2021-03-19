import React from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {useMediaQuery} from "react-responsive";
import {LocationButton} from "./LocationButton";
import {useStyles as useMoreStyles}
        from "../CreatePiece.jss";
import {useStyles} from "./Location.jss";
import clsx from "clsx";

export function Location({selectedLoc, setLoc, theme}) {
    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles({ theme: theme });
    const isDesktop = useMediaQuery({query: '(min-width: 1040px)'})

    return (
        <Box className={clsx(classes.location_tool, {
            [classes2.tool_flexbox] : isDesktop,
        })}>
            {isDesktop ? (
                <Typography className={classes2.tool_title}>
                    Location
                </Typography>
            ) : null}
            <LocationButton
                rf="d4"
                onClick={() => setLoc('d4')}
                selected={selectedLoc === "d4"}
                theme={theme}
                key='location-d4'
            />
            <LocationButton
                rf="e4"
                onClick={() => setLoc('e4')}
                selected={selectedLoc === "e4"}
                theme={theme}
                key='location-e4'
            />
            <LocationButton
                rf="d5"
                onClick={() => setLoc('d5')}
                selected={selectedLoc === "d5"}
                theme={theme}
                key='location-d5'
            />
            <LocationButton
                rf="e5"
                onClick={() => setLoc('e5')}
                selected={selectedLoc === "e5"}
                theme={theme}
                key='location-e5'
            />
        </Box>
    );
}
