/**
 *
 * @param id: should always be a string, is piece id, '#', or 'None'
 * @returns {boolean}
 */
export function isPiece(id) {
    /*return true if id matches piece id pattern, otherwise return false **/
    return (
        id.length === 3 &&
        /(W|B)/.test(id[0]) &&
        /^[A-Z]$/i.test(id[1]) &&
        /^[1-9]$/i.test(id[2])
    );
}
