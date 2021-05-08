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
import {SeeMore} from "../../Reuseables/UserInput/SeeMore";
import { useStyles } from "./StatusBar.jss";
import SignInOutButton from "../../Home/SignInOutButton";

function StatusBar({ turn, winner, condition, onChange, isRangeAnalysis, theme }) {

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
                <MediaQuery maxWidth={960}>
                    <SeeMore theme={theme} className={classes.range_analysis_switch}>
                        <MuiSwitch
                            theme={theme}
                            control={<RangeAnalysisSwitch theme={theme} onChange={onChange} />}
                            labelPlacement={'start'}
                        >
                            Range Analysis
                        </MuiSwitch>
                    </SeeMore>
                </MediaQuery>
                <SignInOutButton theme={theme} className={classes.signOut}/>
            </Box>
        </>
    );
}

export default StatusBar;