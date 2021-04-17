import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";
import {updateImgRefCount} from "./updateImgRefCount";
import {mapUrlCharsToValidKeyChars} from "./mapUrlCharsToValidKeyChars";


export async function incrementImgRefCount(imgUrl) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    const imgUrlEscaped = mapUrlCharsToValidKeyChars(imgUrl)
    return await firebase.database().ref(`img_refs/${uid}/${imgUrlEscaped}`).once('value').then(
        async function(snapshot) {
            if (! snapshot.exists()) {
                return await firebase.database().ref().child(`/img_refs/${uid}`).update({[imgUrlEscaped]: 0}).then(async r => {
                    let count = snapshot.val();
                    count = count + 1
                    return await updateImgRefCount(imgUrlEscaped, count)
                })
            }
            else {
                let count = snapshot.val();
                count = count + 1
                return await updateImgRefCount(imgUrlEscaped, count)
            }
        }
    )
}