import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import { initEmptyRanges } from "./apiHelpers/initEmptyRanges";
import { offsetStrsToList } from "./apiHelpers/offsetStrsToList";

async function getGamesFromDb() {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase
        .database()
        .ref()
        .child(`games/${uid}`)
        .once("value")
        .then(function (snapshot) {
            const games = snapshot.val();
            if (games) {
                for (const gameName of Object.keys(games)) {
                    games[gameName].defs = initEmptyRanges(
                        games[gameName].defs
                    );
                    games[gameName].defs = offsetStrsToList(
                        games[gameName].defs
                    );
                    if (!games[gameName].imgUrlStrs) {
                        games[gameName].imgUrlStrs = [];
                    }
                }
            }
            return games;
        });
}

export function getGames() {
    return Promise.all([getGamesFromDb()]);
}
