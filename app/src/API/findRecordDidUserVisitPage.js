import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


async function getDoesUserExistFromDb(pageName) {
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    return await firebase.database().ref().child('newcomers').child(pageName).child(uid).once('value').then( function(snapshot) {
        if (snapshot.exists()){
          return true
        }
        else {
            return false;
        }
    });
}

async function markAsVisited(pageName) {
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    return await firebase.database().ref().child('newcomers').child(pageName).update({[uid]: true });
}

export function findDidUserVisitPage(pageName) {
    return Promise.all([getDoesUserExistFromDb(pageName)])
}

export function recordUserVisitedPage(pageName) {
    return Promise.all([markAsVisited(pageName)])
}