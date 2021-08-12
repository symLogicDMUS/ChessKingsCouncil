/**
 * returns an object to be used by an inline-styles, that updates the position in px of the piece when it is being dragged
 * @param left (position in px)
 * @param top (position in px)
 * @param isDragging (true or false)
 * @returns {{transform: string, WebkitTransform: string, position: string, opacity: number, height: (number|string)}}
 */
export function updatePosition(left, top, isDragging) {
    const transform = `translate3d(${left}px, ${top}px, 0)`;
    return {
        position: "absolute",
        transform,
        WebkitTransform: transform,
        // IE fallback: hide the real node using CSS when dragging
        // because IE will ignore our custom "empty image" drag preview.
        opacity: isDragging ? 0 : 1,
        height: isDragging ? 0 : "",
    };
}
