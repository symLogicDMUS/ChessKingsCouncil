import * as firebase from "firebase";
import "firebase/database";

export async function updateImgRefCount(uid, imgRefCounts) {
    return await firebase.database().ref(`img_refs/${uid}`).update(imgRefCounts)
}