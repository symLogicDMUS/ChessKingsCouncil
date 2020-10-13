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

export function queryUser(pageName) {
    return Promise.all([getDoesUserExistFromDb(pageName)])
}