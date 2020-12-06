import React from "react";
import {getColorName} from "../../helpers/getColorName";
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
            case "checkmate": return `${getColorName(winner)} wins!`;
            case "stalemate": return "Tie game!";
            case "check": return `${getColorName(turn)}'s turn.`;
            case "resigned": return `${getOppositeColorName(turn)} wins. ${getColorName(turn)}`;
            case "": return `${getColorName(turn)}'s turn.`;
            default: return <div>ERROR: condition not check, checkmate, stalemate or none.</div>;
        }
    }

    const getHeader = () => {

        if (condition === '') {
            return (
                <Typography className={classes.label} align={'center'}>
                    {getTurn()}
                </Typography>
            );
        } else {
            return (
                <div className={classes.grid}>
                    <Typography className={classes.turn} align={'left'} noWrap={true}>
                        {getTurn()}
                    </Typography>
                    <Typography className={classes.condition} align={'left'} noWrap={true}>
                        {condition}{exclaimMark()}
                    </Typography>
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