import React from "react";
import {Board} from "./Components/Board";
import {JsonRecords} from "./sharedData/JsonRecords";
import {Fen} from "./sharedData/Fen";
import {SpecialMoves} from "./Move/SpecialMoves";
import {getPieceType} from "../helpers/getPieceType";
import {isPiece} from "../helpers/isPiece";
import { Promo } from "./Components/Promo";
import {InactiveBoard} from "./Components/InactiveBoard";


export class GameRoot extends React.Component {

    constructor(props) {
        super(props)
        this.jsonRecords = new JsonRecords();
        this.specialMoves = new SpecialMoves(); 
        this.fenObj = new Fen();
        this.fenObj.set(this.props.dataEntry['fen_data'])
        this.specialMoves.update(this.props.dataEntry['moves'])
        this.jsonRecords.update(this.props.dataEntry['records'])
        this.board = this.props.dataEntry['board']
        this.state = {board: this.props.dataEntry['board'] } //see footnote 1
        this.turn = this.props.dataEntry['color']
        this.ranges = this.props.dataEntry['ranges']
        this.idDict = this.props.dataEntry['id_dict'] // id:piece-name dict
        this.rangeDefs = this.props.rangeDefs;
        this.promo = false; //set true to alert need of promotion

        /*footnote 1: 2 different attributes for board because can make 
          intermediate updates before triggering new render and 
          because board is logical choice for state.*/ 
    }

    BoardComponent() {

        if (! this.promo) {
            return <Board data={this} />
        }

        else {
            this.promo = false;
            return(
                <Promo data={this} pawnLoc={this.specialMoves.currentDest}>
                    <InactiveBoard board={this.board} idDict={this.idDict} />
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

    callBackend() {
        let body = JSON.stringify({"board":this.getBoard(), 
                                   "records":this.jsonRecords.getRecords(), 
                                   "color":this.getColor(),
                                   "defs":{"id_dict":this.idDict, "range_defs":this.rangeDefs}
                                })
        return fetch(`/${this.props.dataEntry.flask_method}`, {
            method: 'POST',
            body: body
        }).then(response => response.json())
        .then(dataEntry => {
            this.ranges = dataEntry['ranges']
            this.specialMoves.update(dataEntry['moves'])
        });    
    }

    updateFrontend(start, dest) {

        let fenId = this.board[dest][1].toLowerCase();

        if (fenId === 'p') {
            this.jsonRecords.pawnHistories[this.board[dest]].push(dest)
            this.jsonRecords.numConsecutiveNonPawnMoves = 0
            this.jsonRecords.lastPawnMove = dest
            if (isPiece(this.captured))
                delete this.jsonRecords.pawnHistories[this.board[this.captured]]
        }

        else {
            this.jsonRecords.numConsecutiveNonPawnMoves++;
            if (fenId  === 'k')
                this.jsonRecords.kingsMoved[start] = true
            if ( fenId === 'r')
                this.jsonRecords.rooksMoved[start] = true
        }

        //TODO: update fenObject here
        return 
    }

    updateBackend() {
        /**called after a move is made.*/
        return Promise.all([this.callBackend()])
    }


    render() {
        return this.BoardComponent()
    }

}
