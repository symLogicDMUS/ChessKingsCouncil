import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";
import { deleteStorageImg } from "./deleteStorageImg";
import { mapUrlCharsToValidKeyChars } from "./mapUrlCharsToValidKeyChars";

export async function decrementImgRefCount(imgUrl) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    const imgUrlEscaped = mapUrlCharsToValidKeyChars(imgUrl);
    return await firebase
        .database()
        .ref(`/img_refs/${uid}/${imgUrlEscaped}`)
        .transaction(
            function (refCount) {
                return refCount - 1;
            },
            async function (error, committed, snapshot) {
                if (error) {
                    console.log(error);
                }
                if (snapshot.val() === 0) {
                    return await firebase
                        .database()
                        .ref(`img_refs/${uid}`)
                        .update({ [imgUrlEscaped]: null })
                        .then(async (r) => {
                            return await deleteStorageImg(imgUrl);
                        });
                }
            }
        )
        .catch((err) => {
            console.log(`ERROR: ${err}`);
        });
}
