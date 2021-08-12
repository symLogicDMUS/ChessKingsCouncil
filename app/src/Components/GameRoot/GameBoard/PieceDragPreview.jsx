import React, { memo, useEffect, useState } from "react";
import { Piece } from "./Piece";
import { Portal } from "@material-ui/core";
import { RangeDisplayBoard } from "./RangeDisplayBoard";

export const PieceDragPreview = memo(
    ({ src, sqrSize, boardSize, boardPos, range, theme }) => {
        const [tickTock, setTickTock] = useState(false);
        useEffect(
            function subscribeToIntervalTick() {
                const interval = setInterval(() => setTickTock(!tickTock), 500);
                return () => clearInterval(interval);
            },
            [tickTock]
        );
        return (
            <>
                <Piece src={src} sqrSize={sqrSize} />
                <Portal>
                    <RangeDisplayBoard
                        range={range}
                        sqrSize={sqrSize}
                        boardSize={boardSize}
                        boardPos={boardPos}
                        theme={theme}
                    />
                </Portal>
            </>
        );
    }
);
