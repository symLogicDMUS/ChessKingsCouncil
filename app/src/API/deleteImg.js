import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

async function deletePieceImgFromDb(imgName) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return firebase.database().ref().child(`images/${uid}/${imgName}`).remove()
}


export function deleteImg(imgName) {
    return Promise.all([deletePieceImgFromDb(imgName)])
    .catch((err) => {
        console.log(`ERROR: ${err}`)
    })
}