import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Box from "@material-ui/core/Box";
import { ClickAwayListener, Portal } from "@material-ui/core";
import { Close } from "../../Reuseables/Modals/Close";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { MuiButton } from "../../Reuseables/Clickables/MuiButton";
import { useStyles as useMoreStyles } from "../CreatePiece.jss";
import { useStyles } from "./ImgWindowsModal.jss";

export function ImgWindowsModal({
    theme,
    toggleMiniVariantTool,
    isImgButtonsModal,
    children,
}) {
    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles({ theme: theme });

    return (
        <Portal>
            <div className={classes2.modal}>
                {isImgButtonsModal ? (
                    <motion.div drag className={classes.window}>
                        <Box className={classes2.close_area}>
                            <DragIndicatorIcon
                                className={clsx(classes2.icon, {
                                    [classes.draggable_icon]: true,
                                })}
                            />
                            <Close
                                theme={theme}
                                className={classes2.close}
                                iconClassName={classes2.icon}
                                onClick={() => toggleMiniVariantTool("Icon")}
                            />
                        </Box>
                        <Box className={classes.window_area}>{children}</Box>
                    </motion.div>
                ) : (
                    <ClickAwayListener
                        onClickAway={() => toggleMiniVariantTool("Icon")}
                        mouseEvent="onMouseDown"
                        touchEvent="onTouchStart"
                    >
                        <motion.div drag className={classes.window}>
                            <Box className={classes2.close_area}>
                                <DragIndicatorIcon
                                    className={clsx(classes2.icon, {
                                        [classes.draggable_icon]: true,
                                    })}
                                />
                                <Close
                                    theme={theme}
                                    className={classes2.close}
                                    iconClassName={classes2.icon}
                                    onClick={() =>
                                        toggleMiniVariantTool("Icon")
                                    }
                                />
                            </Box>
                            <Box className={classes.window_area}>
                                {children}
                            </Box>
                        </motion.div>
                    </ClickAwayListener>
                )}
            </div>
        </Portal>
    );
}
