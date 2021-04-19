import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


export async function saveImgUrlsToDb(imgDict) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child(`images/${uid}`).update(imgDict)
    .catch((err) => {
        console.log(`ERROR: ${err}`)
    })
}

export function saveImgUrls(imgDict) {
    return Promise.all([saveImgUrlsToDb(imgDict)])
}