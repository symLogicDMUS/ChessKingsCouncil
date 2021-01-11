import React from "react";
import { useDragLayer } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { PieceDragPreview } from "./PieceDragPreview";
import { getDragPositions } from "./getDragPositions";
import { useStyles } from "./DragLayer.jss";

const DragLayer = () => {
    const {
        itemType,
        isDragging,
        item,
        initialOffset,
        currentOffset,
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
            return <PieceDragPreview src={item.src} />;
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
        </>
    );
};

export default DragLayer;
