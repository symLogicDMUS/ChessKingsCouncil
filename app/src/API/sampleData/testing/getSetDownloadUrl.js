import * as firebase from "firebase";
import "firebase/storage";
import "firebase/database";

export async function getSetDownloadUrl(fileName, uid) {
    const imgName = fileName.replace('.', '-')
    return await firebase.storage().ref(`users/images/${uid}/${fileName}`).getDownloadURL().then(async url => {
        return await firebase.database().ref(`/test-source`).update({[imgName]: url})
    })
    .catch((err) => {
        console.log(`ERROR: ${err}`)
    })
}