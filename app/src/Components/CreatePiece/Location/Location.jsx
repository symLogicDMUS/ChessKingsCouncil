import React from "react";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { LocationButton } from "./LocationButton";
import { fontSize002 } from "../../styles/fontSize.jss";
import { useStyles } from "./Location.jss";
import { v4 as uuidv4 } from "uuid";
import MediaQuery from "react-responsive/src";

export function Location({ selectedLoc, setLoc, theme }) {
    const classes = useStyles({ theme: theme, fontSize: fontSize002 });
    return (
        <>
            <div className={classes.location_tool}>
                <Box className={classes.box}>
                    <MediaQuery minDeviceWidth={768}>
                        <Typography className={classes.title}>
                            Location
                        </Typography>
                    </MediaQuery>
                    <LocationButton
                        rf="d4"
                        onClick={() => setLoc('d4')}
                        selected={selectedLoc === "d4"}
                        theme={theme}
                        key={uuidv4()}
                    />
                    <LocationButton
                        rf="e4"
                        onClick={() => setLoc('e4')}
                        selected={selectedLoc === "e4"}
                        theme={theme}
                        key={uuidv4()}
                    />
                    <LocationButton
                        rf="d5"
                        onClick={() => setLoc('d5')}
                        selected={selectedLoc === "d5"}
                        theme={theme}
                        key={uuidv4()}
                    />
                    <LocationButton
                        rf="e5"
                        onClick={() => setLoc('e5')}
                        selected={selectedLoc === "e5"}
                        theme={theme}
                        key={uuidv4()}
                    />
                </Box>
            </div>
        </>
    );
}
