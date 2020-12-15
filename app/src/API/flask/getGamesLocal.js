/**
 * For  development only
 * @returns {Promise<Response>}
 */
export async function getGamesLocal() {
    let response = await fetch('/get_games')
    return response.json()
}