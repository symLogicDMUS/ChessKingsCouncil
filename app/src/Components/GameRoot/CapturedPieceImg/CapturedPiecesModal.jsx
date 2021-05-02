import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { DragIndicator } from "@material-ui/icons";
import { CloseTool } from "../../Reuseables/Modals/CloseTool";
import { CapturedPieceImages } from "./CapturedPieceImages";
import { useStyles as useMoreStyles } from "../GameRootToolbar.jss";
import { useStyles } from "./CapturedPiecesModal.jss";

function CapturedPiecesModal({
    defs,
    idDict,
    captured,
    capturedIds,
    gameType,
    toggleMiniVariantTool,
    onAnimationComplete,
    variants,
    drag,
    theme,
}) {
    const classes = useStyles({theme});
    const classes2 = useMoreStyles({ theme });

    return (
        <div className={classes2.modal}>
            <motion.div
                className={clsx(classes2.window, {
                    [classes.captured_piece_images_modal]: true,
                })}
                variants={variants}
                initial={"initial"}
                animate={"animate"}
                exit={"exit"}
                transition={{ duration: 0.7 }}
                onAnimationComplete={onAnimationComplete}
                drag={drag}
            >
                <span className={classes2.top_area}>
                    <DragIndicator
                        className={clsx(classes2.icon, {
                            [classes2.drag_icon]: true,
                        })}
                    />
                    <CloseTool
                        name="Subs"
                        updateParent={toggleMiniVariantTool}
                        className={classes2.close_button}
                        iconClassName={clsx(classes2.icon, {
                            [classes2.close_icon]: true,
                        })}
                        theme={theme}
                    />
                </span>
                <CapturedPieceImages
                    defs={defs}
                    idDict={idDict}
                    gameType={gameType}
                    captured={captured}
                    capturedIds={capturedIds}
                    toggleMiniVariantTool={toggleMiniVariantTool}
                    theme={theme}
                />
            </motion.div>
        </div>
    );
}

export default CapturedPiecesModal;
