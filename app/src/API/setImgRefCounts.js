import * as firebase from "firebase";
import "firebase/database";

export async function setImgRefCounts(imgRefCounts) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref(`img_refs/${uid}`).set(imgRefCounts)
}