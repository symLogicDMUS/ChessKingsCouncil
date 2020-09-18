import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import {initEmptyRanges} from "../apiHelpers/initEmptyRanges";
import {offsetStrsToList} from "../apiHelpers/offsetStrsToList";


async function getPieceDefsFromDb(username) {
    return await firebase.database().ref().child('defs').child(username).once('value').then( function(snapshot) {
        var defs = snapshot.val()
        defs = initEmptyRanges(defs)
        defs = offsetStrsToList(defs)
        return defs;
    })
}

export function getDefs(username) {
    return Promise.all([getPieceDefsFromDb(username)])
}