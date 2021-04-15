import "firebase/storage";
import {deleteStorageImg} from "./deleteStorageImg";

export function deleteStorageImgsWithNoRef(imgPathsWithNoReference) {
    return Promise.all(
        imgPathsWithNoReference.map(async (imgUrl) => {
            await deleteStorageImg(imgUrl);
        })
    )
}