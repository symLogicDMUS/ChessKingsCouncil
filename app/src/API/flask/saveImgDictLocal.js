

/**
 * For development only
 * @param imgDict
 * @returns {Promise<Response>}
 */
export async function saveImgDictLocal(imgDict) {
    return await fetch('/save_img_dict', {
        method: 'POST',
        body: JSON.stringify({
            'img_dict': imgDict,
        })
    })
}