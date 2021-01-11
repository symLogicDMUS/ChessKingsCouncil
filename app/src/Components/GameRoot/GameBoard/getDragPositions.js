import {snapToGrid} from "./snapToGrid";

/**
 * only applies to object being dragged
 * */
export function getDragPositions(initialOffset, currentOffset) {
    if (!initialOffset || !currentOffset) {
        return {
            display: 'none',
        };
    }
    let {x, y} = currentOffset;
    const transform = `translate(${x}px, ${y}px)`;
    return {
        transform,
        WebkitTransform: transform,
    };
}