/**
 * For media queries, if there is a special case that is true in addition to the basic media queries of desktop vs mobile
 * @param originalCase
 */
import {innerHeight, availWidth} from "./windowMeasurments";

export function resolveScreenCase(originalCase) {

    let newCase = originalCase;

    if (availWidth() <= 767 && (availWidth() / innerHeight()) <= 0.5) {
        newCase = 'ipx'
    }

    if (availWidth() <= 767 && (availWidth() / innerHeight()) >= 0.5 && (availWidth() / innerHeight()) <= 1) {
        newCase = 'mobile'
    }

    if (availWidth() <= 767 && (availWidth() / innerHeight()) >= 0.7 && (availWidth() / innerHeight()) <= 1) {
        newCase = 'short'
    }

    if (availWidth() >= 768 && availWidth() <= 991 && (availWidth() / innerHeight()) <= 1 ) {
        newCase = 'ipad'
    }

    if (availWidth() >= 992 && (availWidth() / innerHeight()) > 1) {
        newCase = 'desktop'
    }

    return newCase;
}