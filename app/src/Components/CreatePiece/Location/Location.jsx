import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { LocationButton } from "./LocationButton";
import { useStyles as useMoreStyles } from "../CreatePiece.jss";
import { useStyles } from "./Location.jss";
import MediaQuery from "react-responsive/src";

export function Location({ selectedLoc, setLoc, theme }) {
    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles({ theme: theme });
    const isWide = useMediaQuery("(min-width: 960px)");

    return (
        <MediaQuery minWidth={960}>
            <span
                className={clsx(classes2.four_button_group, {
                    [classes2.tool_flexbox]: isWide,
                })}
            >
                {isWide ? (
                    <Typography className={classes2.tool_title}>
                        Location
                    </Typography>
                ) : null}
                <LocationButton
                    rf="d4"
                    onClick={() => setLoc("d4")}
                    selected={selectedLoc === "d4"}
                    theme={theme}
                    key="location-d4"
                />
                <LocationButton
                    rf="e4"
                    onClick={() => setLoc("e4")}
                    selected={selectedLoc === "e4"}
                    theme={theme}
                    key="location-e4"
                />
                <LocationButton
                    rf="d5"
                    onClick={() => setLoc("d5")}
                    selected={selectedLoc === "d5"}
                    theme={theme}
                    key="location-d5"
                />
                <LocationButton
                    rf="e5"
                    onClick={() => setLoc("e5")}
                    selected={selectedLoc === "e5"}
                    theme={theme}
                    key="location-e5"
                />
            </span>
        </MediaQuery>
    );
}
