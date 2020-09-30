import {xOffsetText} from "./xOffsetText";
import {yOffsetText} from "./yOffsetText";


export function offsetToText(offset) {

    return xOffsetText(offset[0]) + yOffsetText(offset[1])

}