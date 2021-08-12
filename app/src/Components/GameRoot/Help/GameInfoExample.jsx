import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../GameInfo/GameInfo.jss";

export function GameInfoExample({ theme }) {
    const classes = useStyles({ theme: theme });
    return (
        <Box className={classes.game_info}>
            <Typography className={classes.cell1}>Game Name</Typography>
            <Typography className={classes.cell2} noWrap>
                My Custom Game
            </Typography>
            <Typography className={classes.cell1}>Game Type</Typography>
            <Typography className={classes.cell2} noWrap>
                Custom
            </Typography>
            <Typography className={classes.cell1}>Player Type</Typography>
            <Typography className={classes.cell2} noWrap>
                White
            </Typography>
        </Box>
    );
}
