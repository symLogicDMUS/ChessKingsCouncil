import * as firebase from "firebase";
import "firebase/database";

export async function updateImgRefCounts(uid, imgRefCounts) {
    return await firebase.database().ref(`img_refs/${uid}`).update(imgRefCounts)
}