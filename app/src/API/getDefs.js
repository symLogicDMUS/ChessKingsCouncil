import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import { initEmptyRanges } from "./apiHelpers/initEmptyRanges";
import { offsetStrsToList } from "./apiHelpers/offsetStrsToList";

async function getPieceDefsFromDb() {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase
        .database()
        .ref()
        .child(`defs/${uid}`)
        .once("value")
        .then(function (snapshot) {
            let defs = snapshot.val();
            if (defs) {
                defs = initEmptyRanges(defs);
                defs = offsetStrsToList(defs);
            }
            return defs;
        })
        .catch((err) => {
            console.log(`ERROR: ${err}`);
        });
}

export function getDefs() {
    return Promise.all([getPieceDefsFromDb()]);
}
