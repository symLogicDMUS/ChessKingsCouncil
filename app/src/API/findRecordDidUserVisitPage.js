import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


async function getDoesUserExistFromDb(pageName) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child('newcomers').child(pageName).child(uid).once('value').then( function(snapshot) {
        return snapshot.exists();
    });
}

async function markAsVisited(pageName) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child('newcomers').child(pageName).update({[uid]: true });
}

export function findDidUserVisitPage(mode, pageName) {
    if (mode === 'production') return Promise.all([getDoesUserExistFromDb(pageName)])
    else return Promise.all([true])
}

export function recordUserVisitedPage(mode, pageName) {
    if (mode === 'production') return Promise.all([markAsVisited(pageName)])
    else return Promise.all([true])
}