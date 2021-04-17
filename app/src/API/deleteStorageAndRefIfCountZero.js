import * as firebase from "firebase";
import "firebase/database";
import {mapUrlCharsToValidKeyChars} from "./mapUrlCharsToValidKeyChars";
import {deleteStorageImg} from "./deleteStorageImg";
import {updateImgRefCount} from "./updateImgRefCount";

export async function deleteStorageAndRefIfCountZero(imgUrl) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    const imgUrlEscaped = mapUrlCharsToValidKeyChars(imgUrl)
    return await firebase.database().ref(`/img_refs/${uid}/${imgUrlEscaped}`).once('value').then(function (snapshot) {
        const count = snapshot.val()
        if (count === 0) {
            deleteStorageImg(imgUrl).then(r => {
                return Promise.all([updateImgRefCount(imgUrlEscaped, null)])
            })
        } else {
            return null;
        }
    })
}