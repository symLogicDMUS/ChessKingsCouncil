import React from "react";
import {Board} from "./Components/Board";
import {JsonRecords} from "./sharedData/JsonRecords";
import {Fen} from "./sharedData/Fen";
import {SpecialMoves} from "./Move/SpecialMoves";
import {isPiece} from "./helpers/isPiece";
import { Promo } from "./Modals/Promo";
import {Saving} from "./Modals/Saving";
import {SaveSuccessfull} from "./Modals/SaveSuccessfull";
import { SaveButton } from "./Components/SaveButton";
import "./GameRoot.css";

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
        this.state = {board: this.props.dataEntry['board'], specialCase:"none"} //see footnote 1.
        this.turn = this.props.dataEntry['color']
        this.ranges = this.props.dataEntry['ranges']
        this.idDict = this.props.dataEntry['id_dict'] // id:piece-name dict
        this.rangeDefs = this.props.dataEntry['defs'];
        this.promoChoices = this.props.dataEntry['promo_choices'];
        this.promo = false; //set true to alert need of promotion
        this.save = this.save.bind(this);
        this.updateSpecialCase = this.updateSpecialCase.bind(this);


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

    BoardComponent() {

    }

    emitChange() {
      this.setState({board: this.board})
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

    updateSpecialCase(case_) {
        this.setState({specialCase: case_});
    }

    callBackend() {
        let body = JSON.stringify({"board":this.getBoard(), 
                                   "records":this.jsonRecords.getRecords(), 
                                   "color":this.getTurn(),
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
                {this.state.specialCase === "promo" && (<Promo data={this} pawnLoc={this.specialMoves.currentDest} />)}
                {this.state.specialCase === "saving" && (<Saving />)}
                {this.state.specialCase === "save-success" && (<SaveSuccessfull updateSpecialCase={this.updateSpecialCase} />)}
                <SaveButton save={this.save} updateSpecialCase={this.updateSpecialCase} />
            </>

        )
    }

}
