import React from "react";

export class PromoChoice extends React.Component {

    constructor(props) {
        super(props)
        this.data = this.props.data // reference GameRoot object
        this.updateBoard = this.updateBoard.bind(this);
        this.promote = this.promote.bind(this);
        this.color = this.data.getEnemyColor(); // color filped already, need previous
        this.pieceName = this.props.choiceName;
        this.genId = this.props.choiceData['gen_id'][this.color]; //piece ID without number
        this.pieceImageName = this.props.choiceData['image'][this.color] //Name of image of piece
        this.pawnLoc = this.props.pawnLoc;
    }

    getIdNumber() {
        
        let matches = Object.values(this.data.board).filter(pieceId => pieceId.startsWith(this.genId))
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
                <img src={require(`../pieceImages/${this.pieceImageName}`)} onClick={this.promote} />
        );
    }

}