import React from "react";
import clsx from "clsx";
import {motion} from "framer-motion";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import Typography from "@material-ui/core/Typography";
import { ClickAwayListener, Portal } from "@material-ui/core";
import { resolvePlayerType } from "../../helpers/resolvePlayerType";
import { useStyles as useMoreStyles } from "../GameRoot.jss";
import {DragIndicator} from "@material-ui/icons";
import { useStyles } from "./GameInfo.jss";

export function GameInfo({
    theme,
    gameName,
    gameType,
    playerType,
    toggleMiniVariantTool,
}) {
    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles({ theme: theme });

    const handleClickAway = () => {
        toggleMiniVariantTool("Game-Info");
    };

    return (
        <>
            <MediaQuery maxWidth={960}>
                <Portal>
                    <div className={classes2.modal}>
                        <ClickAwayListener onClickAway={handleClickAway}>
                            <motion.div drag className={classes.game_info_modal}>
                                <Box className={classes.top_area}>
                                    <DragIndicator className={classes.drag_icon} />
                                    <Typography className={classes.caption} variant='caption'>Game Info</Typography>
                                </Box>
                                <Box className={classes.game_info_table}>
                                    <Box
                                        className={clsx(classes.cell, {
                                            [classes.row1]: true,
                                        })}
                                        style={{
                                            gridRow: 1, gridColumn: 1
                                        }}
                                        noWrap
                                    >
                                        <Typography
                                            noWrap
                                            variant='h6'
                                            className={classes.text}
                                        >
                                            Game Name
                                        </Typography>
                                    </Box>
                                    <Box
                                        className={clsx(classes.cell, {
                                            [classes.row2]: true,
                                        })}
                                        style={{
                                            gridRow: 2, gridColumn: 1
                                        }}
                                        noWrap
                                    >
                                        <Typography
                                            noWrap
                                            variant='caption'
                                            className={classes.text}
                                        >
                                            {gameName}
                                        </Typography>
                                    </Box>
                                    <Box
                                        className={clsx(classes.cell, {
                                            [classes.row1]: true,
                                        })}
                                        style={{
                                            gridRow: 1, gridColumn: 2
                                        }}
                                        noWrap
                                    >
                                        <Typography
                                            noWrap
                                            variant='h6'
                                            className={classes.text}
                                        >
                                            Game Type
                                        </Typography>
                                    </Box>
                                    <Box
                                        className={clsx(classes.cell, {
                                            [classes.row2]: true,
                                        })}
                                        style={{
                                            gridRow: 2, gridColumn: 2
                                        }}
                                        noWrap
                                    >
                                        <Typography
                                            noWrap
                                            variant='caption'
                                            className={classes.text}
                                        >
                                            {gameType}
                                        </Typography>
                                    </Box>
                                    <Box
                                        className={clsx(classes.cell, {
                                            [classes.row1]: true,
                                        })}
                                        style={{
                                            gridRow: 1, gridColumn: 3
                                        }}
                                        noWrap
                                    >
                                        <Typography
                                            noWrap
                                            variant='h6'
                                            className={classes.text}
                                        >
                                            Player Type
                                        </Typography>
                                    </Box>
                                    <Box
                                        className={clsx(classes.cell, {
                                            [classes.row2]: true,
                                        })}
                                        style={{
                                            gridRow: 2, gridColumn: 3
                                        }}
                                        noWrap
                                    >
                                        <Typography
                                            noWrap
                                            variant='caption'
                                            className={classes.text}
                                        >
                                            {resolvePlayerType(playerType)}
                                        </Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        </ClickAwayListener>
                    </div>
                </Portal>
            </MediaQuery>
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
