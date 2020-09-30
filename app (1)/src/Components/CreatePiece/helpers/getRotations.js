import {rotate} from  "./rotate";


export function getRotations(spans, theta) {
    spans = spans.map(angle => rotate(angle, theta))    
    return spans;
}

