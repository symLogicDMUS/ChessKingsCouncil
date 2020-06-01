
export function getPieceType(str) {
    /*return ['Rook', 'Knight', 'Bishop', 'King', 'Queen', or] 'Pawn'**/

    let id_ = str;

    if (id_ === '#') {
        return 'Empty'
    }
    if (id_.match(`^(W|B)R[1-9]$`) != null) {
        return 'Rook'
    }
    if (id_.match(`^(W|B)N[1-9]$`) != null) {
        return 'Knight'
    }
    if (id_.match(`^(W|B)B[1-9]$`) != null) {
        return 'Bishop'
    }
    if (id_.match(`^(W|B)Q[1-9]$`) != null) {
        return 'Queen'
    }
    if (id_.match(`^(W|B)K[1-9]$`) != null) {
        return 'King'
    }
    if (id_.match(`^(W|B)P[1-9]$`) != null) {
        return 'Pawn'
    }
    else {
        console.log('error: not a piece id')
        return -1
    }
}