import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

async function addUser() {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase
        .database()
        .ref()
        .child("users")
        .update({
            [uid]: true,
        })
        .catch((err) => {
            console.log(`ERROR: ${err}`);
        });
}

export function saveUser() {
    return Promise.all([addUser()]);
}
