import React from "react";
import {Board} from "./Components/Board";
import {JsonRecords} from "./sharedData/JsonRecords";
import {SpecialMoves} from "./Move/SpecialMoves";
import { Promo } from "./Modals/Promo";
import {Fen} from "./sharedData/Fen";
import {isPiece} from "./helpers/isPiece";
import {Saving} from "./Modals/Saving";
import {SaveSuccessfull} from "./Modals/SaveSuccessfull";
import { SaveButton } from "./Components/SaveButton";
import {RangeLayer} from "./Components/RangeDisplay/RangeLayer";
import {RangeSelect} from "./Components/RangeDisplay/RangeSelect"
import "./GameRoot.css";

export class GameRoot extends React.Component {

    constructor(props) {
        super(props);
        this.dataEntry = this.props.location.state.dataEntry;
        this.jsonRecords = new JsonRecords();
        this.specialMoves = new SpecialMoves();
        this.fenObj = new Fen();
        this.fenObj.set(this.dataEntry['fen_data'])
        this.specialMoves.update(this.dataEntry['moves'])
        this.jsonRecords.update(this.dataEntry['records'])
        this.board = this.dataEntry['board']
        this.state = {board: this.dataEntry['board'], bValue:true} //see footnote 1.
        this.turn = this.dataEntry['color']
        this.ranges = this.dataEntry['ranges'];
        this.enemyRanges = this.dataEntry['enemy_ranges'];
        this.idDict = this.dataEntry['id_dict']; // id:piece-name dict
        this.rangeDefs = this.dataEntry['defs'];
        this.promoChoices = this.dataEntry['promo_choices']; //is undefined to start, bug?
        this.promo = false; //set true to alert need of promotion
        this.pieceRangeHighlight = "none"; // piece id
        this.save = this.save.bind(this);
        this.update = this.update.bind(this);
        this.updatePrh = this.updatePrh.bind(this);
        this.updateSpecialCase = this.updateSpecialCase.bind(this);
        this.emitSpecialChange = this.emitSpecialChange.bind(this);

        /*footnote 1: 2 different attributes for board because can make 
          intermediate updates before triggering new render and 
          because board is logical choice for state. The state also has specialCase
          for pop up messages "saving...", "save successfull!", and the pop-up modal
          for promoting a pawn
        */ 
    }

    componentDidMount() {
        document.body.className = "game-root-body";
    }

    emitChange() {
      this.setState({board: this.board})
    }

    emitSpecialChange(board) {
        /**emit change of special case where board needs to be modified by source other than piece DnD.
         * called by Pawn promotion
         */
        this.setState({board: board})
    }

    getBoard() {
        return this.board;
    }

    getTurn() {
        return this.turn;
    }

    toggleTurn() {
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

    getEnemyColor() {
        if (this.turn === "W") {
            return "B"
        }
        else {
            return "W"
        }
    }

    update() {
        this.setState({bValue: ! this.state.bValue});
    }

    updateSpecialCase(case_) {
        this.specialCase = case_;
    }

    updatePrh(pieceRangeHighlight) {
        this.pieceRangeHighlight = pieceRangeHighlight;
    }

    callBackend() {
        let body = JSON.stringify({"board":this.getBoard(), 
                                   "records":this.jsonRecords.getRecords(), 
                                   "color":this.getTurn(),
                                   "defs":{"id_dict":this.idDict, "range_defs":this.rangeDefs}
                                })
        return fetch(`/${this.dataEntry.flask_method}`, {
            method: 'POST',
            body: body
        }).then(response => response.json())
        .then(dataEntry => {
            this.ranges = dataEntry['ranges']
            this.enemyRanges = dataEntry['enemy_ranges'];
            this.specialMoves.update(dataEntry['moves']);
        });    
    }

    updateBackend() {
        /**called after a move is made.*/
        return Promise.all([this.callBackend()])
    }

    updateJsonRecords(start, dest) {

        let fenId = this.board[dest][1].toLowerCase();

        if (fenId === 'p') {
            this.jsonRecords.pawnHistories[this.board[dest]].push(dest);
            this.jsonRecords.numConsecutiveNonPawnMoves = 0;
            this.jsonRecords.lastPawnMove = dest;
            if (isPiece(this.captured));
                delete this.jsonRecords.pawnHistories[this.board[this.captured]];
        }

        else {
            this.jsonRecords.numConsecutiveNonPawnMoves++;
            if (fenId  === 'k')
                this.jsonRecords.kingsMoved[start] = true;
            if (fenId === 'r')
                this.jsonRecords.rooksMoved[start] = true;
        }

        return 
    }

    updateFen(start, dest) {
        this.fenObj.update(this.specialMoves, this.jsonRecords, start, dest, this.captured, this.turn)
    }

    saveGame() {
        return fetch('/save', {
            method:"POST",
            body:JSON.stringify({
                game_name: this.props.gameName,
                board:this.getBoard(),
                json_records: this.jsonRecords.getRecords(),
                fen_obj: this.fenObj.getData(),
                id_dict: this.idDict,
                range_defs: this.rangeDefs
            })
        })
    }

    save() {
        /**save the game in progress */
        return Promise.all([this.saveGame()])
    }


    render() {
        return (
            <>        
                <Board data={this} />
                <RangeLayer board={this.board} pieceRangeHighlight={this.pieceRangeHighlight} allRanges={{...this.ranges, ...this.enemyRanges}}  />
                <RangeSelect updatePrh={this.updatePrh} update={this.update} allRanges={{...this.ranges, ...this.enemyRanges}} rangeDefs={this.rangeDefs} idDict={this.idDict}/>
                <SaveButton save={this.save} update={this.update} updateSpecialCase={this.updateSpecialCase} />
                {this.specialCase === "promo" && (<Promo data={this} color={this.getEnemyColor()} pawnLoc={this.specialMoves.currentDest} />)}
                {this.specialCase === "saving" && (<Saving />)}
                {this.specialCase === "save-success" && (<SaveSuccessfull update={this.update} updateSpecialCase={this.updateSpecialCase} />)}
            </>

        )
    }

}