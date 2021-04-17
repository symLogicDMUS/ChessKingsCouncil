import {deleteStorageAndRefIfCountZero} from "./deleteStorageAndRefIfCountZero";

export function deleteImgsWithNoRef(imgUrls) {
    return Promise.all(
        imgUrls.map(async (imgUrl) => {
            await deleteStorageAndRefIfCountZero(imgUrl);
        })
    )
}