import React from "react";
import clsx from "clsx";
import { Tooltip } from "@material-ui/core";
import MediaQuery from "react-responsive/src";
import Typography from "@material-ui/core/Typography";
import { resolvePlayerType } from "../../helpers/resolvePlayerType";
import { useStyles } from "./GameInfo.jss";

function GameInfo({ theme, gameName, gameType, playerType }) {
    const classes = useStyles({ theme: theme });

    return (
        <>
            <MediaQuery minWidth={960}>
                <span className={classes.flexbox}>
                    <Tooltip title={"Game Name"}>
                        <Typography
                            variant="caption"
                            className={clsx(classes.cell, {
                                [classes.col1]: true,
                            })}
                            noWrap
                        >
                            Game Name
                        </Typography>
                    </Tooltip>
                    <Tooltip title={gameName}>
                        <Typography
                            variant="caption"
                            className={clsx(classes.cell, {
                                [classes.col2]: true,
                            })}
                            noWrap
                        >
                            {gameName}
                        </Typography>
                    </Tooltip>
                    <Tooltip title={"Game Type"}>
                        <Typography
                            variant="caption"
                            className={clsx(classes.cell, {
                                [classes.col1]: true,
                            })}
                            noWrap
                        >
                            Game Type
                        </Typography>
                    </Tooltip>
                    <Tooltip title={"Game Type"}>
                        <Typography
                            variant="caption"
                            className={clsx(classes.cell, {
                                [classes.col2]: true,
                            })}
                            noWrap
                        >
                            {gameType}
                        </Typography>
                    </Tooltip>
                    <Tooltip title={"Player Type"}>
                        <Typography
                            variant="caption"
                            className={clsx(classes.cell, {
                                [classes.col1]: true,
                            })}
                            noWrap
                        >
                            Player Type
                        </Typography>
                    </Tooltip>
                    <Tooltip title={resolvePlayerType(playerType)}>
                        <Typography
                            variant="caption"
                            className={clsx(classes.cell, {
                                [classes.col2]: true,
                            })}
                            noWrap
                        >
                            {resolvePlayerType(playerType)}
                        </Typography>
                    </Tooltip>
                </span>
            </MediaQuery>
        </>
    );
}

export default GameInfo;
