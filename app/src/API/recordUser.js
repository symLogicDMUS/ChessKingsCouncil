import * as firebase from "firebase";
import "firebase/database";
import "firebase/auth";

export async function recordUser() {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    const dbRef = firebase.database().ref();
    return await dbRef.child(`users/${uid}`).update({uid});
}