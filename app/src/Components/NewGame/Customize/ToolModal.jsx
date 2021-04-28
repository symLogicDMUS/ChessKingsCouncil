import React, { useState } from "react";
import clsx from "clsx";
import { ClickAwayListener, Portal } from "@material-ui/core";
import { AnimatePresence, motion } from "framer-motion";
import { DragIndicator } from "@material-ui/icons";
import { Close } from "../../Reuseables/Modals/Close";
import { useStyles } from "./ToolModal.jss";

export function ToolModal({
    toggleMiniVariantTool,
    isIn,
    name,
    clientX,
    clientY,
    className,
    children,
    theme,
}) {
    const [drag, setDrag] = useState(false);

    const classes = useStyles({ theme: theme });

    const variants = {
        initial: {
            scale: 0,
            left: clientX,
            top: clientY,
        },
        animate: {
            scale: 1,
            left: 0,
            top: 48,
        },
        exit: {
            scale: 0,
            left: clientX,
            top: clientY,
        },
    };

    const onClose = (e) => {
        toggleMiniVariantTool(name, e.clientX, e.clientY)
    };

    return (
        <Portal>
            <AnimatePresence>
                {isIn && (
                    <div className={classes.modal}>
                        <ClickAwayListener
                            onClickAway={onClose}
                            mouseEvent="onMouseDown"
                            touchEvent="onTouchStart"
                        >
                            <motion.div
                                className={clsx(classes.window, {
                                    [className]: className,
                                })}
                                variants={variants}
                                initial={"initial"}
                                animate={"animate"}
                                exit={"exit"}
                                transition={{ duration: 0.7 }}
                                onAnimationComplete={() => setDrag(true)}
                                drag={drag}
                            >
                                <span className={classes.top_area}>
                                    <DragIndicator
                                        className={clsx(classes.icon, {
                                            [classes.drag_icon]: true,
                                        })}
                                    />
                                    <Close
                                        onClick={onClose}
                                        theme={theme}
                                        className={classes.close_button}
                                        iconClassName={clsx(classes.icon, {
                                            [classes.close_icon]: true,
                                        })}
                                    />
                                </span>
                                {children}
                            </motion.div>
                        </ClickAwayListener>
                    </div>
                )}
            </AnimatePresence>
        </Portal>
    );
}
