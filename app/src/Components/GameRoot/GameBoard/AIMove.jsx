import React, { useState } from "react";
import { motion } from "framer-motion";
import Box from "@material-ui/core/Box";
import { Portal } from "@material-ui/core";
import { rfToXy, xyToPx } from "./DndCrdCnvrt";
import { useStyles } from "./AIMove.jss";

export function AIMove({
    aiStart,
    aiDest,
    aiMoveComponent,
    parentDispatch,
    piece,
    sqrSize,
    boardSize,
    boardPos,
    theme,
}) {
    const [isAnimating, setIsAnimating] = useState(true);
    const classes = useStyles({
        sqrSize: sqrSize,
        boardSize: boardSize,
        boardPos: boardPos,
        theme: theme,
    });

    const getDestPos = () => {
        const [destX, destY] = rfToXy(aiDest);
        const [destLeft, destTop] = xyToPx(destX, destY, sqrSize);
        return {left: destLeft, top: destTop, duration: 5 };
    };

    return (
        <>
            {isAnimating ? (
                <Portal>
                    <Box className={classes.animation_plane}>
                        <motion.img
                            src={piece.src}
                            className={classes.piece}
                            style={{left: piece.left, top: piece.top }}
                            animate={{ ...getDestPos() }}
                            transition={{ duration: 1 }}
                            onAnimationComplete={() => {
                                setIsAnimating(false);
                                parentDispatch({ type: "ai-finish" });
                                aiMoveComponent(aiStart, aiDest, sqrSize);
                            }}
                        />
                        <Box
                            className={classes.start_sqr}
                            style={{left: piece.left, top: piece.top }}
                        />
                    </Box>
                </Portal>
            ) : null}
        </>
    );
}
