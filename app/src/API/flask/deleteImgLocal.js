/**
 * For development only
 * @param imgName
 * @returns {Promise<Response>}
 */
export async function deletePieceImgLocal(imgName) {
    return await fetch('/delete_img', {
        method: 'POST',
        body: JSON.stringify({
            'img_name':imgName
        })
    })
}
