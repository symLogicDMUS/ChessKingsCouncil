import * as firebase from "firebase";
import "firebase/database";
import "firebase/auth";

export async function getGameImgUrlStrs(gameName) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase
        .database()
        .ref()
        .child(`/games/${uid}/${gameName}/imgUrlStrs`)
        .once("value")
        .then(function (snapshot) {
            let imgUrlStrs;
            if (!snapshot.val()) {
                imgUrlStrs = [];
            } else {
                imgUrlStrs = snapshot.val();
            }
            return imgUrlStrs;
        });
}
