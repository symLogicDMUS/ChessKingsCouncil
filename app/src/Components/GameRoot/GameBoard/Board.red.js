import {viewHeight, viewWidth} from "../../helpers/windowMeasurments";
import {appBarHeight} from "../../Reuseables/Drawers/PersistentDrawer.jss";
import {setStartingPieces} from "./setStartingPieces";
import {copy} from "../../helpers/copy";
import {getPieceImg} from "../../MyPieces/getPieceImg";
import {specialThemeList} from "../../styles/themes.jss";
import {getFranchisePieceImg} from "../../MyPieces/getFranchisePieceImg";

export const updateOnResize = (gameRoot) => {
    const vh = viewHeight();
    const vw = viewWidth();
    const sqrSizeDesktop = vw * 0.051;
    const sqrSizeMobile = vw * 0.11875;
    let currentSqrSize;
    if (vw > 1040) {
        currentSqrSize = sqrSizeDesktop
    }
    else {
        currentSqrSize = sqrSizeMobile;
    }
    return {
        pieces: setStartingPieces(gameRoot, currentSqrSize),
        sqrSizes: {
            desktop: sqrSizeDesktop,
            mobile: sqrSizeMobile
        },
        boardSizes: {
            desktop: sqrSizeDesktop * 8,
            mobile: sqrSizeMobile * 8,
        },
        boardPos: {
            desktop: {
                left: vw * 0.45 - sqrSizeDesktop * 8 * 0.5,
                top: (vh*0.5+appBarHeight*0.5) - sqrSizeDesktop * 8 * 0.5,
            },
            mobile: {
                left: vw*0.5 - sqrSizeMobile*8 * 0.5,
                top: appBarHeight*1.1,
            },
        }
    }
}

export function reducer(state, action) {
    let pieces;
    switch (action.type) {
        case "reposition":
            return {...state, ...updateOnResize(action.gameRoot)};
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
            if (action.gameType !== 'Standard') {
                return state;
            }
            pieces = copy(state.pieces);
            if (specialThemeList.includes(action.theme)) {
                for (const pieceId of Object.keys(pieces)) {
                    pieces[pieceId] = {
                        ...pieces[pieceId],
                        src: getFranchisePieceImg(action.theme, pieceId, action.idDict)
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