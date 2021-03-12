import React from "react";
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {LocationButton} from "./LocationButton";
import {useStyles} from "./Location.jss";
import MediaQuery from "react-responsive/src";

export function Location({selectedLoc, setLoc, theme}) {
    const classes = useStyles({theme: theme});
    return (
        <Box className={classes.location_tool}>
            <MediaQuery minDeviceWidth={1040}>
                <Typography className={classes.title}>
                    Location
                </Typography>
            </MediaQuery>
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
