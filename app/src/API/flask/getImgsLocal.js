/**
 * For development only
 * @returns {Promise<Response>}
 */
export async function getImagesLocal() {
    return await fetch('/get_imgs')
}