import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Portal } from "@material-ui/core";
import { useStyles as useEvenMoreStyles } from "../GameRootToolbar.jss";
import { useStyles as useMoreStyles } from "../../Reuseables/Modals/StandardModal.jss";
import Button from "@material-ui/core/Button";
import {useStyles} from "./ResignModal.jss";


function ResignModal({
    resign,
    toggleMiniVariantTool,
    onAnimationComplete,
    className,
    variants,
    theme,
    drag,
}) {
    const classes = useStyles({theme});
    const classes2 = useMoreStyles({ theme });
    const classes3 = useEvenMoreStyles({ theme });

    const noClick = (e) => {
        toggleMiniVariantTool("Resign", e.clientX, e.clientY)
    };

    const yesClick = (e) => {
        resign()
        toggleMiniVariantTool("Resign", e.clientX, e.clientY)
    };

    return (
        <Portal>
            <div className={classes3.modal}>
                <motion.div
                    className={clsx(classes.window, {
                        [className]: className,
                    })}
                    variants={variants}
                    initial={"initial"}
                    animate={"animate"}
                    exit={"exit"}
                    transition={{ duration: 0.7 }}
                    onAnimationComplete={onAnimationComplete}
                    drag={drag}
                >
                    <span className={classes2.title}>
                        Are you sure you want to resign?
                    </span>
                    <span className={classes.buttons}>
                        <Button
                            variant={"contained"}
                            className={clsx(classes.button, {
                                [classes.yes_button]: true,
                            })}
                            onClick={yesClick}
                        >
                            Yes
                        </Button>
                        <Button
                            variant={"contained"}
                            className={clsx(classes.button, {
                                [classes.no_button]: true,
                            })}
                            onClick={noClick}
                        >
                            No
                        </Button>
                    </span>
                </motion.div>
            </div>
        </Portal>
    );
}

export default ResignModal;
