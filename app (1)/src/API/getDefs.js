import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import {initEmptyRanges} from "../apiHelpers/initEmptyRanges";
import {offsetStrsToList} from "../apiHelpers/offsetStrsToList";


async function getPieceDefsFromDb() {
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    return await firebase.database().ref().child('defs').child(uid).once('value').then( function(snapshot) {
        var defs = snapshot.val()
        if (defs) {
            defs = initEmptyRanges(defs)
            defs = offsetStrsToList(defs)
        }
        return defs;
    })
}

export function getDefs() {
    return Promise.all([getPieceDefsFromDb()])
}