import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

export function saveUrlRefsToDb(imgRefCounts) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return firebase.database().ref().child(`img_refs/${uid}`).update(imgRefCounts)
    .catch((err) => {
        console.log(`ERROR: ${err}`)
    })
}