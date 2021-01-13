/**
 * hard coded values for part of app not currently focused on during development. Use when convenient.
 * @returns {[]}
 */
export function getPangram() {
    const sentences = [];
    for (let index = 0; index < 7; index++) {
        sentences.push("The quick brown fox jumps over the lazy dog.");
    }
    return sentences;
}