import React from "react";
import {Board} from "./Board";
import "./index.css";
import {JsonRecords} from "./sharedData/JsonRecords";
import {Fen} from "./sharedData/Fen";
import {SpecialMoves} from "./Move/SpecialMoves"
import {getGameData} from "../../../gameData";
import {getPieceType} from "./sharedData/getPieceType";
import {isPiece} from "./sharedData/isPiece";


export class API extends React.Component {

    constructor(props) {

        super(props)

        this.jsonRecords = new JsonRecords();
        this.fenObj = new Fen();
        this.specialMoves = new SpecialMoves();

        let data = getGameData("New")
        this.board = data['board']
        this.turn = data['color']
        this.ranges = data['ranges']
        this.fenObj.set(data['fen_data'])
        this.specialMoves.update(data['moves'])
        this.jsonRecords.update(data['records'])

        this.state = {board: data['board'] }
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
        return fetch('/update', {
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
        return <Board data={this}/>
    }

}
