import React, { useEffect } from "react";
import { useDrag } from "react-dnd";
import { Piece } from "./Piece";
import { getEmptyImage } from "react-dnd-html5-backend";
import { updatePosition } from "./DraggablePiece.jss";

export const DraggablePiece = (props) => {
    const { id, src, left, top } = props;
    let itemType = id.slice(0, 2);
    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: itemType, id, left, top, src },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true });
    }, []);

    return (
        <div
            ref={drag}
            style={
                props.isHidden
                    ? { display: "none" }
                    : updatePosition(left, top, isDragging)
            }
        >
            <Piece src={src} alt={id} sqrSize={props.sqrSize} />
        </div>
    );
};
