import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";
import {mapUrlCharsToValidKeyChars} from "./mapUrlCharsToValidKeyChars";
import {updateImgRefCounts} from "./updateImgRefCounts";
import {deleteStorageImg} from "./deleteStorageImg";
import {setImgRefCounts} from "./setImgRefCounts";
import {updateImgRefCount} from "./updateImgRefCount";


export async function decrementIfMatchingUrl(oldImgUrl, newImgUrl) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    const oldImgUrlEscaped = mapUrlCharsToValidKeyChars(oldImgUrl)
    return await firebase.database().ref(`img_refs/${uid}/${oldImgUrlEscaped}`).once('value').then(
        function(snapshot) {
            if (oldImgUrl === newImgUrl) {
                return null;
            }
            let count = snapshot.val();
            count = count - 1
            if (count === 0) {
                deleteStorageImg(oldImgUrl).then(r => {
                    return Promise.all([updateImgRefCount(oldImgUrlEscaped, null)])
                })
            }
            else {
                return Promise.all([updateImgRefCount(oldImgUrlEscaped, count)])
            }
        }
    )
}

export function decrementIfOverride(oldImgUrl, newImgUrl) {
    return Promise.all([decrementIfMatchingUrl(oldImgUrl, newImgUrl)])
}