import React from "react";
import { pxPosToXy, xyToPx } from "./DndCrdCnvrt";
import { useStyles } from "./SqrMouseIsOver.jss";

export function SqrMouseIsOver({ theme, sqrSize, boardPos, currentOffset }) {
    const getNewPos = () => {
        let [x, y] = pxPosToXy(
            currentOffset.x - boardPos.left,
            currentOffset.y - boardPos.top,
            sqrSize
        );
        let [newLeft, newTop] = xyToPx(x, y, sqrSize);
        return { left: boardPos.left + newLeft, top: boardPos.top + newTop };
    };

    const classes = useStyles({ sqrSize: sqrSize, theme: theme });

    return (
        <>
            {currentOffset && (
                <div className={classes.square} style={{ ...getNewPos() }} />
            )}
        </>
    );
}
