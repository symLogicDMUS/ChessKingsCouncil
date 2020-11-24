import React from "react";
import NavBar from "../NavBar/NavBar";
import { Board } from "./Board/Board";
import { GameRootHeader as Header } from "./Header/GameRootHeader";
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
import { isPawn } from "../helpers/isPawn";
import { SaveAs } from "./Modals/SaveAs";
import { Saving } from "./Modals/Saving";
import { SaveSuccessfull } from "./Modals/SaveSuccessfull";
import { RangeDisplayTool } from "./RangeDisplayTool/RangeDisplayTool";
import { SaveResignTool } from "./SaveResignTool/SaveResignTool";
import { AIDisplay } from "./AI/AIDisplay";
import { makeMove } from "./Move/makeMove";
// import { ConfirmRedirect } from "../NavBar/ConfirmRedirect";
import { gamePageRedirectMessage } from "./sharedData/gamePageRedirectMessage";
import { MessageModal } from "../NavBar/Help/MessageModal";
import { OVER } from "../helpers/gStatusTypes";
import { update } from "../../apiHelpers/update";
import { updateCouncil } from "../../apiHelpers/updateCouncil";
import { saveGame } from "../../API/saveGame";
import "./scss/GameRoot.scss";

class GameRoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bValue: true, messageModal: false, theme: "dark", unsavedChanges: false };
        this.username = this.props.location.state.username;
        this.gameName = this.props.location.state.gameName;
        this.gameType = this.props.location.state.gameType;
        this.playerType = this.props.location.state.playerType;
        this.currentPath = this.props.location.state.currentPath;
        this.gameData = this.props.location.state.gameData;
        this.isCouncil = this.gameType === "council";
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
        // this.unsavedChanges = false;
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
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleMessageModal = this.toggleMessageModal.bind(this);
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

    toggleNav(boolVal) {
        this.navExpanded = boolVal;
        this.setState({ bValue: !this.state.bValue });
    }

    toggleMessageModal(boolVal) {
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
        let turnData;

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
        const pieceId = this.board[dest];
        const fenId = pieceId[1].toLowerCase();

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
    }

    updateFen(start, dest) {
        this.fenObj.update(this.specialMoves, this.jsonRecords, start, dest, this.captured, this.turn);
    }

    save() {
        this.setUnsavedProgress(false);

        const posFen = getFen(this.board);
        const fenData = this.fenObj.getData();
        const fen = getFullFen(posFen, fenData);
        const records = this.jsonRecords.getRecords();
        records["pawn_histories"] = replacePawnIdWithCurrentLoc(records["pawn_histories"]);
        const pieceDefs = gameDefsOffsetListsToStrs(this.pieceDefs);
        const status = this.gameStatus.getStatus();

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
        this.setState({ unsavedChanges: boolVal });
        // this.unsavedChanges = boolVal;
    }

    render() {
        return (
            <>
                {this.state.messageModal && (
                    <MessageModal
                        messageTitle={this.messageTitle}
                        messageText={this.messageText}
                        togleMessageModal={this.toggleMessageModal}
                    />
                )}
                <NavBar currentPage="GameRoot" theme={this.state.theme} unsavedChanges={false} />
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
                    <AIDisplay
                        aiStart={this.aiStart}
                        aiDest={this.aiDest}
                        aiMakeMove={this.aiMakeMove}
                        theme="light"
                    />
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

export default GameRoot;
