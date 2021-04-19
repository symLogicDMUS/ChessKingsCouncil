import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


export async function saveDefsToDb(defs) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child(`defs/${uid}`).update(defs)
    .catch((err) => {
        console.log(`ERROR: ${err}`)
    })
}

export function saveDefs(defs) {
    return Promise.all([saveDefsToDb(defs)])
}