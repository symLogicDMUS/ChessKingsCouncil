import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Box from "@material-ui/core/Box";
import { DragIndicator } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { CloseTool } from "../../Reuseables/Modals/CloseTool";
import { resolvePlayerType } from "../../helpers/resolvePlayerType";
import { useStyles as useMoreStyles } from "../GameRootToolbar.jss";
import { useStyles } from "./GameInfo.jss";

function GameInfoModal({
    toggleMiniVariantTool,
    onAnimationComplete,
    variants,
    drag,
    theme,
    gameName,
    gameType,
    playerType
}) {
    const classes = useStyles({theme: theme})
    const classes2 = useMoreStyles({ theme });

    return (
        <div className={classes2.modal}>
            <motion.div
                className={classes2.window}
                variants={variants}
                initial={"initial"}
                animate={"animate"}
                exit={"exit"}
                transition={{ duration: 0.7 }}
                onAnimationComplete={onAnimationComplete}
                drag={drag}
            >
                <span className={classes2.top_area}>
                    <DragIndicator
                        className={clsx(classes2.icon, {
                            [classes2.drag_icon]: true,
                        })}
                    />
                    <Typography className={classes.caption} variant="caption">
                        Game Info
                    </Typography>
                    <CloseTool
                        name="Game-Info"
                        updateParent={toggleMiniVariantTool}
                        className={classes2.close_button}
                        iconClassName={clsx(classes2.icon, {
                            [classes2.close_icon]: true,
                        })}
                        theme={theme}
                    />
                </span>
                <Box className={classes.game_info_table}>
                    <Box
                        className={clsx(classes.cell, {
                            [classes.row1]: true,
                        })}
                        style={{
                            gridRow: 1,
                            gridColumn: 1,
                        }}
                        noWrap
                    >
                        <Typography
                            noWrap
                            variant="h6"
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
                            gridRow: 2,
                            gridColumn: 1,
                        }}
                        noWrap
                    >
                        <Typography
                            noWrap
                            variant="caption"
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
                            gridRow: 1,
                            gridColumn: 2,
                        }}
                        noWrap
                    >
                        <Typography
                            noWrap
                            variant="h6"
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
                            gridRow: 2,
                            gridColumn: 2,
                        }}
                        noWrap
                    >
                        <Typography
                            noWrap
                            variant="caption"
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
                            gridRow: 1,
                            gridColumn: 3,
                        }}
                        noWrap
                    >
                        <Typography
                            noWrap
                            variant="h6"
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
                            gridRow: 2,
                            gridColumn: 3,
                        }}
                        noWrap
                    >
                        <Typography
                            noWrap
                            variant="caption"
                            className={classes.text}
                        >
                            {resolvePlayerType(playerType)}
                        </Typography>
                    </Box>
                </Box>
            </motion.div>
        </div>
    );
}

export default GameInfoModal;
