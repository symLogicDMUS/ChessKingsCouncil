import * as firebase from "firebase";
import "firebase/storage";
import { sampleImgList } from "./sampleData/sampleImgs";

export async function deleteStorageImg(imgUrl) {
    const storage = firebase.storage();
    if (!sampleImgList.includes(imgUrl)) {
        const httpsReference = storage.refFromURL(imgUrl);
        const response = await httpsReference.delete().catch((err) => {
            console.log(`ERROR: ${err}`);
        });
        const result = await response;
    } else {
        return undefined;
    }
}
