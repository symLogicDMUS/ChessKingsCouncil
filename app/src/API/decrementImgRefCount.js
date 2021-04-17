import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";
import {mapUrlCharsToValidKeyChars} from "./mapUrlCharsToValidKeyChars";
import {updateImgRefCount} from "./updateImgRefCount";


export async function decrementImgRefCount(imgUrl) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    const imgUrlEscaped = mapUrlCharsToValidKeyChars(imgUrl)
    return await firebase.database().ref(`img_refs/${uid}/${imgUrlEscaped}`).once('value').then(
        async function(snapshot) {
            let count = snapshot.val();
            count = count - 1
            return await updateImgRefCount(imgUrlEscaped, count)
        }
    )
}