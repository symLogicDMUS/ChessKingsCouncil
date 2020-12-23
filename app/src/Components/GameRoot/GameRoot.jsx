import React from "react";
import ReactDOM from "react-dom";
import { OVER } from "../helpers/gStatusTypes";
import { NavBar } from "../NavBar/NavBar";
import Promo from "./Promo/Promo";
import { isPawn } from "../helpers/isPawn";
import { AIDisplay } from "./AI/AIDisplay";
import { makeMove } from "./Move/makeMove";
import { update } from "../../game_logic/callHierarchyTop/update";
import { saveGame } from "../../API/saveGame";
import { SaveAs } from "./SaveResignTool/SaveAs";
import { Board } from "./Board/Board";
import { Fen } from "../../game_logic/fenParser/Fen";
import { JsonRecords } from "../../game_logic/JsonRecords/JsonRecords";
import { SpecialMoves } from "../../game_logic/ranges/specialMoves/SpecialMoves";
import { GameStatus } from "../../game_logic/fenParser/GameStatus/GameStatus";
import { GameStatusCouncil } from "../../game_logic/council_logic/GameStatusCouncil";
import { MessageModal } from "../NavBar/Help/MessageModal";
import { updateCouncil } from "../../game_logic/callHierarchyTop/updateCouncil";
import { GameRootHeader as Header } from "./Header/GameRootHeader";
import { SaveResignTool } from "./SaveResignTool/SaveResignTool";
import { RangeDisplayTool } from "./RangeDisplayTool/RangeDisplayTool";
import { DisplayMessageOnTimer } from "../Reuseables/DisplayMessageOnTimer";
import { rookStartingRf, kingStartingRf } from "./sharedData/castleRankfiles";
import { initPawnIds } from "../../game_logic/JsonRecords/initPawnIds";
import { getFen } from "../../game_logic/fenParser/getFen/top/getFen";
import { getFullFen } from "../../game_logic/fenParser/getFen/getFullFen";
import { gameDefsOffsetListsToStrs } from "../../apiHelpers/gameDefsOffsetListsToStrs";
import { gamePageRedirectMessage } from "./sharedData/gamePageRedirectMessage";
import { replacePawnIdWithCurrentLoc } from "../../game_logic/JsonRecords/replacePawnIdWithCurrentLoc";
import withStyles from "@material-ui/core/styles/withStyles";
import PermanentDrawer from "../Reuseables/PermanentDrawer";
import { SideBar } from "../Reuseables/SidBar";
import { fontSize } from "../styles/fontSize.jss";
import "../styles/_backgrounds.scss";
import { drawerWidth, sideBarWidth, styles } from "./GameRoot.jss";

class GameRoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bValue: true, messageModal: false, theme: "dark" };
        this.username = this.props.location.state.username;
        this.gameName = this.props.location.state.gameName;
        this.gameType = this.props.location.state.gameType;
        this.playerType = this.props.location.state.playerType;
        this.currentPath = this.props.location.state.currentPath;
        this.gameData = this.props.location.state.gameData;
        this.isCouncil = this.gameType === "council";
        this.board = this.gameData["board"];
        this.jsonRecords = new JsonRecords(
            initPawnIds(this.gameData["json_records"], this.board)
        );
        if (this.isCouncil)
            this.gameStatus = new GameStatusCouncil(this.gameData["status"]);
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
        //Note: do not make these state variable. Multiple changes need to be made BEFORE re-rendering:
        this.unsavedProgress = false;
        this.specialCase = "none";
        this.aiDisplay = false;
        this.firstMoveCurrent = true;
        this.firstTime = false;
        this.aiColor = this.setAiColor();
        this.promo = false;
        this.navExpanded = true;
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
        this.triggerRender = this.triggerRender.bind(this);
        this.resign = this.resign.bind(this);
        this.updateTurnData = this.updateTurnData.bind(this);
        this.updateSpecialCase = this.updateSpecialCase.bind(this);
        this.prepareAiMove = this.prepareAiMove.bind(this);
        this.aiMakeMove = this.aiMakeMove.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleMessageModal = this.toggleMessageModal.bind(this);
        this.setMessageText = this.setMessageText.bind(this);
        this.setConfirmRedirect = this.setConfirmRedirect.bind(this);
        this.toggleSaveAs = this.toggleSaveAs.bind(this);
        this.changeName = this.changeName.bind(this);
    }

    componentDidMount() {
        document.body.className = "dark-background";
        if (this.firstMoveCurrent) {
            this.firstMoveCurrent = false;
            if (this.turn === this.aiColor && !this.isGameOver()) {
                this.updateTurnData();
                this.prepareAiMove();
                this.triggerRender();
            }
        }
    }

    isGameOver() {
        return this.gameStatus.status === OVER;
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
        this.triggerRender();
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

    triggerRender() {
        this.setState({ bValue: !this.state.bValue });
    }

    updateSpecialCase(specialCase) {
        this.specialCase = specialCase;
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
            turnData = update(
                this.board,
                this.jsonRecords,
                this.turn,
                this.playerType,
                this.pieceDefs,
                this.idDict
            );
        }

        this.ranges = turnData["ranges"];
        this.enemyRanges = turnData["enemy_ranges"];
        this.specialMoves.update(turnData["special_moves"]);
        this.aiStart = turnData["ai_start"];
        this.aiDest = turnData["ai_dest"];
        if (this.isCouncil)
            this.gameStatus.update(
                this.board,
                this.ranges,
                this.getColorLastMove(),
                turnData["tal"]
            );
        else
            this.gameStatus.update(
                this.board,
                this.ranges,
                this.getColorLastMove(),
                turnData["npck"]
            );
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
            if (fenId === "k" && kingStartingRf.includes(start))
                this.jsonRecords.kingsMoved[start] = true;
            if (fenId === "r" && rookStartingRf.includes(start))
                this.jsonRecords.rooksMoved[start] = true;
        }
    }

    updateFen(start, dest) {
        this.fenObj.update(
            this.specialMoves,
            this.jsonRecords,
            start,
            dest,
            this.captured,
            this.turn
        );
    }

    save() {
        this.setUnsavedProgress(false);

        const posFen = getFen(this.board);
        const fenData = this.fenObj.getData();
        const fen = getFullFen(posFen, fenData);
        const records = this.jsonRecords.getRecords();
        records["pawn_histories"] = replacePawnIdWithCurrentLoc(
            records["pawn_histories"]
        );
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
        }).then(([res]) => {
            this.updateSpecialCase("save-success");
        });
    }

    resign() {
        if (!this.isGameOver()) {
            this.gameStatus.updateByObj({
                status: OVER,
                condition: "resigned",
                winner: this.getColorLastMove(),
            });
            this.triggerRender();
        }
    }

    toggleSaveAs(boolVal) {
        this.saveAsModal = boolVal;
    }

    changeName(newName) {
        this.gameName = newName;
    }

    setConfirmRedirect(boolVal, path) {
        this.confirmRedirectModal = boolVal;
        this.redirectPath = path;
        this.triggerRender();
    }

    setUnsavedProgress(boolVal) {
        /**Do not make this a state variable*/
        this.unsavedProgress = boolVal;
    }

    render() {
        return (
            <div>
                {this.state.messageModal && (
                    <MessageModal
                        theme={this.state.theme}
                        messageTitle={this.messageTitle}
                        messageText={this.messageText}
                        togleMessageModal={this.toggleMessageModal}
                    />
                )}
                <PermanentDrawer
                    title={`${this.gameName}`}
                    theme={this.state.theme}
                    width={drawerWidth}
                    drawerType="right"
                    content={
                        <div>
                            <Header
                                turn={this.turn}
                                condition={this.getCondition()}
                                winner={this.gameStatus.winner}
                            />
                            <Board
                                gameroot={{
                                    board: this.board,
                                    theme: this.state.theme,
                                    specialMoves: this.specialMoves,
                                    jsonRecords: this.jsonRecords,
                                    toggleTurn: this.toggleTurn,
                                    updateFen: this.updateFen,
                                    setUnsavedProgress: this.setUnsavedProgress,
                                    updateTurnData: this.updateTurnData,
                                    prepareAiMove: this.prepareAiMove,
                                    updateJsonRecords: this.updateJsonRecords,
                                    updateSpecialCase: this.updateSpecialCase,
                                }}
                            />
                            {this.specialCase === "promo" && (
                                <Promo
                                    board={this.board}
                                    idDict={this.idDict}
                                    aiColor={this.aiColor}
                                    pieceDefs={this.pieceDefs}
                                    isCouncil={this.isCouncil}
                                    jsonRecords={this.jsonRecords}
                                    color={this.getColorLastMove()}
                                    promoChoices={this.promoChoices}
                                    triggerRender={this.triggerRender}
                                    updateTurnData={this.updateTurnData}
                                    pawnLoc={this.specialMoves.pendingPromo}
                                    updateSpecialCase={this.updateSpecialCase}
                                />
                            )}
                            {this.aiDisplay &&
                                this.specialCase !== "promo" &&
                                !this.isGameOver() && (
                                    <AIDisplay
                                        theme={this.state.theme}
                                        aiStart={this.aiStart}
                                        aiDest={this.aiDest}
                                        aiMakeMove={this.aiMakeMove}
                                    />
                                )}
                            {this.saveAsModal && (
                                <SaveAs
                                    togleSaveAs={this.toggleSaveAs}
                                    changeName={this.changeName}
                                    triggerRender={this.triggerRender}
                                    save={this.save}
                                />
                            )}
                            {this.specialCase === "save-success" && (
                                <DisplayMessageOnTimer
                                    methodToCallOnFinish={
                                        this.updateSpecialCase
                                    }
                                    valueToSendOnFinish="none"
                                />
                            )}
                        </div>
                    }
                >
                    <RangeDisplayTool
                        theme={this.state.theme}
                        board={this.board}
                        allRanges={{ ...this.ranges, ...this.enemyRanges }}
                        pieceDefs={this.pieceDefs}
                        idDict={this.idDict}
                        triggerRender={this.triggerRender}
                    />
                    <SaveResignTool
                        gameName={this.gameName}
                        gameType={this.gameType}
                        playerType={this.playerType}
                        save={this.save}
                        resign={this.resign}
                        updateSpecialCase={this.updateSpecialCase}
                        toggleSaveAs={this.toggleSaveAs}
                    />
                </PermanentDrawer>
                <SideBar
                    theme={this.state.theme}
                    drawerType="left"
                    width={sideBarWidth}
                >
                    <NavBar
                        currentPage="GameRoot"
                        flexDirection="column"
                        buttonStyle={{
                            fontSize: fontSize,
                            width: drawerWidth * 0.98 * 0.98,
                            justifyContent: "flex-start",
                        }}
                        style={{ width: drawerWidth * 0.98 }}
                        redirectMessage={gamePageRedirectMessage}
                        unsavedChanges={this.state.unsavedChanges}
                        theme={this.state.theme}
                    />
                </SideBar>
            </div>
        );
    }
}

export default withStyles(styles)(GameRoot);
