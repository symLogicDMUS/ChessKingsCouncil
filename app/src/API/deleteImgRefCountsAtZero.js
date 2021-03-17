import * as firebase from "firebase";
import "firebase/storage";
import {sampleUrlList} from "./apiHelpers/sampleImgUrls/dev1";

export function deleteImgRefCountsAtZero(imgPathsWithNoReference) {
    const storage = firebase.storage(); //var to const
    //HERE map imgPathsWithNoReference back to regular urls
    return Promise.all(
        imgPathsWithNoReference.map(async (imgUrl) => {
            if (!sampleUrlList.includes(imgUrl)) {
                const httpsReference = storage.refFromURL(imgUrl);
                const response = await httpsReference.delete()
                const result = await response.json()
                console.log(result)
            }
        })
    )
}