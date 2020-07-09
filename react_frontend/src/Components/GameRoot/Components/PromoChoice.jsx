import React from "react";
import {imgNames} from  "../../MyPieces/imgNames";
import {pieceImgDict} from "../../MyPieces/pieceImgDict"
export class PromoChoice extends React.Component {

    constructor(props) {
        super(props);
        this.data = this.props.data;
        this.updateBoard = this.updateBoard.bind(this);
        this.promote = this.promote.bind(this);
        this.color = this.data.getEnemyColor(); // color filped since move already occured. need previous
        this.genId = this.color + this.props.promoId.toUpperCase();
        this.pieceName = this.data.idDict[this.props.promoId];
        this.def = this.data.rangeDefs[this.pieceName][this.color];
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
            this.data.emitChange();
            this.props.data.updateSpecialCase("none");
            this.props.data.update();
          })
    }
 
    promote() {
        let idNumber = this.getIdNumber()
        let newId = this.getNewId(idNumber)
        this.replacePawn(this.pawnLoc, newId)
        this.updateBoard();
    }

    render() {
        return (
                <img src={`/Images/Pieces/${this.def["img"]}`} onClick={this.promote} style={{height:"100px", width:"100px"}} />
        );
    }

}