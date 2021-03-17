import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";
import {updateImgRefCount} from "./updateImgRefCount";
import {deleteImgRefCountsAtZero} from "./deleteImgRefCountsAtZero";
import {mapUrlCharsToValidKeyChars} from "./mapUrlCharsToValidKeyChars";

/**
 * when deleting an image reference from images show in ImgChoicesModal
 *
 * @param imgUrl
 * @returns {Promise<any[]>}
 */
export async function decrementImgRefCount(imgUrl) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    firebase.database().ref(`img_refs/${uid}`).once('value').then( function(snapshot) {
        const imgRefCounts = snapshot.val();
        const imgUrlEscaped = mapUrlCharsToValidKeyChars(imgUrl) //HERE map imgUrl argument
        imgRefCounts[imgUrlEscaped] = imgRefCounts[imgUrlEscaped] - 1;
        updateImgRefCount(uid, imgRefCounts).then(r => {
            const imgUrlsWithNoReference = Object.keys(imgRefCounts).filter(imgUrl =>  imgRefCounts[imgUrl] === 0)
            return deleteImgRefCountsAtZero(imgUrlsWithNoReference)
        })
    })
}