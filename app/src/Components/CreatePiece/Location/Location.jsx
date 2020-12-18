import React from "react";
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {LocationButton} from "./LocationButton";
import {fontSize} from "../../styles/fontSize.jss";
import {useStyles} from "./Location.jss";

export function Location({selectedLoc, setLoc, theme}) {
    const classes = useStyles({theme: theme, fontSize: fontSize});
    return (
        <>
            <div className={classes.location_tool}>
                <Box className={classes.box}>
                    <Typography className={classes.title}>Location</Typography>
                    <LocationButton
                        rf="d4"
                        setLoc={setLoc}
                        selected={selectedLoc === "d4"}
                        theme={theme}
                    />
                    <LocationButton
                        rf="e4"
                        setLoc={setLoc}
                        selected={selectedLoc === "e4"}
                        theme={theme}
                    />
                    <LocationButton
                        rf="e5"
                        setLoc={setLoc}
                        selected={selectedLoc === "e5"}
                        theme={theme}
                    />
                    <LocationButton
                        rf="d5"
                        setLoc={setLoc}
                        selected={selectedLoc === "d5"}
                        theme={theme}
                    />
                </Box>
            </div>
        </>
    );
}
