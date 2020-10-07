import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


async function getImagesFromDb() {
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    return await firebase.database().ref().child('images').child(uid).once('value').then( function(snapshot) {
        var images = snapshot.val()
        return images;    
    })
}

export function getImgDict() {
    return Promise.all([getImagesFromDb()])
}