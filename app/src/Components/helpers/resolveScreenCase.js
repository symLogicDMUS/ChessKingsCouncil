/**
 * For media queries, if there is a special case that is true in addition to the basic media queries of desktop vs mobile
 * @param originalCase
 */
export function resolveScreenCase(originalCase) {

    /*tall phones*/
    if (
        (window.window.innerWidth / window.window.innerHeight) <= 0.6
    ) {
        return 'ipx';
    }

    /*tablets*/
    if (
        (window.window.innerWidth / window.window.innerHeight) >= 0.69
        && (window.window.innerWidth / window.window.innerHeight) < 1
    ) {
        return 'ipad';
    }

    return originalCase;
}