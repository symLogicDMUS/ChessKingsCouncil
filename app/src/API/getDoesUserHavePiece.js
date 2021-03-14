import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

async function getDoesUserHavePiece() {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child('defs').child(uid).once('value').then( function(snapshot) {
        return snapshot.exists();
    });
}