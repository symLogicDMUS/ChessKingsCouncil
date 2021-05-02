import React from "react";
import clsx from "clsx";
import {SubList} from "./SubList";
import {motion} from "framer-motion";
import {DragIndicator} from "@material-ui/icons";
import {CloseTool} from "../../Reuseables/Modals/CloseTool";
import { useStyles } from "./CustomizeToolbar.jss";

function SubsModal({toggleMiniVariantTool, onAnimationComplete, variants, drag, className, theme, children}) {

    const classes = useStyles({theme});

    return (
        <div className={classes.modal}>
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
            <span className={classes.top_area}>
                <DragIndicator
                    className={clsx(classes.icon, {
                        [classes.drag_icon]: true,
                    })}
                />
                <CloseTool
                    name="Subs"
                    updateParent={toggleMiniVariantTool}
                    className={classes.close_button}
                    iconClassName={clsx(classes.icon, {
                        [classes.close_icon]: true,
                    })}
                    theme={theme}
                />
            </span>
                <SubList subs={children} theme={theme} />
            </motion.div>
        </div>
    )
}

export default SubsModal;