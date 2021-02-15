import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {resolvePlayerType} from "../../helpers/resolvePlayerType";
import {fontSize002} from "../../styles/fontSizes.jss";
import {useStyles} from "./GameInfo.jss";

export function GameInfo({theme, gameName, gameType, playerType}) {
    const classes = useStyles({theme: theme, fontSize: fontSize002});
    return (
        <Box className={classes.game_info}>
            <Typography className={classes.cell1}>
                Game Name
            </Typography>
            <Typography className={classes.cell2} noWrap>
                {gameName}
            </Typography>
            <Typography className={classes.cell1}>
                Game Type
            </Typography>
            <Typography className={classes.cell2} noWrap>
                {gameType}
            </Typography>
            <Typography className={classes.cell1}>
                Player Type
            </Typography>
            <Typography className={classes.cell2} noWrap>
                {resolvePlayerType(playerType)}
            </Typography>
        </Box>
    );
}
