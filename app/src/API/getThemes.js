import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

export async function getThemes() {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase
        .database()
        .ref()
        .child(`themes/${uid}`)
        .once("value")
        .then(async function (snapshot) {
            return await snapshot.val();
        })
        .catch((err) => {
            console.log(`ERROR: ${err}`);
        });
}
