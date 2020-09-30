import {getAiColor} from "./getAiColor"

export function getNextColor(color) {
    /*get the color of player whos turn it is next**/
    if (color === 'W') {
        return 'B'
    }
    else {
        return 'W'
    }
}

// module.exports = getNextColor;