import React from "react";
import {Typography} from "@material-ui/core";
import {capitalize} from "../../helpers/capitalize";
import {resolvePlayerType} from "../../helpers/resolvePlayerType";
import {getOppositeColorName} from "../../helpers/getOppositeColorName";
import {fontSizeAlt3 as fontSize} from "../../styles/fontSize.jss";
import {useStyles} from "./StatusBar.jss";

export function StatusBar({ turn, winner, condition, theme }) {
    const classes = useStyles({ theme: theme, fontSize: fontSize });

    const exclaimMark = () => {
        if (condition === "checkmate" || condition === "stalemate") return "!";
        else return null;
    };

    const getTurn = () => {
        condition = capitalize(condition)
        switch (condition) {
            case "Checkmate":
                return `${resolvePlayerType(winner)} wins!`;
            case "Check":
                return `${resolvePlayerType(turn)}'s turn.`;
            case "Stalemate":
                return "Tie game!";
            case "Resigned":
                return `${getOppositeColorName(turn)} wins. ${resolvePlayerType(
                    turn
                )}`;
            case "":
                return `${resolvePlayerType(turn)}'s turn.`;
            default:
                return (
                    <div>
                        ERROR: condition not check, checkmate, stalemate or
                        none.
                    </div>
                );
        }
    };

    return (
        <>
            <Typography
                className={classes.header}
                variant="h6"
                noWrap
            >
                Play Game
                <Typography
                    className={classes.status_bar}
                    variant="h6"
                    noWrap={true}
                >
                    {getTurn()} {condition}
                    {exclaimMark()}
                </Typography>
            </Typography>
        </>
    );
}
