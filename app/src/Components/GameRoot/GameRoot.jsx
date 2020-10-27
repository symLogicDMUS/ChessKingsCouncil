import React from "react";
import { Board } from "./Components/Board";
import { GameRootHeader as Header } from "./Components/GameRootHeader";
import { rook_starting_rf, king_starting_rf } from "./sharedData/castleRankfiles";
import { SpecialMoves } from "../../game_logic/ranges/specialMoves/SpecialMoves";
import { JsonRecords } from "../../game_logic/JsonRecords/JsonRecords";
import { initPawnIds } from "../../game_logic/JsonRecords/initPawnIds";
import { replacePawnIdWithCurrentLoc } from "../../game_logic/JsonRecords/replacePawnIdWithCurrentLoc";
import { GameStatus } from "../../game_logic/fenParser/GameStatus/GameStatus";
import { GameStatusCouncil } from "../../game_logic/council_logic/GameStatusCouncil";
import { Fen } from "../../game_logic/fenParser/Fen";
import { getFen } from "../../game_logic/fenParser/getFen/top/getFen";
import { getFullFen } from "../../game_logic/fenParser/getFen/getFullFen";
import { gameDefsOffsetListsToStrs } from "../../apiHelpers/gameDefsOffsetListsToStrs";
import { Promo } from "./Modals/Promo";
import { isPawn } from "./gameRootHelpers/isPawn";
import { SaveAs } from "./Modals/SaveAs";
import { Saving } from "./Modals/Saving";
import { SaveSuccessfull } from "./Modals/SaveSuccessfull";
import { RangeDisplayTool } from "./Components/RangeDisplayTool";
import { SaveResignTool } from "./Components/SaveResignTool";
import { AiDisplay } from "./Components/AiDisplay";
import { makeMove } from "./Move/makeMove";
import { NavBar } from "../NavBar/NavBar";
import { ConfirmRedirect } from "../NavBar/ConfirmRedirect";
import { gamePageRedirectMessage } from "./sharedData/gamePageRedirectMessage";
import { MessageModal } from "../NavBar/Help/MessageModal";
import { OVER } from "../helpers/gStatusTypes";
import { update } from "../../apiHelpers/update";
import { updateCouncil } from "../../apiHelpers/updateCouncil";
import { saveGame } from "../../API/saveGame";
import "./css/GameRoot.scss";

