import React from "react";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { capitalize } from "../../helpers/capitalize";
import { resolvePlayerType } from "../../helpers/resolvePlayerType";
import { getOppositeColorName } from "../../helpers/getOppositeColorName";
import SignInOutButton from "../../Home/SignInOutButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {marginLeft, useStyles} from "./StatusBar.jss";

function StatusBar({ turn, winner, condition, onChange, theme }) {

    const classes = useStyles({theme: theme});

    const lg = useMediaQuery("(min-width:960px)");

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
        <>
            <Box className={classes.status}>
                <Typography
                    variant="h6"
                    noWrap={true}
                    className={classes.text}
                >
                    {getMessage()}
                </Typography>
            </Box>
            <Box className={classes.statusBar}>
                <SignInOutButton theme={theme} style={marginLeft}/>
            </Box>
        </>
    );
}

export default StatusBar;