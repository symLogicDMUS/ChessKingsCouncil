import React from "react";
import {imgNames} from  "../../MyPieces/imgNames";

export class PromoChoice extends React.Component {

    constructor(props) {
        super(props);
        this.data = this.props.data
        this.updateBoard = this.updateBoard.bind(this);
        this.promote = this.promote.bind(this);
        this.color = this.data.getEnemyColor(); // color filped since move already occured. need previous
        this.genId = this.color + this.props.promoId.toUpperCase();
        this.pieceName = this.data.idDict[this.props.promoId];
        this.pieceImageNames = imgNames[this.pieceName] //2 names, one W other B
        this.pawnLoc = this.props.pawnLoc;
    }

    getIdNumber() {
        /**Pawn promotion means we are adding another piece, 
         * idNumber is how many of that piece for that color 
         * there is now
         **/

        //find how many of promo choice this component was given there is now.
        let matches = Object.values(this.data.board).filter(pieceId => pieceId.startsWith(this.genId))

        //add 1 to that
        let idNumber = matches.length + 1;

        return idNumber;
    }

    getNewId(idNumber) {
        return this.genId + idNumber;
    }

    replacePawn(pawnLoc, newId) {
        this.data.board[pawnLoc] = newId;
        return;
    }

    updateBoard() {
        this.data.updateBackend().then(([result]) => {
            this.data.emitChange()
          })
    }
 
    promote() {
        let idNumber = this.getIdNumber()
        let newId = this.getNewId(idNumber)
        this.replacePawn(this.pawnLoc, newId)
        this.updateBoard()
    }

    render() {
        return (
                <img src={require(`../../MyPieces/Images/${this.pieceImageNames[this.color]}`)} onClick={this.promote} />
        );
    }

}