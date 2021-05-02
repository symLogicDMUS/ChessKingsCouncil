import React from "react";
import clsx from "clsx";
import MediaQuery from "react-responsive/src";
import Typography from "@material-ui/core/Typography";
import { resolvePlayerType } from "../../helpers/resolvePlayerType";
import { useStyles } from "./GameInfo.jss";

function GameInfo({
    theme,
    gameName,
    gameType,
    playerType,
}) {
    const classes = useStyles({ theme: theme });

    return (
        <>
            <MediaQuery minWidth={960}>
                <span className={classes.game_info_flexbox}>
                    <Typography
                        variant="caption"
                        className={clsx(classes.cell, {
                            [classes.col1]: true,
                        })}
                        noWrap
                    >
                        Game Name
                    </Typography>
                    <Typography
                        variant="caption"
                        className={clsx(classes.cell, {
                            [classes.col2]: true,
                        })}
                        noWrap
                    >
                        {gameName}
                    </Typography>
                    <Typography
                        variant="caption"
                        className={clsx(classes.cell, {
                            [classes.col1]: true,
                        })}
                        noWrap
                    >
                        Game Type
                    </Typography>
                    <Typography
                        variant="caption"
                        className={clsx(classes.cell, {
                            [classes.col2]: true,
                        })}
                        noWrap
                    >
                        {gameType}
                    </Typography>
                    <Typography
                        variant="caption"
                        className={clsx(classes.cell, {
                            [classes.col1]: true,
                        })}
                        noWrap
                    >
                        Player Type
                    </Typography>
                    <Typography
                        variant="caption"
                        className={clsx(classes.cell, {
                            [classes.col2]: true,
                        })}
                        noWrap
                    >
                        {resolvePlayerType(playerType)}
                    </Typography>
                </span>
            </MediaQuery>
        </>
    );
}

export default GameInfo;
