import React from "react";
import { Typography } from "@material-ui/core";
import { capitalize } from "../../helpers/capitalize";
import { resolvePlayerType } from "../../helpers/resolvePlayerType";
import { getOppositeColorName } from "../../helpers/getOppositeColorName";
import { useStyles } from "./StatusBar.jss";

export function StatusBar({ turn, winner, condition, theme }) {
    const classes = useStyles({ theme: theme });

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
                className={classes.status_bar}
            >
                {getMessage()}
            </Typography>
    );
}
