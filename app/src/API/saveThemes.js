import * as firebase from "firebase";

export async function saveThemes(themes) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase
        .database()
        .ref()
        .child(`themes/${uid}`)
        .set(themes)
        .catch((err) => {
            console.log(`ERROR: ${err}`);
        });
}
