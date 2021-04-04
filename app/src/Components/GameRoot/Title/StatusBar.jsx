import React, {useEffect, useState} from "react";
import clsx from "clsx";
import { Typography } from "@material-ui/core";
import { capitalize } from "../../helpers/capitalize";
import {viewWidth} from "../../helpers/windowMeasurments";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { resolvePlayerType } from "../../helpers/resolvePlayerType";
import { getOppositeColorName } from "../../helpers/getOppositeColorName";
import { useStyles } from "./StatusBar.jss";

export function StatusBar({ turn, winner, condition, theme }) {
    const lg = useMediaQuery("(min-width:960px)");
    const sm = useMediaQuery("(max-width:960px)");

    const [toolDrawerWidth, setToolDrawerWidth] = useState(viewWidth() * 0.25);
    useEffect(() => {
        function handleResize() {
            if (viewWidth() >= 960) {
                setToolDrawerWidth(viewWidth() * 0.25);
            }
        }
        window.addEventListener("resize", handleResize);
        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const classes = useStyles({ theme: theme, toolDrawerWidth: toolDrawerWidth });

    const getMessage = () => {
        condition = capitalize(condition);
        switch (condition) {
            case "Checkmate":
                return `Checkmate! ${resolvePlayerType(winner)} wins!`;
            case "Check":
                return `${resolvePlayerType(turn)}'s turn. Check.`;
            case "Stalemate":
                return "Stalemate!";
            case "Resigned":
                return `${getOppositeColorName(turn)} wins. ${resolvePlayerType(
                    turn
                )} resigned.`;
            case "":
                return `${resolvePlayerType(turn)}'s turn.`;
            default:
                return "Error: no condition found";
        }
    };

    return (
            <Typography
                variant="h6"
                noWrap={true}
                className={clsx(classes.statusBar, {
                    [classes.statusBarSm]: sm,
                    [classes.statusBarLg]: lg,
                })}
            >
                {getMessage()}
            </Typography>
    );
}
