import Color from "../types/Color";

export function getNextColor(color): Color {
    /*get the color of player who's turn it is next**/
    if (color === "W") {
        return "B";
    } else {
        return "W";
    }
}