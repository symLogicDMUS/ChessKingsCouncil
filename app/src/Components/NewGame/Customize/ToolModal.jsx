import React, { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { ClickAwayListener, Portal, Slide } from "@material-ui/core";
import { DragIndicator } from "@material-ui/icons";
import { Close } from "../../Reuseables/Modals/Close";
import { useStyles } from "./ToolModal.jss";

export function ToolModal({
    isIn,
    onClose,
    onExit,
    theme,
    direction,
    className,
    children,
}) {
    // const [drag, setDrag] = useState(false);

    const classes = useStyles({ theme: theme });

    return (
        <Portal>
            <ClickAwayListener
                onClickAway={onClose}
                mouseEvent="onMouseDown"
                touchEvent="onTouchStart"
            >
                <Slide
                    in={isIn}
                    mountOnEnter
                    unmountOnExit
                    onExit={onExit}
                    // onEnter={() => setDrag(true)}
                    direction={direction}
                >
                    <motion.div
                        // drag={drag}
                        className={clsx(classes.window, {
                            [className]: className,
                        })}
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
                </Slide>
            </ClickAwayListener>
        </Portal>
    );
}
