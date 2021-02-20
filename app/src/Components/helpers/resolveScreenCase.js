/**
 * For media queries, if there is a special case that is true in addition to the basic media queries of desktop vs mobile
 * @param originalCase
 */
import {availHeight, availWidth} from "./windowMeasurments";

export function resolveScreenCase(originalCase) {

    let newCase = originalCase;

    if (availWidth() <= 767 && (availWidth() / availHeight()) <= 0.5) {
        newCase = 'ipx'
    }

    if (availWidth() <= 767 && (availWidth() / availHeight()) >= 0.5 && (availWidth() / availHeight()) <= 1) {
        newCase = 'mobile'
    }

    if (availWidth() <= 767 && (availWidth() / availHeight()) >= 0.68 && (availWidth() / availHeight()) <= 1) {
        newCase = 'short'
    }

    if (availWidth() >= 768 && availWidth() <= 991 && (availWidth() / availHeight()) <= 1 ) {
        newCase = 'ipad'
    }

    if (availWidth() >= 992 && (availWidth() / availHeight()) > 1) {
        newCase = 'desktop'
    }

    return newCase;
}