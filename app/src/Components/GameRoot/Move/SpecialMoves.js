
export class SpecialMoves {
    /*records the moves of current turn that are en-passant, castle, or pawn promotion**/
    constructor(moves) {
        /*list form.includes(elements) of (start, dest) where start and dest are (x, y)**/
        this.enPassant = moves['en_passant'];
        this.castles = moves['castles'];
        this.promos = moves['promos'];
        this.currentDest = "none"
    }

    update(moves) {
        this.enPassant = moves['en_passant']
        this.castles = moves['castles']
        this.promos = moves['promos']
    }
    
    isCastle(move) {
        /*returns true if move is a currently available castle, otherwise false**/
        if (JSON.stringify(this.castles).indexOf(JSON.stringify(move)) !== -1) {
            return true
        }
        else {
            return false
        }
    }
    isPromo(move) {
        /*returns true if move is a currently available pawn promotion, otherwise false**/
        if (JSON.stringify(this.promos).indexOf(JSON.stringify(move)) !== -1) {
            return true
        }
        else {
            return false
        }
    }
    isEnPassant(move) {
        /*returns true if move is a currently available en-passant capture, otherwise false**/
        if (JSON.stringify(this.enPassant).indexOf(JSON.stringify(move)) !== -1) {
            return true
        }
        else {
            return false
        }
    }
    addCastle(move) {
        /*add move to currently available castles**/
        this.castles.append(move)
    }
    addPromo(move) {
        /*add move to list of currently avaliable pawn promotions**/
        this.promos.append(move)
    }
    addEnPassant(move) {
        /*add move to list of currently avaliable en-passants**/
        this.enPassant.append(move)
    }
    removeCastle(move) {
        let index = JSON.stringify(this.castles).indexOf(JSON.stringify(move));
        if (index > -1)
            this.castles.splice(index, 1)
    }
    removePromo(move) {
        let index = JSON.stringify(this.promos).indexOf(JSON.stringify(move))
        if (index > -1)
            this.promos.splice(index, 1)   
    }
    removeEnpassant(move) {
        let index = JSON.stringify(this.enPassant).indexOf(JSON.stringify(move))
        if (index > -1)
            this.enPassant.splice(index, 1)
    }
    getCastles() {
        /*return the list of castle moves**/
        return this.castles
    }
    getEnPassant() {
        /*return the en-passant moves**/
        return this.enPassant
    }
    getPromos() {
        /*return the pawn promotions**/
        return this.promos
    }
}