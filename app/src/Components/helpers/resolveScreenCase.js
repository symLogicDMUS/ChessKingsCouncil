/**
 * For media queries, if there is a special case that is true in addition to the basic media queries of desktop vs mobile
 * @param originalCase
 */
export function resolveScreenCase(originalCase) {

    /*tall phones*/
    if (
        (window.screen.availWidth / window.screen.availHeight) <= 0.5
    ) {
        return 'ipx';
    }

    /*tablets*/
    if (
        (window.screen.availWidth / window.screen.availHeight) >= 0.75
        && (window.screen.availWidth / window.screen.availHeight) < 1
    ) {
        return 'ipad';
    }

    return originalCase;
}