import React, {useEffect, useState, memo} from "react";
import {Piece} from "./Piece";
import {boardSizes, sqrSizes} from "../../Reuseables/Board.jss";
import {Portal} from "@material-ui/core";
import {RangeDisplayBoard} from "./RangeDisplayBoard";
import {DndProvider} from "react-dnd";

export const PieceDragPreview = memo(({src, sqrSize, boardSize, range, theme}) => {
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
            <Piece src={src} sqrSize={sqrSize}/>
            <Portal>
                <RangeDisplayBoard
                    range={range}
                    sqrSize={sqrSize}
                    boardSize={boardSize}
                    theme={theme}
                />
            </Portal>
        </>
    )
});
