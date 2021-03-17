import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";
import {intersection} from "../Components/helpers/setOps";
import {deleteImgRefCountsAtZero} from "./deleteImgRefCountsAtZero";
import {updateImgRefCount} from "./updateImgRefCount";
import {mapUrlListCharsToValidKeyChars} from "./mapUrlListCharsToValidKeyChars";

/**
 * when deleting game or piece def
 *
 * @param imgUrlList
 * @returns {Promise<void>}
 */
export async function decrementImgRefCounts(imgUrlList) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    firebase.database().ref(`img_refs/${uid}`).once('value').then( function(snapshot) {
        const imgRefsCounts = snapshot.val();
        const imgUrlListEscaped = mapUrlListCharsToValidKeyChars(imgUrlList) //HERE map imgUrlList argument
        const imgRefOverlappingKeys = Array.from(intersection(new Set(imgUrlListEscaped), new Set(Object.keys(imgRefsCounts))))
        imgRefOverlappingKeys.forEach(imgPath => {
            imgRefsCounts[imgPath] = imgRefsCounts[imgPath] - 1;
        })
        updateImgRefCount(uid, imgRefsCounts).then(r => {
            const imgUrlsWithNoReference = Object.keys(imgRefsCounts).filter(imgUrl =>  imgRefsCounts[imgUrl] === 0)
            return deleteImgRefCountsAtZero(imgUrlsWithNoReference)
        })
    }).catch((error) => {
        console.log('this is the error that occurred:', error)
    });
}