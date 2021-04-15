import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";
import {updateImgRefCounts} from "./updateImgRefCounts";
import {mapUrlCharsToValidKeyChars} from "./mapUrlCharsToValidKeyChars";
import {updateImgRefCount} from "./updateImgRefCount";

/**
 * when saving a piece and you uploaded image for it
 *
 * @param imgUrl
 * @returns {Promise<any[]>}
 */
export async function incrementImgRefCount(imgUrl) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    const imgUrlEscaped = mapUrlCharsToValidKeyChars(imgUrl)
    return await firebase.database().ref(`img_refs/${uid}/${imgUrlEscaped}`).once('value').then(
        function(snapshot) {
            let count = snapshot.val()
            count = count + 1;
            return Promise.all([updateImgRefCount(imgUrlEscaped, count)])
        }
    )
}