import {snapToGrid} from "./snapToGrid";

/**
 * only applies to object being dragged
 * */
export function getSqrDragPositions(initialOffset, currentOffset, sqrSize) {
    if (!initialOffset || !currentOffset) {
        return {
            display: 'none',
        };
    }
    let {x, y} = currentOffset;
    x -= initialOffset.x;
    y -= initialOffset.y;
    [x, y] = snapToGrid(x, y, sqrSize);
    x += initialOffset.x;
    y += initialOffset.y;
    const transform = `translate(${x}px, ${y}px)`;
    return {
        transform,
        WebkitTransform: transform,
    };
}