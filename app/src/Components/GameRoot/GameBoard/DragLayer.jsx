import React, { useEffect } from "react";
import { useDragLayer } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { PieceDragPreview } from "./PieceDragPreview";
import { getDragPositions } from "./getDragPositions";
import { SqrMouseIsOver } from "./SqrMouseIsOver";
import { Portal } from "@material-ui/core";
import { useStyles } from "./DragLayer.jss";

const DragLayer = ({
    gameRoot,
    sqrSize,
    boardSize,
    boardPos,
    theme,
}) => {
    const {
        item,
        itemType,
        initialOffset,
        currentOffset,
        isDragging,
    } = useDragLayer((monitor) => ({
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging(),
    }));

    const classes = useStyles();

    function renderPieceBeingDragged() {
        if (ItemTypes.includes(itemType)) {
            return (
                <PieceDragPreview
                    src={item.src}
                    sqrSize={sqrSize}
                    boardSize={boardSize}
                    boardPos={boardPos}
                    range={gameRoot.ranges[item.id]}
                    theme={theme}
                />
            );
        } else {
            return null;
        }
    }

    if (!isDragging) {
        return null;
    }

    return (
        <>
            <div className={classes.custom_drag_layer}>
                <div style={getDragPositions(initialOffset, currentOffset)}>
                    {renderPieceBeingDragged()}
                </div>
            </div>
            <Portal>
                <SqrMouseIsOver
                    theme={theme}
                    sqrSize={sqrSize}
                    boardPos={boardPos}
                    currentOffset={currentOffset}
                />
            </Portal>
        </>
    );
};

export default DragLayer;
