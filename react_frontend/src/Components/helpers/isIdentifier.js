import {valids} from "../GameRoot/sharedData/valids";

export function isIndentifier(char) {
    
    if (valids.includes(char))
        return true;
    
    return false;
}
