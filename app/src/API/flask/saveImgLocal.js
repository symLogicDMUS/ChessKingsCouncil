/**
 * For development only
 * @param imgName
 * @param imgBase64Str
 * @returns {Promise<Response>}
 */
export async function saveImgLocal(imgName, imgBase64Str) {
    return await fetch('/save_img', {
        method: 'POST',
        body: JSON.stringify({
            'img_name': imgName,
            'img_str': imgBase64Str,
        })
    })
}