export class GameRoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bValue: true, messageModal: false, theme: "dark", unsaved: false };
        this.username = this.props.location.state.username;
        this.gameName = this.props.location.state.gameName;
        this.gameType = this.props.location.state.gameType;
        this.playerType = this.props.location.state.playerType;
        this.currentPath = this.props.location.state.currentPath;
        this.gameData = this.props.location.state.gameData;
        this.isCouncil = this.gameType === "council" ? true : false;
        this.board = this.gameData["board"];
        this.jsonRecords = new JsonRecords(initPawnIds(this.gameData["json_records"], this.board));
        if (this.isCouncil) this.gameStatus = new GameStatusCouncil(this.gameData["status"]);
        else this.gameStatus = new GameStatus(this.gameData["status"]);
        this.specialMoves = new SpecialMoves(this.gameData["special_moves"]);
        this.fenObj = new Fen(this.gameData["fen_data"]);
        this.turn = this.gameData["color"];
        this.ranges = this.gameData["ranges"];
        this.enemyRanges = this.gameData["enemy_ranges"];
        this.idDict = this.gameData["id_dict"];
        this.pieceDefs = this.gameData["piece_defs"];
        this.promoChoices = this.gameData["promos"];
        this.playerType = this.gameData["pt"]; //duplicate?
        this.resigned = this.gameStatus.hasResigned();
        this.unsaved = false;
        this.aiDisplay = false;
        this.firstMoveCurrent = true;
        this.firstTime = false;
        this.aiColor = this.setAiColor();
        this.promo = false;
        this.navExpanded = true;
        this.pieceRangeHighlight = "none";
        this.helpTitle = null;
        this.helpText = null;
        this.messageTitle = null;
        this.messageText = null;
        this.hmChildName = null;
        this.hmChildren = { none: null };
        this.confirmRedirectModal = false;
        this.redirectPath = null;
        this.redirectMessage = gamePageRedirectMessage;
        this.save = this.save.bind(this);
        this.update = this.update.bind(this);
        this.resign = this.resign.bind(this);
        this.updatePrh = this.updatePrh.bind(this);
        this.updateTurnData = this.updateTurnData.bind(this);
        this.updateSpecialCase = this.updateSpecialCase.bind(this);
        this.prepareAiMove = this.prepareAiMove.bind(this);
        this.aiMakeMove = this.aiMakeMove.bind(this);
        this.togleNav = this.togleNav.bind(this);
        this.togleMessageModal = this.togleMessageModal.bind(this);
        this.setMessageText = this.setMessageText.bind(this);
        this.setConfirmRedirect = this.setConfirmRedirect.bind(this);
        this.togleSaveAs = this.togleSaveAs.bind(this);
        this.changeName = this.changeName.bind(this);
    }

    componentDidMount() {
        document.body.className = "game-root-body";
        if (this.firstMoveCurrent) {
            this.firstMoveCurrent = false;
            if (this.turn === this.aiColor && !this.isGameOver()) {
                this.updateTurnData();
                this.prepareAiMove();
                this.update();
            }
        }
    }

    isGameOver() {
        if (this.gameStatus.status === OVER) {
            return true;
        } else {
            return false;
        }
    }

    setAiColor() {
        if (this.playerType === "test") return "none";
        if (this.playerType === "W") return "B";
        if (this.playerType === "B") return "W";
    }

    prepareAiMove() {
        /**NOTE: if game over, conditional in render() will prevent the component rendering that makes ai move. */
        this.aiDisplay = true;
        this.setState({ bValue: !this.state.bValue });
    }

    aiMakeMove() {
        this.aiDisplay = false;
        makeMove(this, this.aiStart, this.aiDest);
        this.toggleTurn();
        this.updateFen(this.aiStart, this.aiDest);
        this.updateTurnData();
        this.update();
    }

    getBoard() {
        return this.board;
    }

    getTurn() {
        return this.turn;
    }

    toggleTurn() {
        if (this.turn === "W") {
            this.turn = "B";
        } else if (this.turn === "B") {
            this.turn = "W";
        } else {
            console.log("color error");
        }
    }

    togleNav(boolVal) {
        this.navExpanded = boolVal;
        this.setState({ bValue: !this.state.bValue });
    }

    togleMessageModal(boolVal) {
        this.setState({ messageModal: boolVal });
    }

    setMessageText(helpTitle, helpText) {
        this.messageTitle = helpTitle;
        this.messageText = helpText;
        this.setState({ messageModal: true });
    }

    getCondition() {
        if (this.resigned) return "resigned";
        else return this.gameStatus.condition;
    }

    getColorLastMove() {
        if (this.turn === "W") {
            return "B";
        } else {
            return "W";
        }
    }

    update() {
        this.setState({ bValue: !this.state.bValue });
    }

    updateSpecialCase(case_) {
        this.specialCase = case_;
    }

    updatePrh(pieceRangeHighlight) {
        this.pieceRangeHighlight = pieceRangeHighlight;
    }

    updateTurnData() {
        /**called after a move is made.*/

        var turnData;

        if (this.gameType === "council") {
            turnData = updateCouncil(
                this.board,
                this.jsonRecords,
                this.turn,
                this.playerType,
                this.pieceDefs,
                this.idDict
            );
        } else {
            turnData = update(this.board, this.jsonRecords, this.turn, this.playerType, this.pieceDefs, this.idDict);
        }

        this.ranges = turnData["ranges"];
        this.enemyRanges = turnData["enemy_ranges"];
        this.specialMoves.update(turnData["special_moves"]);
        this.aiStart = turnData["ai_start"];
        this.aiDest = turnData["ai_dest"];
        if (this.isCouncil) this.gameStatus.update(this.board, this.ranges, this.getColorLastMove(), turnData["tal"]);
        else this.gameStatus.update(this.board, this.ranges, this.getColorLastMove(), turnData["npck"]);
    }

    updateJsonRecords(start, dest) {
        var pieceId = this.board[dest];
        var fenId = pieceId[1].toLowerCase();

        if (isPawn(this.captured)) {
            delete this.jsonRecords.pawnHistories[this.captured];
        }

        if (fenId === "p") {
            this.jsonRecords.pawnHistories[pieceId].push(dest);
            this.jsonRecords.numConsecutiveNonPawnMoves = 0;
        } else {
            this.jsonRecords.numConsecutiveNonPawnMoves++;
            if (fenId === "k" && king_starting_rf.includes(start)) this.jsonRecords.kingsMoved[start] = true;
            if (fenId === "r" && rook_starting_rf.includes(start)) this.jsonRecords.rooksMoved[start] = true;
        }

        return;
    }

    updateFen(start, dest) {
        this.fenObj.update(this.specialMoves, this.jsonRecords, start, dest, this.captured, this.turn);
    }

    save() {
        this.setUnsavedProgress(false);

        var posFen = getFen(this.board);
        var fenData = this.fenObj.getData();
        var fen = getFullFen(posFen, fenData);
        var records = this.jsonRecords.getRecords();
        records["pawn_histories"] = replacePawnIdWithCurrentLoc(records["pawn_histories"]);
        var pieceDefs = gameDefsOffsetListsToStrs(this.pieceDefs);
        var status = this.gameStatus.getStatus();

        saveGame(this.gameName, {
            fen: fen,
            status: status,
            game_type: this.gameType,
            player_type: this.playerType,
            promos: this.promoChoices,
            json_records: records,
            piece_defs: pieceDefs,
            id_dict: this.idDict,
        });
    }

    resign() {
        if (!this.isGameOver()) {
            this.gameStatus.updateByObj({ status: OVER, condition: "resigned", winner: this.getColorLastMove() });
            this.update();
        }
    }

    togleSaveAs(boolVal) {
        this.saveAsModal = boolVal;
    }

    changeName(newName) {
        this.gameName = newName;
    }

    setConfirmRedirect(boolVal, path) {
        this.confirmRedirectModal = boolVal;
        this.redirectPath = path;
        this.update();
    }

    setUnsavedProgress(boolVal) {
        this.setState({ unsaved: boolVal });
        this.unsaved = boolVal;
    }

    render() {
        return (
            <>
                {this.state.messageModal && (
                    <MessageModal
                        messageTitle={this.messageTitle}
                        messageText={this.messageText}
                        togleMessageModal={this.togleMessageModal}
                    />
                )}
                <NavBar currentPage="GameRoot" theme={this.state.theme} unsaved={false} />
                <Header turn={this.turn} condition={this.getCondition()} winner={this.gameStatus.winner} />
                <Board gameroot={this} />
                {this.specialCase === "promo" && (
                    <Promo
                        promoChoices={this.promoChoices}
                        board={this.board}
                        jsonRecords={this.jsonRecords}
                        idDict={this.idDict}
                        pieceDefs={this.pieceDefs}
                        isCouncil={this.isCouncil}
                        updateTurnData={this.updateTurnData}
                        updateSpecialCase={this.updateSpecialCase}
                        update={this.update}
                        color={this.getColorLastMove()}
                        aiColor={this.aiColor}
                        pawnLoc={this.specialMoves.pendingPromo}
                    />
                )}
                {this.aiDisplay && this.specialCase !== "promo" && !this.isGameOver() && (
                    <AiDisplay aiStart={this.aiStart} aiDest={this.aiDest} aiMakeMove={this.aiMakeMove} theme="light" />
                )}
                <RangeDisplayTool
                    board={this.board}
                    allRanges={{ ...this.ranges, ...this.enemyRanges }}
                    pieceDefs={this.pieceDefs}
                    idDict={this.idDict}
                    update={this.update}
                    updatePrh={this.updatePrh}
                />
                <SaveResignTool
                    gameName={this.gameName}
                    gameType={this.gameType}
                    playerType={this.playerType}
                    save={this.save}
                    update={this.update}
                    resign={this.resign}
                    updateSpecialCase={this.updateSpecialCase}
                    togleSaveAs={this.togleSaveAs}
                />
                {this.saveAsModal && (
                    <SaveAs
                        togleSaveAs={this.togleSaveAs}
                        changeName={this.changeName}
                        update={this.update}
                        save={this.save}
                    />
                )}
                {this.specialCase === "saving" && <Saving />}
                {this.specialCase === "save-success" && (
                    <SaveSuccessfull update={this.update} updateSpecialCase={this.updateSpecialCase} />
                )}
            </>
        );
    }
}
