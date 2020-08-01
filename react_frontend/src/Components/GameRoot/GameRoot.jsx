import React from "react";
import {Board} from "./Components/Board";
import {GameRootHeader as Header} from "./Components/GameRootHeader";
import {JsonRecords} from "./sharedData/JsonRecords";
import {GameStatus} from "./sharedData/GameStatus";
import {SpecialMoves} from "./Move/SpecialMoves";
import { Promo } from "./Modals/Promo";
import {Fen} from "./sharedData/Fen";
import {isPiece} from "./gameRootHelpers/isPiece";
import {Saving} from "./Modals/Saving";
import {SaveSuccessfull} from "./Modals/SaveSuccessfull";
import {RangeDisplayTool} from "./Components/RangeDisplayTool";
import { SaveResignTool } from "./Components/SaveResignTool";
import {AiDisplay} from "./Components/AiDisplay";
import {makeMove} from "./Move/makeMove";
import {NavBar} from "../NavBar/NavBarRegular";
import {NavExpand} from "../NavBar/NavExpand";
import {NavColapse} from "../NavBar/NavColapse";
import { OVER } from "../helpers/gStatusTypes";
import "./css/GameRoot.css";


export class GameRoot extends React.Component {

    constructor(props) {
        super(props);
        this.gameName = this.props.location.state.gameName;
        this.dataEntry = this.props.location.state.dataEntry;
        this.state = {bValue:true}
        this.board = this.dataEntry['board'] 
        this.aiDisplay = false;
        this.jsonRecords = new JsonRecords(this.dataEntry['records']);
        this.gameStatus = new GameStatus(this.dataEntry['status']);
        this.specialMoves = new SpecialMoves(this.dataEntry['moves']);
        this.fenObj = new Fen(this.dataEntry['fen_data']);
        this.turn = this.dataEntry['color']
        this.ranges = this.dataEntry['ranges'];
        this.enemyRanges = this.dataEntry['enemy_ranges'];
        this.idDict = this.dataEntry['id_dict']; // id:piece-name dict
        this.rangeDefs = this.dataEntry['defs']; 
        this.promoChoices = this.dataEntry['promo_choices']; //is undefined to start, bug?
        this.playerType = this.dataEntry['player_type'];
        this.aiColor = this.setAiColor();
        this.promo = false; //set true to alert need of promotion
        this.navExpanded = true;
        this.first = true;
        this.pieceRangeHighlight = "none"; // is a piece id
        this.togleNav = this.togleNav.bind(this);
        this.save = this.save.bind(this);
        this.update = this.update.bind(this);
        this.resign = this.resign.bind(this);
        this.updatePrh = this.updatePrh.bind(this);
        this.updateSpecialCase = this.updateSpecialCase.bind(this);
        this.aiDisplayMove = this.aiDisplayMove.bind(this);
        this.aiMakeMove = this.aiMakeMove.bind(this);
    }

    componentDidMount() {
        document.body.className = "game-root-body";
        if (this.first) {
            this.first = false;
            if (this.turn === this.aiColor) {
                this.updateBackend().then(([result]) => { 
                    this.aiDisplayMove();
                    this.update();
                });
            }
        }
    }

    setAiColor() {
        if (this.playerType === "test")
            return "none";
        if (this.playerType === "W")
            return "B"
        if (this.playerType === "B")
            return "W"
    }   

    aiDisplayMove() {
        this.aiDisplay = true;
        this.setState({bValue: ! this.state.bValue});
    }

    aiMakeMove() {
        this.aiDisplay = false;
        makeMove(this, this.aiStart, this.aiDest)
        this.toggleTurn();
        this.updateBackend().then(([result]) => {
            this.update();
        });
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

    togleNav(boolVal) {
        this.navExpanded = boolVal;
        this.setState({bValue: ! this.state.bValue});
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
                                   "player_type":this.playerType,
                                   "defs":{"id_dict":this.idDict, "range_defs":this.rangeDefs}
                                })
        return fetch(`/${this.dataEntry.flask_method}`, {
            method: 'POST',
            body: body
        }).then(response => response.json())
        .then(response => {
            this.ranges = response['ranges']
            this.enemyRanges = response['enemy_ranges'];
            this.specialMoves.update(response['moves']);
            this.gameStatus.update(response['status']);
            this.aiStart = response['ai_start'];
            this.aiDest = response['ai_dest'];
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
                game_name: this.gameName,
                board:this.getBoard(),
                json_records: this.jsonRecords.getRecords(),
                fen_obj: this.fenObj.getData(),
                id_dict: this.idDict,
                range_defs: this.rangeDefs,
                status_obj:this.gameStatus.getStatus()
            })
        })
    }

    save() {
        return Promise.all([this.saveGame()])
    }

    resign() {
        this.gameStatus.update({"status":OVER, "condition":"resigned", "winner":this.getEnemyColor() });
        this.save();
        this.update();
    }

    render() {
        return (
            <>
                <Board gameroot={this} />
                <Header turn={this.turn} 
                        condition={this.gameStatus.condition} 
                        winner={this.gameStatus.winner} />
                {this.specialCase === "promo" && (
                    <Promo gameroot={this} 
                           color={this.getEnemyColor()} 
                           pawnLoc={this.specialMoves.currentDest} />)}
                {(this.aiDisplay && this.specialCase !== "promo") && (
                    <AiDisplay aiStart={this.aiStart} 
                               aiDest={this.aiDest} 
                               aiMakeMove={this.aiMakeMove} />)}
                {this.specialCase === "saving" && (<Saving />)}
                {this.specialCase === "save-success" && (
                    <SaveSuccessfull update={this.update} 
                                     updateSpecialCase={this.updateSpecialCase} />)}
                <RangeDisplayTool board={this.board}
                                  allRanges={{...this.ranges, ...this.enemyRanges}}
                                  rangeDefs={this.rangeDefs} 
                                  idDict={this.idDict}
                                  update={this.update} 
                                  updatePrh={this.updatePrh} />
                <SaveResignTool save={this.save} 
                                update={this.update}
                                resign={this.resign}
                                updateSpecialCase={this.updateSpecialCase} />
                {this.navExpanded && (<NavBar navBarPosTop={0} 
                                              navBarPosLeft={368} 
                                              iconColor="b1faae" 
                                              iconColorHover="b1faae" 
                                              backgroundColor="green" 
                                              backgroundColorSelected="darkgreen" 
                                              border="1px solid darkgreen" />)}
            </>
        )
    }
}