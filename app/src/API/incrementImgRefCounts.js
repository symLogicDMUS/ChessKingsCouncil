import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";
import {intersection} from "../Components/helpers/setOps";
import {updateImgRefCounts} from "./updateImgRefCounts";
import {mapUrlListCharsToValidKeyChars} from "./mapUrlListCharsToValidKeyChars";

/**
 * when deleting game or piece def
 *
 * @param imgUrlList
 * @returns {Promise<void>}
 */
export async function incrementImgRefCounts(imgUrlList) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    firebase.database().ref(`img_refs/${uid}`).once('value').then( function(snapshot) {
        const imgRefsCounts = snapshot.val();
        const imgUrlListEscaped = mapUrlListCharsToValidKeyChars(imgUrlList) //HERE map imgUrlList argument
        const imgRefOverlappingKeys = Array.from(intersection(new Set(imgUrlListEscaped), new Set(Object.keys(imgRefsCounts))))
        imgRefOverlappingKeys.forEach(imgPath => {
            imgRefsCounts[imgPath] = imgRefsCounts[imgPath] - 1;
        })
        return Promise.all([updateImgRefCounts(uid, imgRefsCounts)])
    }).catch((error) => {
        console.log('this is the error that occurred:', error)
    });
}