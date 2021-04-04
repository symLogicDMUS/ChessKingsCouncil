import React from "react";
import {motion} from "framer-motion";
import Box from "@material-ui/core/Box";
import {ClickAwayListener, Portal} from "@material-ui/core";
import {DragIndicator} from "@material-ui/icons";
import { useStyles } from "./ToolModal.jss";

export function ToolModal({theme, onClose, children}) {
    const classes = useStyles({theme});
    return (
        <Portal>
            <div className={classes.modal}>
                <ClickAwayListener onClickAway={onClose}
                   mouseEvent="onMouseDown"
                   touchEvent="onTouchStart"
                >
                    <motion.div drag className={classes.window}>
                        <span className={classes.top_area}>
                            <DragIndicator className={classes.drag_icon} />
                        </span>
                        <Box className={classes.content_area}>{children}</Box>
                    </motion.div>
                </ClickAwayListener>
            </div>
        </Portal>
    );
}