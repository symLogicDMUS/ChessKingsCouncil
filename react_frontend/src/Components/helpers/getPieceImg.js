
export function getPieceImg(id_) {
    var img = "_"
    if (id_[0] === 'W') {
        switch(id_[1]) {
            case 'R':
                img = "wR.png";
                break;
            case 'N':
                img = "wN.png";
                break;
            case 'B':
                img = "wB.png";
                break;
            case 'Q':
                img = "wQ.png";
                break;
            case 'K':
                img = "wK.png";
                break;
            case 'P':
                img = "wP.png";
                break;
            default:
                console.log("error: pieceId not recognized!");
                break;
        }
    }
    else if (id_[0] === 'B') {
        switch(id_[1]) {
            case 'R':
                img = "bR.png";
                break;
            case 'N':
                img = "bN.png";
                break;
            case 'B':
                img = "bB.png";
                break;
            case 'Q':
                img = "bQ.png";
                break;
            case 'K':
                img = "bK.png";
                break;
            case 'P':
                img = "bP.png";
                break;
            default:
                console.log("error: pieceId not recognized!");
                break;
        }

    }
    else {
        console.log("error: first char of id is not a valid color");
    }
    return img;
}
