import {decrementImgRefCount} from "./decrementImgRefCount";

export async function decrementImgRefCounts(imgUrlStrs) {
    if (! imgUrlStrs || imgUrlStrs.length===0) {
        return null;
    }
    return Promise.all(
        imgUrlStrs.map(async (imgUrl) => {
            await decrementImgRefCount(imgUrl);
        })
    )
}