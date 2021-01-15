import React, { useEffect, useState, memo } from "react";
import { Piece } from "./Piece";

export const PieceDragPreview = memo(({ src }) => {
    const [tickTock, setTickTock] = useState(false);
    useEffect(
        function subscribeToIntervalTick() {
            const interval = setInterval(() => setTickTock(!tickTock), 500);
            return () => clearInterval(interval);
        },
        [tickTock]
    );
    return <Piece src={src} />
});
