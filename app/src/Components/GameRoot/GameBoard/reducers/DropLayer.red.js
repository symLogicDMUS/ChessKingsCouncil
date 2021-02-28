import { copy } from "../../../helpers/copy";
import { getPieceImg } from "../../../MyPieces/getPieceImg";
import {specialThemeList} from "../../../styles/themes.jss";
import {getFranchisePieceImg} from "../../../MyPieces/getFranchisePieceImg";

/**
 * dropLayer for the game board
 * @param state: a record of pieces, their id and img src.
 * @param action: either delete a piece or update its position.
 * @returns {*}
 */
export function reducer(state, action) {
    let pieces;
    switch (action.type) {
        case "update":
            pieces = copy(state.pieces);
            pieces = {
                ...pieces,
                [action.id]: {
                    top: action.top,
                    left: action.left,
                    src: action.src,
                },
            };
            return {...state, pieces: pieces};
        case "remove":
            pieces = copy(state.pieces);
            delete pieces[action.id];
            return {...state, pieces: pieces};
        case "begin-promo":
            return {...state, isPromo: true}
        case "promote":
            pieces = copy(state.pieces);
            pieces[action.newId] = {
                left: pieces[action.oldId].left,
                top: pieces[action.oldId].top,
                src: getPieceImg(action.newId, action.idDict, action.defs),
            };
            delete pieces[action.oldId];
            return {...state, isPromo: false, pieces: pieces};
        case "ai-begin":
            return {...state, aiDisplay: true, hiddenPiece: action.board[action.aiStart]}
        case 'ai-finish':
            return {...state, aiDisplay: false, hiddenPiece: null}
        case 'update-imgs':
            if (! specialThemeList.includes(action.theme)) {
                return state;
            }
            pieces = copy(state.pieces);
            for (const pieceId of Object.keys(pieces)) {
                pieces[pieceId] = {...pieces[pieceId], src: getFranchisePieceImg(action.theme, pieceId, action.idDict)}
            }
            return {...state, pieces: pieces}
        default:
            throw new Error();
    }
}
