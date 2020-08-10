import {isValid} from "./isValid";
import {isSpace} from "./isSpace";

export function getNameStatus(name) {

    if (name === "")
        return "blank"

    name = name.split("")

    if (! name.every(isValid))
        return "invalid-character"
    
    if (name.every(isSpace))
        return "blank"

    return "valid"

}