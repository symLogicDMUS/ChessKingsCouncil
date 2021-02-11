/**
 * For media queries, if there is a special case that is true in addition to the basic media queries of desktop vs mobile
 * @param originalCase
 */
export function resolveScreenCase(originalCase) {

    /*ipad*/
    if (
        (window.screen.availWidth / window.screen.availHeight).toPrecision(4) === '0.7496'
    ) {
        return 'ipad';
    }

    /*tall phones*/
    if (
        (window.screen.availWidth / window.screen.availHeight) <= 0.5
    ) {
        return 'ipx';
    }

    return originalCase;
}