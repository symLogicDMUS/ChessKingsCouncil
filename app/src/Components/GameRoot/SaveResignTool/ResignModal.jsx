import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useStyles as useMoreStyles } from "../../Reuseables/Modals/StandardModal.jss";
import Button from "@material-ui/core/Button";
import { useStyles } from "./ResignModal.jss";

function ResignModal({ resign, toggleMiniVariantTool, className, theme }) {
    const classes = useStyles({ theme });
    const classes2 = useMoreStyles({ theme });

    const variants = {
        initial: {
            scale: 0,
            top: 0,
            y: 48,
            left: "calc(50vw + 12px)",
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
            left: "calc(50vw + 12px)",
        },
    };

    const noClick = () => {
        toggleMiniVariantTool("Resign");
    };

    const yesClick = () => {
        resign();
        toggleMiniVariantTool("Resign");
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
            drag
        >
            <span className={classes2.title}>
                Are you sure you want to resign?
            </span>
            <span className={classes.buttons}>
                <Button
                    variant={"text"}
                    className={clsx(classes.button, {
                        [classes.secondary]: true,
                    })}
                    onClick={yesClick}
                >
                    Resign
                </Button>
                <Button
                    variant={"contained"}
                    className={clsx(classes.button, {
                        [classes.primary]: true,
                    })}
                    onClick={noClick}
                >
                    Cancel
                </Button>
            </span>
        </motion.div>
    );
}

export default ResignModal;
