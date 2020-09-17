import {getPiecesOnPath} from "../pathsInfo/getPiecesOnPath";


export function getPieceLoc(board, id) {

    for (var rf of Object.keys(board)) {
        if (board[rf] === id)
            return rf
    }
    return -1;
}

// module.exports = getPieceLoc;