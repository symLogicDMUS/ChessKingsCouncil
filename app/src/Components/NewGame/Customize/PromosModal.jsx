import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { ListTitle } from "./ListTitle";
import { useStyles as useMoreStyles } from "../../Reuseables/MiniVariantTool/ToolWindow.jss";
import { useStyles } from "./PromosModal.jss";

const ScrollTable = React.lazy(() =>
    import("../../Reuseables/ScrollTable/ScrollTable")
);

function PromosModal({ className, theme, children }) {
    const classes = useStyles({ theme });
    const classes2 = useMoreStyles({ theme });
    const variants = {
        initial: {
            scale: 0,
            top: 0,
            y: 6,
            left: "calc(50vw + 2px)",
        },
        animate: {
            scale: 1,
            top: 48,
            y: 0,
            left: 0,
        },
        exit: {
            scale: 0,
            top: 0,
            y: 6,
            left: "calc(50vw + 2px)",
        },
    };

    return (
        <motion.div
            className={clsx(classes2.window, {
                [classes2.border2]: true,
                [className]: className,
            })}
            variants={variants}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            transition={{ duration: 0.7 }}
            drag
        >
            <ScrollTable
                numRows={6}
                theme={theme}
                key="pawn-promotions-wide"
                className={classes.scroll_table}
                addedClassName={classes.drawer_component}
                listItemClassName={classes.scroll_table_list_item}
                arrowButtonClassName={classes.scroll_table_button}
                arrowButtonTopClassName={classes.top_button}
                arrowButtonBottomClassName={classes.bottom_button}
                textClassName={classes.scroll_table_text}
                title={
                    <ListTitle
                        className={classes.scroll_table_title}
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
    );
}

export default PromosModal;
