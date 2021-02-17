/**
 * For media queries, if there is a special case that is true in addition to the basic media queries of desktop vs mobile
 * @param originalCase
 */
import {availHeight, availWidth} from "./windowMeasurments";

export function resolveScreenCase(originalCase) {

    if (availWidth() <= 767 && (availWidth() / availHeight()) <= 0.5) {
        return 'ipx'
    }

    if (availWidth() <= 767 && (availWidth() / availHeight()) >= 0.5 && (availWidth() / availHeight()) <= 1) {
        return 'mobile'
    }

    if (availWidth() >= 768 && availWidth() <= 991 && (availWidth() / availHeight()) <= 1 ) {
        return 'ipad'
    }

    if (availWidth() >= 992 && (availWidth() / availHeight()) > 1) {
        return 'desktop'
    }

    return originalCase;
}