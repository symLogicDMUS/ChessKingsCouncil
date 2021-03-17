import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";
import {updateImgRefCounts} from "./updateImgRefCounts";
import {mapUrlCharsToValidKeyChars} from "./mapUrlCharsToValidKeyChars";

/**
 * when saving a piece and you uploaded image for it
 *
 * @param imgUrl
 * @returns {Promise<any[]>}
 */
export async function incrementImgRefCount(imgUrl) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref(`img_refs/${uid}`).once('value').then( function(snapshot) {
        const imgRefCounts = snapshot.val()
        const imgUrlEscaped = mapUrlCharsToValidKeyChars(imgUrl) //HERE map imgUrl argument
        imgRefCounts[imgUrlEscaped] = imgRefCounts[imgUrlEscaped] + 1;
        return Promise.all([updateImgRefCounts(uid, imgRefCounts)])
    })
}