import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";
import {mapUrlCharsToValidKeyChars} from "./mapUrlCharsToValidKeyChars";
import {updateImgRefCounts} from "./updateImgRefCounts";
import {deleteStorageImg} from "./deleteStorageImg";
import {setImgRefCounts} from "./setImgRefCounts";
import {updateImgRefCount} from "./updateImgRefCount";


export async function decrementImgRefCount(imgUrl) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    const imgUrlEscaped = mapUrlCharsToValidKeyChars(imgUrl)
    return await firebase.database().ref(`img_refs/${uid}/${imgUrlEscaped}`).once('value').then(
        function(snapshot) {
            let count = snapshot.val();
            count = count - 1
            if (count === 0) {
                deleteStorageImg(imgUrl).then(r => {
                    return Promise.all([updateImgRefCount(imgUrlEscaped, null)])
                })
            }
            else {
                return Promise.all([updateImgRefCount(imgUrlEscaped, count)])
            }
        }
    )
}