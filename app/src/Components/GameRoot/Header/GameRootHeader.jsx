import React from "react";
import {resolvePlayerType} from "../../helpers/resolvePlayerType";
import {getOppositeColorName} from "../../helpers/getOppositeColorName";
import {Typography} from "@material-ui/core";
import {useStyles} from "./GameRootHeader.jss";

export function GameRootHeader({turn, winner, condition}) {

    const classes = useStyles()

    const exclaimMark = () => {
        if (condition === 'checkmate' || condition === "stalemate")
            return '!'
        else
            return null;
    }

    const getTurn = () => {
        switch (condition) {
            case "checkmate":
                return `${resolvePlayerType(winner)} wins!`;
            case "check":
                return `${resolvePlayerType(turn)}'s turn.`;
            case "stalemate":
                return "Tie game!";
            case "resigned":
                return `${getOppositeColorName(turn)} wins. ${resolvePlayerType(turn)}`;
            case "":
                return `${resolvePlayerType(turn)}'s turn.`;
            default:
                return <div>ERROR: condition not check, checkmate, stalemate or none.</div>;
        }
    }

    return (
        <div className={classes.header}>
            <Typography className={classes.turnAndCondition} noWrap={true}>
                {getTurn()}
            </Typography>
            <Typography className={classes.turnAndCondition} noWrap={true}>
                {condition}{exclaimMark()}
            </Typography>
        </div>
    );
}