import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


async function getImagesFromDb() {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child(`images/${uid}`).once('value').then(
        function(snapshot) {
            return snapshot.val();
        }
    )
}

export function getImgDict() {
    return Promise.all([getImagesFromDb()])
}