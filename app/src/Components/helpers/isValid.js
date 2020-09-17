import {invalids} from "./invalids";

export function isValid(char) {
    if (invalids.includes(char)) {
        return false
    }
    else {
        return true;
    }
}