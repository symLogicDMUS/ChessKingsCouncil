import React from "react";
import clsx from "clsx";
import {motion} from "framer-motion";
import {DragIndicator} from "@material-ui/icons";
import {ListTitle} from "./ListTitle";
import {CloseTool} from "../../Reuseables/Modals/CloseTool";
import ScrollTable from "../../Reuseables/ScrollTable/ScrollTable";
import { useStyles } from "./CustomizeToolbar.jss";

function PromosModal({toggleMiniVariantTool, onAnimationComplete, variants, drag, className,  theme, children}) {

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
                    name="Promos"
                    updateParent={toggleMiniVariantTool}
                    className={classes.close_button}
                    iconClassName={clsx(classes.icon, {
                        [classes.close_icon]: true,
                    })}
                    theme={theme}
                />
            </span>
                <ScrollTable
                    numRows={6}
                    theme={theme}
                    key="pawn-promotions-wide"
                    className={classes.scroll_table}
                    addedClassName={classes.drawer_component}
                    listItemClassName={
                        classes.scroll_table_list_item
                    }
                    arrowButtonClassName={
                        classes.scroll_table_button
                    }
                    textClassName={classes.scroll_table_text}
                    title={
                        <ListTitle
                            className={
                                classes.scroll_table_title
                            }
                            variant="h6"
                            theme={theme}
                        >
                            Pawn Promotions
                        </ListTitle>
                    }
                >
                    {children}
                </ScrollTable>
            </motion.div>
        </div>
    )
}

export default PromosModal;