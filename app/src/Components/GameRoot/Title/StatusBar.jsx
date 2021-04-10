import React from "react";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import MediaQuery from "react-responsive/src";
import { capitalize } from "../../helpers/capitalize";
import { resolvePlayerType } from "../../helpers/resolvePlayerType";
import { getOppositeColorName } from "../../helpers/getOppositeColorName";
import {MuiSwitch} from "../../Reuseables/Clickables/MuiSwitch";
import {RangeAnalysisSwitch} from "./RangeAnalysisSwitch";
import {Adjuster} from "../../Reuseables/AppBar/Adjuster";
import { useStyles } from "./StatusBar.jss";

export function StatusBar({ turn, winner, condition, onChange, theme }) {

    const classes = useStyles({theme: theme});

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
            <MediaQuery maxWidth={960}>
                <Box className={classes.statusBarSm}>
                    <Box className={classes.statusMessage}>
                        <Adjuster>
                            <Typography className={classes.statusTextSm}>
                                Range Analysis
                            </Typography>
                        </Adjuster>
                        <Typography className={classes.statusTextSm} variant='h6'>
                            {getMessage()}
                        </Typography>
                    </Box>
                    <MuiSwitch
                        theme={theme}
                        control={<RangeAnalysisSwitch theme={theme} onChange={onChange} />}
                        className={classes.rangeAnalysisSwitch}
                        labelPlacement={'start'}
                    >
                        Range Analysis
                    </MuiSwitch>
                </Box>
            </MediaQuery>
            <MediaQuery minWidth={960}>
                <Typography
                    variant="h6"
                    noWrap={true}
                    className={classes.statusBarLg}
                >
                    {getMessage()}
                </Typography>
            </MediaQuery>
        </>
    );
}
