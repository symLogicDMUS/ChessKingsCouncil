import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";
import {intersection} from "../Components/helpers/setOps";
import {deleteStorageImgsWithNoRef} from "./deleteStorageImgsWithNoRef";
import {updateImgRefCounts} from "./updateImgRefCounts";
import {mapUrlListCharsToValidKeyChars} from "./mapUrlListCharsToValidKeyChars";
import {setImgRefCounts} from "./setImgRefCounts";

/**
 * when deleting game or piece def
 *
 * @param imgUrlStrs
 * @returns {Promise<void>}
 */
export async function decrementImgRefCounts(imgUrlStrs) {
    if (! imgUrlStrs || imgUrlStrs.length===0) {
        return null;
    }
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    firebase.database().ref(`img_refs/${uid}`).once('value').then(
        function(snapshot) {
            const allImgRefCountsFromDb = snapshot.val();
            const someImgRefCountsFromLocalSrc = mapUrlListCharsToValidKeyChars(imgUrlStrs)
            const imgRefOverlappingKeys = Array.from(intersection(
                new Set(someImgRefCountsFromLocalSrc),
                new Set(Object.keys(allImgRefCountsFromDb))
            ))
            imgRefOverlappingKeys.forEach(imgPath => {
                allImgRefCountsFromDb[imgPath] = allImgRefCountsFromDb[imgPath] - 1;
            })
            const newImgRefCounts = Object.fromEntries(
                Object.entries(allImgRefCountsFromDb).filter(([imgUrl, refCount]) => refCount > 0)
            )
            const imgUrlsWithNoReference = Object.keys(allImgRefCountsFromDb).filter(imgUrl =>
                allImgRefCountsFromDb[imgUrl] === 0
            )
            setImgRefCounts(newImgRefCounts).then(r => {
                return deleteStorageImgsWithNoRef(imgUrlsWithNoReference)
            })
        }
    ).catch((error) => {
        console.log('this is the error that occurred:', error)
    });
}