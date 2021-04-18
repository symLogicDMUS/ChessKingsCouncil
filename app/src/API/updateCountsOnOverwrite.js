import {difference} from "./sampleData/devTests/setOps";
import {decrementImgRefCounts} from "./decrementImgRefCounts";
import {incrementImgRefCounts} from "./incrementImgRefCounts";

/**
 * method called when a game or piece profile is saved with the name of a game or piece profile that already exists
 * @param oldImgUrls: image urls that appeared in the old game/profile 1 or more times
 * @param newImgUrls" image urls that appeared in the new game/profile 1 or more times
 * @returns {Promise<unknown[]>}
 */
export async function updateCountsOnOverwrite(oldImgUrls, newImgUrls) {
    const urlsToDecrement = Array.from(
        difference(
            new Set(oldImgUrls),
            new Set(newImgUrls),
        )
    )
    const urlsToIncrement = Array.from(
        difference(
            new Set(newImgUrls),
            new Set(oldImgUrls),
        )
    )
    return await decrementImgRefCounts(urlsToDecrement).then(async r => {
        return await incrementImgRefCounts(urlsToIncrement)
    })
}