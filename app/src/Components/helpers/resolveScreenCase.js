/**
 * For media queries, if there is a special case that is true in addition to the basic media queries of desktop vs mobile
 * @param originalCase
 */
export function resolveScreenCase(originalCase) {

    /*Iphone X*/
    if (
        (window.screen.availWidth / window.screen.availHeight).toPrecision(4) === '0.4618'
    ) {
        return 'ipx';
    }

    return originalCase;
}