import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

export async function queryUserId() {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child(`users/${uid}`).once('value').then(
        async function(snapshot) {
            return snapshot.exists();
        }
    );
}

// export function getDoesUserExists() {
//     return Promise.all([queryUserId()])
// }