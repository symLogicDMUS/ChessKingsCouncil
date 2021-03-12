import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

async function saveImgToDb(imgName, imgUrl) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child('images').child(uid).update({[imgName]: imgUrl})
}

export function saveImg(imgName, imgUrl) {
    return Promise.all([saveImgToDb(imgName, imgUrl)])
}