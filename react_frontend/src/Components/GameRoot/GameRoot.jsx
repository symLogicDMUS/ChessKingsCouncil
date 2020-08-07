import React from "react";
import {Board} from "./Components/Board";
import {GameRootHeader as Header} from "./Components/GameRootHeader";
import {JsonRecords} from "./sharedData/JsonRecords";
import {GameStatus} from "./sharedData/GameStatus";
import {SpecialMoves} from "./Move/SpecialMoves";
import { Promo } from "./Modals/Promo";
import {Fen} from "./sharedData/Fen";
import {isPawn} from "./gameRootHelpers/isPawn";
import {Saving} from "./Modals/Saving";
import {SaveSuccessfull} from "./Modals/SaveSuccessfull";
import {RangeDisplayTool} from "./Components/RangeDisplayTool";
import { SaveResignTool } from "./Components/SaveResignTool";
import {AiDisplay} from "./Components/AiDisplay";
import {makeMove} from "./Move/makeMove";
import {NavBar} from "../NavBar/NavBarRegular";
import {HelpModal} from "../Help/HelpModal";
import { OVER } from "../helpers/gStatusTypes";
import "./css/GameRoot.css";


export class GameRoot extends React.Component {

    constructor(props) {
        super(props);
        this.state = {bValue:true, isHelpModal:false};
        this.gameName = this.props.location.state.gameName;
        this.gameType = this.props.location.state.gameType;
        this.playerType = this.props.location.state.playerType;
        this.currentPage = this.props.location.state.currentPage;
        this.dataEntry = this.props.location.state.dataEntry;
        this.board = this.dataEntry['board'] 
        this.aiDisplay = false;
        this.jsonRecords = new JsonRecords(this.dataEntry['records']);
        this.gameStatus = new GameStatus(this.dataEntry['status']);
        this.specialMoves = new SpecialMoves(this.dataEntry['moves']);
        this.fenObj = new Fen(this.dataEntry['fen_data']);
        this.turn = this.dataEntry['color']
        this.ranges = this.dataEntry['ranges'];
        this.enemyRanges = this.dataEntry['enemy_ranges'];
        this.idDict = this.dataEntry['id_dict'];
        this.rangeDefs = this.dataEntry['defs']; 
        this.promoChoices = this.dataEntry['promo_choices']; //is undefined to start, bug?
        this.playerType = this.dataEntry['player_type'];
        this.aiColor = this.setAiColor();
        this.promo = false;
        this.navExpanded = true;
        this.first = true;
        this.pieceRangeHighlight = "none";
        this.helpTitle = null;
        this.helpText = null;
        this.hmChildName = null;
        this.hmChildren = {"none":null}
        this.save = this.save.bind(this);
        this.update = this.update.bind(this);
        this.resign = this.resign.bind(this);
        this.updatePrh = this.updatePrh.bind(this);
        this.updateSpecialCase = this.updateSpecialCase.bind(this);
        this.prepareAiMove = this.prepareAiMove.bind(this);
        this.aiMakeMove = this.aiMakeMove.bind(this);
        this.togleNav = this.togleNav.bind(this);
        this.togleHelpModal = this.togleHelpModal.bind(this);
        this.setHelpText = this.setHelpText.bind(this);
    }

    componentDidMount() {
        document.body.className = "game-root-body";
        if (this.first) {
            this.first = false;
            if (this.turn === this.aiColor && ! this.isGameOver()) {
                this.updateBackend().then(([result]) => { 
                    this.prepareAiMove();
                    this.update();
                });
            }
        }
    }

    isGameOver() {
        if (this.gameStatus.gameStatus === OVER)
            return true
        if (this.aiStart === false || this.aiDest === false)
            return true
        return false
    }

    setAiColor() {
        if (this.playerType === "test")
            return "none";
        if (this.playerType === "W")
            return "B"
        if (this.playerType === "B")
            return "W"
    }   

    prepareAiMove() {
        this.aiDisplay = true;
        this.setState({bValue: ! this.state.bValue});
    }

    aiMakeMove() {
        this.aiDisplay = false;
        makeMove(this, this.aiStart, this.aiDest);
        this.toggleTurn();
        this.updateFen(this.aiStart, this.aiDest);
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

    togleHelpModal(boolVal) {
        this.setState({isHelpModal: boolVal})
    }

    getHelpModalChild() {
        return this.hmChildren[this.hmChildName]
    }

    setHelpText(helpTitle, helpText, hmChildName) {
        this.helpTitle = helpTitle;
        this.helpText = helpText;
        this.hmChildName = hmChildName;
    }

    getColorLastMove() {
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

        let flask_method = "update"
        if (this.gameType === "council")
            flask_method = "update_council"


        let body = JSON.stringify({"board":this.getBoard(), 
                                   "records":this.jsonRecords.getRecords(), 
                                   "color":this.getTurn(),
                                   "player_type":this.playerType,
                                   "defs":{"id_dict":this.idDict, "range_defs":this.rangeDefs}
                                })
        return fetch(`/${flask_method}`, {
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

        let pieceId = this.board[dest];
        let fenId = pieceId[1].toLowerCase();

        if (isPawn(this.captured)) {
            delete this.jsonRecords.pawnHistories[this.captured];
        }

        if (fenId === 'p') {
            this.jsonRecords.pawnHistories[pieceId].push(dest);
            this.jsonRecords.numConsecutiveNonPawnMoves = 0;
            this.jsonRecords.lastPawnMove = dest;
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
        this.fenObj.update(this.specialMoves, this.jsonRecords, start, dest, this.captured, this.turn);
    }

    saveGame() {
        return fetch('/save', {
            method:"POST",
            body:JSON.stringify({
                game_name: this.gameName,
                game_type:this.gameType,
                player_type:this.playerType,
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
        if (! this.isGameOver()) {
            this.gameStatus.update({"status":OVER, "condition":"resigned", "winner":this.getColorLastMove() });
            this.update();
        }
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
                           color={this.getColorLastMove()} 
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
                                  updatePrh={this.updatePrh}
                                  togleHelpModal={this.togleHelpModal}
                                  setHelpText={this.setHelpText} />
                <SaveResignTool gameName={this.gameName}
                                gameType={this.gameType}
                                playerType={this.playerType}
                                save={this.save} 
                                update={this.update}
                                resign={this.resign}
                                updateSpecialCase={this.updateSpecialCase} 
                                togleHelpModal={this.togleHelpModal}
                                setHelpText={this.setHelpText}/>
                {this.navExpanded && (<NavBar navBarPosTop={0} 
                                              navBarPosLeft={368} 
                                              iconColor="b1faae" 
                                              iconColorHover="b1faae" 
                                              backgroundColor="green" 
                                              backgroundColorSelected="darkgreen" 
                                              border="1px solid darkgreen"
                                              navBorder={false}
                                              currentPage={this.currentPage}
                                              togleHelpModal={this.togleHelpModal}
                                              setHelpText={this.setHelpText} />)}
                {this.state.isHelpModal && (<HelpModal helpTitle={this.helpTitle} 
                                                       helpText={this.helpText} 
                                                       togleHelpModal={this.togleHelpModal}>
                                                {this.getHelpModalChild()}
                                            </HelpModal> )}
            </>
        )
    }
}