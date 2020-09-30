import {getAiColor} from "./getAiColor"


export function getColor(id) {
    /*the first character of an id is the color if it is a piece**/
    return id[0]
}

// module.exports = getColor;