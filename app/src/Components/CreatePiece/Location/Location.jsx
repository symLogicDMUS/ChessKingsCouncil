import React from "react";
import clsx from "clsx";
import { Typography } from "@material-ui/core";
import MediaQuery from "react-responsive/src";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useStyles as useMoreStyles } from "../CreatePiece.jss";

const LocationButton = React.lazy(() => import('./LocationButton'));

function Location({ selectedLoc, setLoc, theme }) {
    const classes = useMoreStyles({ theme: theme });
    const isWide = useMediaQuery("(min-width: 960px)");

    return (
        <MediaQuery minWidth={960}>
            <span className={classes.four_button_group}>
                {isWide ? (
                    <Typography className={classes.tool_title}>
                        Location
                    </Typography>
                ) : null}
                <LocationButton
                    rf="d4"
                    key="location-d4"
                    onClick={() => setLoc("d4")}
                    selected={selectedLoc === "d4"}
                    theme={theme}
                >
                    d4
                </LocationButton>
                <LocationButton
                    rf="e4"
                    key="location-e4"
                    onClick={() => setLoc("e4")}
                    selected={selectedLoc === "e4"}
                    theme={theme}
                >
                    e4
                </LocationButton>
                <LocationButton
                    rf="d5"
                    key="location-d5"
                    onClick={() => setLoc("d5")}
                    selected={selectedLoc === "d5"}
                    theme={theme}
                >
                    d5
                </LocationButton>
                <LocationButton
                    rf="e5"
                    key="location-e5"
                    onClick={() => setLoc("e5")}
                    selected={selectedLoc === "e5"}
                    theme={theme}
                >
                    e5
                </LocationButton>
            </span>
        </MediaQuery>
    );
}

export default Location;