/**
 * For development only
 * @returns {Promise<Response>}
 */
export async function getPieceDefsLocal() {
    return await fetch('/get_defs')
}