import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { CapturedPieceImages } from "./CapturedPieceImages";
import { useStyles as useMoreStyles } from "../../Reuseables/MiniVariantTool/ToolWindow.jss";
import { useStyles } from "./CapturedPiecesModal.jss";

function CapturedPiecesModal({
    defs,
    idDict,
    captured,
    capturedIds,
    gameType,
    theme,
}) {
    const classes = useStyles({ theme });
    const classes2 = useMoreStyles({ theme });

    const variants = {
        initial: {
            scale: 0,
            top: 125,
            y: 25,
            left: "calc(50vw + 6px)",
        },
        animate: {
            scale: 1,
            top: 48,
            y: 0,
            left: 0,
        },
        exit: {
            scale: 0,
            top: 150,
            // y: 25,
            left: "calc(50vw + 6px)",
        },
    };

    return (
        <motion.div
            variants={variants}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            transition={{ duration: 0.7 }}
            className={clsx(classes2.window, {
                [classes.window]: true,
                [classes2.border1]: true,
            })}
            drag
        >
            <CapturedPieceImages
                defs={defs}
                idDict={idDict}
                gameType={gameType}
                captured={captured}
                capturedIds={capturedIds}
                theme={theme}
            />
        </motion.div>
    );
}

export default CapturedPiecesModal;
