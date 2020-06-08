import React from "react";
import {Board} from "./Board";
import {JsonRecords} from "./sharedData/JsonRecords";
import {Fen} from "./sharedData/Fen";
import {SpecialMoves} from "./Move/SpecialMoves";
import {getPieceType} from "./sharedData/getPieceType";
import {isPiece} from "./sharedData/isPiece";
import { Promo } from "./components/Promo";
import {InactiveBoard} from "./InactiveBoard";


export class GameRoot extends React.Component {

    constructor(props) {
        super(props)
        this.jsonRecords = new JsonRecords();
        this.specialMoves = new SpecialMoves(); 
        this.fenObj = new Fen();
        this.fenObj.set(this.props.data['fen_data'])
        this.specialMoves.update(this.props.data['moves'])
        this.jsonRecords.update(this.props.data['records'])
        this.board = this.props.data['board']
        this.state = {board: this.props.data['board'] }
        this.turn = this.props.data['color']
        this.ranges = this.props.data['ranges']
        this.pieceDefs = this.props.pieceDefs
        this.promo = false; //set true to alert need of promotion
    }

    BoardComponent() {
        if (! this.promo) {
            return <Board data={this} />
        }
        else {
            this.promo = false;
            return(
                <Promo data={this} pawnLoc={this.specialMoves.currentDest}>
                    <InactiveBoard board={this.board} />
                </Promo>
            );      
        }
    }

    emitChange() {
      this.setState({board: this.board})
    }

    getBoard() {
        return this.board
    }

    getColor() {
        return this.turn
    }

    getEnemyColor() {
        if (this.turn === "W") {
            return "B"
        }
        else {
            return "W"
        }
    }

    toggleColor() {
        if (this.turn === "W") {
            this.turn = "B"
        }
        else if (this.turn === "B") {
            this.turn = "W"
        }
        else {
            console.log("color error")
        }
    }

    callBackend(start, dest) {
        let body = JSON.stringify({"board":this.getBoard(), 
                                   "records":this.jsonRecords.getRecords(), 
                                   "color":this.getColor()})
        return fetch(`/${this.props.data.game_type}`, {
            method: 'POST',
            body: body
        }).then(response => response.json())
        .then(data => {
            this.ranges = data['ranges']
            this.specialMoves.update(data['moves'])
        });    
    }

    updateFrontend(start, dest) {

        let pieceType = getPieceType(this.board[dest])

        if (pieceType === 'Pawn') {
            this.jsonRecords.pawnHistories[this.board[dest]].push(dest)
            this.jsonRecords.numConsecutiveNonPawnMoves = 0
            this.jsonRecords.lastPawnMove = dest
            if (isPiece(this.captured))
                delete this.jsonRecords.pawnHistories[this.board[this.captured]]
        }

        else {
            this.jsonRecords.numConsecutiveNonPawnMoves++;
            if (pieceType === 'King')
                this.jsonRecords.kingsMoved[start] = true
            if (pieceType === 'Rook')
                this.jsonRecords.rooksMoved[start] = true
        }
        //TODO: update fenObject here
        return 
    }

    updateBackend(start, dest) {
        /**called after a move is made.*/
        return Promise.all([this.callBackend(start, dest)])
    }


    render() {
        return this.BoardComponent()
    }

}
