import React, { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { DragIndicator } from "@material-ui/icons";
import { Close } from "../Reuseables/Modals/Close";

export function ToolModal({
    toggleMiniVariantTool,
    name,
    variants,
    className,
    children,
    theme,
}) {
    const [drag, setDrag] = useState(false);

    const classes = useStyles({ theme: theme });

    const onClose = (e) => {
        toggleMiniVariantTool(name, e.clientX, e.clientY);
    };

    return (
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
                    theme={theme}
                    onClick={onClose}
                    className={classes.close_button}
                    iconClassName={clsx(classes.icon, {
                        [classes.close_icon]: true,
                    })}
                />
            </span>
            {children}
        </motion.div>
    );
}
