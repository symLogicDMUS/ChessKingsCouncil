import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import {convertOffsetStrsToPairs} from "./apiHelpers/convertOffsetStrsToPairs";

async function getPieceDefFromDb(pieceName) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child(`defs/${uid}/${pieceName}`).once('value').then(
        function(snapshot) {
            let def = snapshot.val();
            if (def) {
                if (! def.W.spans) {
                    def.W.spans = []
                }
                if (! def.B.spans) {
                    def.B.spans = []
                }
                if (! def.W.offsets) {
                    def.W.offsets  = []
                }
                if (! def.B.offsets) {
                    def.B.offsets = []
                }
                def.B.offsets = convertOffsetStrsToPairs(def.B.offsets)
                def.W.offsets = convertOffsetStrsToPairs(def.W.offsets)
            }
            return def;
        }
    )
    .catch((err) => {
        console.log(`ERROR: ${err}`)
    })
}

export function getDef(pieceName) {
    return Promise.all([getPieceDefFromDb(pieceName)])
    .catch((err) => {
        console.log(`ERROR: ${err}`)
    })
}