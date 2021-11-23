import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../../Context/ThemeContext";
import { Box, CircularProgress, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Pause, PlayArrow } from "@material-ui/icons";
import { ThemeRotationLg } from "./ThemeRotationLg";
import { ThemeRotationSm } from "./ThemeRotationSm";

export default function ThemeRotation({ variant }) {
    const { themes, themeDispatch } = useContext(ThemeContext);

    const [progress, setProgress] = React.useState(0);

    const [paused, setPaused] = useState(false);
    const togglePause = () => setPaused(!paused);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (paused) {
                    return progress;
                }
                if (prevProgress >= 100) {
                    return 0;
                }
                return prevProgress + 10;
            });
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, [paused]);

    useEffect(() => {
        if (progress === 100) {
            themeDispatch({ type: "rotate-home-theme" });
        }
    }, [progress]);

    const themeSubsetNames = {
        dark: "Dark",
        light: "Light",
        tan_dark: "Tan Dark",
        NBA: "NBA",
        star_wars: "Star Wars",
        mechwarrior_a_team: "MechWarrior",
    };

    const getThemeRotator = () => {
        switch (variant) {
            case "lg":
                return (
                    <ThemeRotationLg
                        themes={themes}
                        paused={paused}
                        progress={progress}
                        togglePause={togglePause}
                        themeSubsetNames={themeSubsetNames}
                    />
                );
            case "sm":
                return (
                    <ThemeRotationSm
                        themes={themes}
                        paused={paused}
                        progress={progress}
                        togglePause={togglePause}
                        themeSubsetNames={themeSubsetNames}
                    />
                );
        }
    };

    return <>{getThemeRotator()}</>;
}
