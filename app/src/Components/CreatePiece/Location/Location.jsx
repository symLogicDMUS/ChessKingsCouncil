import React from "react";
import clsx from "clsx";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useStyles as useMoreStyles } from "../CreatePiece.jss";
import { LocationButton } from "./LocationButton";
import MediaQuery from "react-responsive/src";

export function Location({ selectedLoc, setLoc, theme, toggleMiniVariantTool  }) {
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
                    toggleMiniVariantTool={toggleMiniVariantTool}
                >
                    d4
                </LocationButton>
                <LocationButton
                    rf="e4"
                    onClick={() => setLoc("e4")}
                    selected={selectedLoc === "e4"}
                    theme={theme}
                    key="location-e4"
                    toggleMiniVariantTool={toggleMiniVariantTool}
                >
                    e4
                </LocationButton>
                <LocationButton
                    rf="d5"
                    onClick={() => setLoc("d5")}
                    selected={selectedLoc === "d5"}
                    theme={theme}
                    key="location-d5"
                    toggleMiniVariantTool={toggleMiniVariantTool}
                >
                    d5
                </LocationButton>
                <LocationButton
                    rf="e5"
                    onClick={() => setLoc("e5")}
                    selected={selectedLoc === "e5"}
                    theme={theme}
                    key="location-e5"
                    toggleMiniVariantTool={toggleMiniVariantTool}
                >
                    e5
                </LocationButton>
            </span>
        </MediaQuery>
    );
}
