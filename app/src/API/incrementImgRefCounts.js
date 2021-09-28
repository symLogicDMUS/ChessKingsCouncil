import { incrementImgRefCount } from "./incrementImgRefCount";

export async function incrementImgRefCounts(imgUrlStrs) {
    return Promise.all(
        imgUrlStrs.map(async (imgUrl) => {
            await incrementImgRefCount(imgUrl);
        })
    );
}
