import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";

export async function saveTestDb(testDb) {
    return await firebase.database().ref().set(testDb)
    .catch((err) => {
        console.log(`ERROR: ${err}`)
    })
}