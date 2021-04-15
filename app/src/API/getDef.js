import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

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
            }
            return def;
        }
    )
}

export function getDef(pieceName) {
    return Promise.all([getPieceDefFromDb(pieceName)])
}