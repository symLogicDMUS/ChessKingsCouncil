import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";
import { mapUrlCharsToValidKeyChars } from "./mapUrlCharsToValidKeyChars";

export async function incrementImgRefCount(imgUrl) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    const imgUrlEscaped = mapUrlCharsToValidKeyChars(imgUrl);
    const updates = {};
    updates[`img_refs/${uid}/${imgUrlEscaped}`] =
        firebase.database.ServerValue.increment(1);
    return await firebase.database().ref().update(updates);
}
