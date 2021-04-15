import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import {getDoesImgUrlExistInDb} from "./getDoesImgUrlExist";
import {mapUrlCharsToValidKeyChars} from "./mapUrlCharsToValidKeyChars";

/**
*  A workaround for when every saved reference to a image URL has been deleted, but the URL had already been loaded into
*  a img tag or other component. Can occur on the CreatePiece page when using the Load modal to delete record of same
*  piece who's data has been loaded and displayed. Initializes count to 0 instead of 1 because assumed that this method
*  is called immediately before the increment of a count. (To prevent a key-does-not-exist error).
* */
export async function setRefIfNotExists(imgUrl) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    getDoesImgUrlExistInDb(imgUrl).then(doesExist => {
        if (! doesExist) {
            const imgUrlEscaped = mapUrlCharsToValidKeyChars(imgUrl)
            firebase.database().ref().child(`/img_refs/${uid}`).update({[imgUrlEscaped]: 0}).then(r => {
                return null;
            })
        }
        else {
            return null;
        }
    })
}