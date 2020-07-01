import {rotate} from "./rotate";

export function getRotations(spans, theta) {

    spans = spans.map(angle => rotate(angle, theta))

    spans = spans.map(angle => {

        if (angle >= 360)
            angle = angle - 360

        return angle
    })

    spans = spans.map(angle => `${angle}d`)
    
    return spans
}