import { decrementImgRefCount } from "./decrementImgRefCount";

export async function decrementImgRefCounts(imgUrlStrs) {
    return Promise.all(
        imgUrlStrs.map(async (imgUrl) => {
            await decrementImgRefCount(imgUrl);
        })
    );
}
