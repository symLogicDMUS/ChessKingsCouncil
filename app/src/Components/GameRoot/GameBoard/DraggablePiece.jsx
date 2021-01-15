import React, { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { updatePosition } from "./DraggablePiece.jss";
import { Piece } from "./Piece";

export const DraggablePiece = (props) => {
    const { id, src, left, top, setRangeDisplay } = props;
    let itemType = id.slice(0, 2);
    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: itemType, id, left, top, src },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        begin: (monitor) =>  setRangeDisplay(id),
    });

    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true });
    }, []);

    return (
        <div ref={drag} style={updatePosition(left, top, isDragging)}>
            <Piece src={src} />
        </div>
    );
};
