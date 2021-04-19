import * as firebase from "firebase";
import "firebase/storage";
import {sampleUrlList} from "./sampleData/sampleImgUrls/dev1";

export async function deleteStorageImg(imgUrl) {
    const storage = firebase.storage();
    if (!sampleUrlList.includes(imgUrl)) {
        const httpsReference = storage.refFromURL(imgUrl);
        const response = await httpsReference.delete().catch((err) => {
            console.log(`ERROR: ${err}`)
        })
        const result = await response;
    }
    else {
        return undefined;
    }
}