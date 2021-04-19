import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import {testUserImgs} from "./testUserImgs"
import {getSetDownloadUrl} from "./getSetDownloadUrl";

export async function saveDownloadUrls() {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return Promise.all(
        testUserImgs.map(async (fileName) => {
            await getSetDownloadUrl(fileName, uid);
        })
    )
    .catch((err) => {
        console.log(`ERROR: ${err}`)
    })
}