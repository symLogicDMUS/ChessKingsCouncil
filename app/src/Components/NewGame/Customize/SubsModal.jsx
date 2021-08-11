import React from "react";
import clsx from "clsx";
import { SubsList } from "./SubsList";
import { motion } from "framer-motion";
import { useStyles as useMoreStyles } from "../../Reuseables/MiniVariantTool/ToolWindow.jss";
import { useStyles } from "./SubsModal.jss";

function SubsModal({ className, theme, children }) {
    const classes = useStyles({ theme });
    const classes2 = useMoreStyles({ theme });

    const variants = {
        initial: {
            scale: 0,
            top: 0,
            y: 2,
            left: "calc(50vw + 2px)",
        },
        animate: {
            scale: 1,
            top: 48,
            left: 0,
            y: 0,
        },
        exit: {
            scale: 0,
            top: 0,
            y: 2,
            left: "calc(50vw + 2px)",
        },
    };

    return (
        <motion.div
            className={clsx(classes2.window, {
                [classes2.border2]: true,
                [classes.subs_modal]: true,
                [className]: className,
            })}
            variants={variants}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            transition={{ duration: 0.7 }}
            drag
        >
            <SubsList subs={children} theme={theme} />
        </motion.div>
    );
}

export default SubsModal;
