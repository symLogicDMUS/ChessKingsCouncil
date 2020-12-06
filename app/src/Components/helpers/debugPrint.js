/**
 * this function is used because it can be easier removed from code (using regular expressions) without removing
 * every console.log statement
 * @param {any} value
 */
export function debugPrint(caption, value) {
    console.log(caption, value)
}