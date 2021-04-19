import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

async function getDoesUserExistFromDb(pageName) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child(`newcomers/${pageName}/${uid}`).once('value').then(
        function(snapshot) {
            return snapshot.exists();
        }
    )
    .catch((err) => {
        console.log(`ERROR: ${err}`)
    })
}

async function markAsVisited(pageName) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child(`newcomers/${pageName}`).update({[uid]: true })
    .catch((err) => {
        console.log(`ERROR: ${err}`)
    })
}

export function findDidUserVisitPage(pageName) {
    return Promise.all([getDoesUserExistFromDb(pageName)])
    .catch((err) => {
        console.log(`ERROR: ${err}`)
    })
}

export function recordUserVisitedPage(pageName) {
    return Promise.all([markAsVisited(pageName)])
    .catch((err) => {
        console.log(`ERROR: ${err}`)
    })
}