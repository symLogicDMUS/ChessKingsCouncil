import Color from "../types/Color";

export function getColor(id): Color {
    /*the first character of an id is the color if it is a piece**/
    return id[0];
}