import {getBoardObjs} from "./getBoardObjs";
import {parseData} from "../../API/apiHelpers/parseData";
import {copy} from "../helpers/copy";

export function reducer(state, action) {
    switch (action.type) {
        case "init-load":
            const boardObjs = getBoardObjs(action.games, action.theme);
            return {
                ...state,
                uid: action.uid,
                games: action.games,
                boardObjs: boardObjs,
                loaded: true,
            }
        case "load-game":
            let gameData = state.games[state.selectedGame];
            gameData = {...gameData, ...parseData(gameData)}
            return {
                ...state,
                gameData: gameData,
                useChoseGame: true
            }
        case 'delete-game':
            const newState = copy(state)
            delete newState.games[newState.selectedGame];
            delete newState.boardObjs[newState.gameName];
            newState.selectedGame = null;
            return newState;
        case 'set-choice':
            return {
                ...state,
                selectedGame: action.gameName,
            }
        case 'update-search-text':
            return {
                ...state,
                searchText: action.newText,
            }
        case 'toggle-show-names':
            return {
                ...state,
                showNames: !state.showNames,
            }
        default:
            throw new Error();
    }
}