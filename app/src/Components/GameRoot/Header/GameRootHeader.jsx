import React from "react";
import {getColorName} from "../../helpers/getColorName";
import {getOppositeColorName} from "../../helpers/getOppositeColorName";
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

        let text = null;

        switch (condition) {
            case "checkmate":
                text = `${getColorName(winner)} wins!`;
                break;
            case "stalemate":
                text = "Tie game!";
                break;
            case "check":
                text = `${getColorName(turn)}'s turn.`;
                break;
            case "resigned":
                text = `${getOppositeColorName(turn)} wins. ${getColorName(turn)}`;
                break;
            case "":
                text = `${getColorName(turn)}'s turn.`;
                break;
            default:
                text = <div>ERROR: condition not check, checkmate, stalemate or none.</div>;
                break;
        }

        return text;
    }

    const getHeader = () => {

        if (condition === '') {
            return (
                <div className={classes.label}>
                    {getTurn()}
                </div>
            );
        } else {
            return (
                <div className={classes.grid}>
                    <div className={classes.turn}>
                        {getTurn()}
                    </div>
                    <div className={classes.condition}>
                        {condition}{exclaimMark()}
                    </div>
                </div>
            );
        }

    }

    return (
        <>
            {getHeader()}
        </>
    )
}