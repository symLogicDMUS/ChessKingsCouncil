import {copy} from "../../helpers/copy";
import {getPieceImg} from "../../styles/themes/specialThemeImgs/getPieceImg";
import {getFranchisePieceImg} from "../../styles/themes/specialThemeImgs/getFranchisePieceImg";
import {specialThemeList} from "../../styles/themes/specialThemeImgs/specialThemeList.jss";
import {updateOnResize} from "./updateOnResize";
import {getPieceName} from "../../helpers/getPieceName";
import {standardPieceNames} from "../../helpers/standardPieceNames";

export function reducer(state, action) {
    let pieces, pieceName;
    switch (action.type) {
        case "reposition":
            return {...state, ...updateOnResize(action.gameRoot, action.theme)};
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
            let src;
            pieceName = getPieceName(action.newId, action.idDict);
            if (standardPieceNames.includes(pieceName) && specialThemeList.includes(action.theme)) {
                src = getFranchisePieceImg(action.theme, action.newId, action.idDict)
            }
            else {
                src = getPieceImg(action.newId, action.idDict, action.defs);
            }
            pieces = copy(state.pieces);
            pieces[action.newId] = {
                left: pieces[action.oldId].left,
                top: pieces[action.oldId].top,
                src: src,
            };
            delete pieces[action.oldId];
            return {...state, isPromo: false, pieces: pieces};
        case "ai-begin":
            return {...state, aiDisplay: true, hiddenPiece: action.board[action.aiStart]}
        case 'ai-finish':
            return {...state, aiDisplay: false, hiddenPiece: null}
        case 'update-imgs':
            pieces = copy(state.pieces);
            if (specialThemeList.includes(action.theme)) {
                for (const pieceId of Object.keys(pieces)) {
                    pieceName = getPieceName(pieceId, action.idDict)
                    if (standardPieceNames.includes(pieceName)) {
                        pieces[pieceId] = {
                            ...pieces[pieceId],
                            src: getFranchisePieceImg(action.theme, pieceId, action.idDict)
                        }
                    }
                }
            }
            else {
                for (const pieceId of Object.keys(pieces)) {
                    pieces[pieceId] = {
                        ...pieces[pieceId],
                        src: getPieceImg(pieceId, action.idDict, action.defs)
                    }
                }
            }
            return {...state, pieces: pieces}
        default:
            throw new Error();
    }
}