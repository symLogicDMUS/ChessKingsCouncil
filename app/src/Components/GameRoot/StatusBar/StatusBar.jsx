import React, {useEffect, useState} from "react";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import {Typography} from "@material-ui/core";
import {capitalize} from "../../helpers/capitalize";
import {resolvePlayerType} from "../../helpers/resolvePlayerType";
import {getOppositeColorName} from "../../helpers/getOppositeColorName";
import {fontSize00301 as fontSize} from "../../styles/fontSizes.jss";
import {useStyles} from "./StatusBar.jss";

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
            <Box
                className={classes.header}
                variant="h6"
                noWrap
            >
                <MediaQuery minDeviceWidth={768}>
                    <Typography variant='h6' className={classes.page_name}>
                        Play Game
                    </Typography>
                </MediaQuery>
                <Typography
                    className={classes.status_bar}
                    variant="h6"
                    noWrap={true}
                >
                    {getMessage()}
                </Typography>

            </Box>
        </>
    );
}
