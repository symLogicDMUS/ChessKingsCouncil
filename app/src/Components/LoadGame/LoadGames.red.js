import {getBoardObjs} from "./getBoardObjs";
import {getGameSnapshots} from "./getGameSnapshots";
import {parseData} from "../../API/apiHelpers/parseData";
import {copy} from "../helpers/copy";

export function reducer(state, action) {
    switch (action.type) {
        case "init-load":
            const boardObjs = getBoardObjs(state.games);
            // const gameSnapshotComponents = getGameSnapshots(
            //     state.boardObjs,
            //     dispatch,
            //     state.selectedGame,
            //     state.searchText,
            //     state.showNames,
            //     state.theme
            // );
            return {
                ...state,
                uid: action.uid,
                loaded: true,
                boardObjs: boardObjs,
                // gameSnapshotComponents: gameSnapshotComponents,
            }
        case "load-game":
            let gameData = state.games[state.selectedGame];
            gameData = {...state.gameData, ...parseData(gameData)};
            return {
                ...state,
                useChoseGame: true
            }
        // history.push("/Play", {
        //     currentPath: "/LoadGame",
        //     gameName: copy(state.selectedGame),
        //     gameType: copy(gameData.type),
        //     playerType: copy(gameData.pt),
        //     gameData: copy(gameData),
        // });
        case 'delete-game':
            const newState = copy(state)
            delete newState.games[action.gameName];
            delete newState.boardObjs[action.gameName];
            return {
                ...newState,
                selectedGame: null,
                userChoseGame: false,
                // gameSnapshotComponents: getGameSnapshots(
                //     newState.boardObjs,
                //     newState.setChoice,
                //     newState.selectedGame,
                //     newState.searchText,
                //     newState.showNames,
                //     newState.theme
                // ),

            }
        case 'set-choice':
            return {
                ...state,
                selectedGame: action.gameName,
            }
        // case 'update-snapshots':
        //     return {
        //         ...state,
        //         gameSnapshotComponents: getGameSnapshots(
        //             state.boardObjs,
        //             dispatch,
        //             state.selectedGame,
        //             state.searchText,
        //             state.showNames,
        //             state.theme
        //         ),
        //     }
        case 'update-search-text':
            return {
                ...state,
                searchText: action.newText,
                // gameSnapshotComponents: getGameSnapshots(
                //     state.boardObjs,
                //     dispatch,
                //     state.selectedGame,
                //     action.newText,
                //     state.showNames,
                //     state.theme
                // ),
            }
        case 'toggle-show-names':
            return {
                ...state,
                showNames: !state.showNames,
                // gameSnapshotComponents: getGameSnapshots(
                //     state.boardObjs,
                //     dispatch,
                //     state.selectedGame,
                //     state.searchText,
                //     state.showNames,
                //     state.theme
                // ),
            }
        default:
            throw new Error();
    }
}