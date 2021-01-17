import React, {useEffect, useState} from "react";
import {Typography} from "@material-ui/core";
import {capitalize} from "../../helpers/capitalize";
import {resolvePlayerType} from "../../helpers/resolvePlayerType";
import {getOppositeColorName} from "../../helpers/getOppositeColorName";
import {fontSizeAlt3 as fontSize} from "../../styles/fontSize.jss";
import {useStyles} from "./StatusBar.jss";
import MediaQuery from "react-responsive/src";

export function StatusBar({ turn, winner, condition, theme }) {

    const classes = useStyles({ theme: theme, fontSize: fontSize });

    const getMessage = () => {
        condition = capitalize(condition)
        switch (condition) {
            case "Checkmate":
                return `Checkmate! ${resolvePlayerType(winner)} wins!`;
            case "Check":
                return `${resolvePlayerType(turn)}'s turn. Check.`;
            case "Stalemate":
                return "Stalemate!";
            case "Resigned":
                return `${getOppositeColorName(turn)} wins. ${resolvePlayerType(turn)} resigned.`;
            case "":
                return `${resolvePlayerType(turn)}'s turn.`;
            default:
                return 'Error: no condition found';
        }
    }

    return (
        <>
            <Typography
                className={classes.header}
                variant="h6"
                noWrap
            >
                <MediaQuery minDeviceWidth={768}>Play Game</MediaQuery>
                <Typography
                    className={classes.status_bar}
                    variant="h6"
                    noWrap={true}
                >
                    {getMessage()}
                </Typography>
            </Typography>
        </>
    );
}
