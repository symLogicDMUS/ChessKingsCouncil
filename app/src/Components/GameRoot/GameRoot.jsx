import React from "react";
import MediaQuery from "react-responsive/src";
import withStyles from "@material-ui/core/styles/withStyles";
import {OVER} from "../helpers/gStatusTypes";
import {NavBar} from "../Reuseables/NavBar/NavBar";
import Promo from "./Promo/Promo";
import {isPawn} from "../helpers/isPawn";
import {AIDisplay} from "./AI/AIDisplay";
import {move} from "./Move/move";
import {saveGame} from "../../API/saveGame";
import {SaveAs} from "./SaveResignTool/SaveAs";
import {StatusBar} from "./StatusBar/StatusBar";
import {Fen} from "../../game_logic/fenParser/Fen";
import {update} from "../../game_logic/callHierarchyTop/update";
import {getFen} from "../../game_logic/fenParser/getFen/top/getFen";
import {initPawnIds} from "../../game_logic/JsonRecords/initPawnIds";
import {JsonRecords} from "../../game_logic/JsonRecords/JsonRecords";
import {getFullFen} from "../../game_logic/fenParser/getFen/getFullFen";
import {GameStatus} from "../../game_logic/fenParser/GameStatus/GameStatus";
import {updateCouncil} from "../../game_logic/callHierarchyTop/updateCouncil";
import {SpecialMoves} from "../../game_logic/ranges/specialMoves/SpecialMoves";
import {GameStatusCouncil} from "../../game_logic/council_logic/GameStatusCouncil";
import {replacePawnIdWithCurrentLoc} from "../../game_logic/JsonRecords/replacePawnIdWithCurrentLoc";
import {SaveResignTool} from "./SaveResignTool/SaveResignTool";
import {BoardTool} from "./BoardTool/BoardTool";
import {DisplayMessageOnTimer} from "../Reuseables/DisplayMessageOnTimer";
import {rankfiles} from "../helpers/rankfiles";
import {kingStartingRf, rookStartingRf} from "../helpers/castleRankfiles";
import {gameDefsOffsetListsToStrs} from "../../apiHelpers/gameDefsOffsetListsToStrs";
import MuiAccordion from "../Reuseables/MuiAccordion";
import PermanentDrawer from "../Reuseables/PermanentDrawer";
import PersistentDrawer from "../Reuseables/PersistentDrawer";
import {SideBar} from "../Reuseables/SidBar";
import {navBarWidth} from "../Reuseables/NavBar/NavBar.jss";
import {sideBarWidth} from "../Reuseables/SidBar.jss";
import {drawerWidth} from "../Reuseables/PermanentDrawer.jss";
import {navBarButtonWidth} from "../Reuseables/NavBar/NavBarButton.jss";
import {GameInfo} from "./GameInfo/GameInfo";
import {fontSize} from "../styles/fontSize.jss";
import Typography from "@material-ui/core/Typography";
import {HelpTitle, HelpText} from "./HelpText";
import {Board} from "./GameBoard/Board";
import "../styles/_backgrounds.scss";
import {styles} from "./GameRoot.jss";
import {AnimatePresencePortal} from "../Reuseables/AnimatePresencePortal";
import {PieceSavedSuccessfully} from "../CreatePiece/animations/PieceSavedSuccessfully";
import {getBinaryBoarAllFalse} from "../helpers/getBinaryBoardAllFalse";

class GameRoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bValue: true, messageModal: false, theme: "dark"};
        this.gameName = this.props.location.state.gameName;
        this.gameType = this.props.location.state.gameType;
        this.playerType = this.props.location.state.playerType;
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
        this.defs = this.gameData["piece_defs"];
        this.promoChoices = this.gameData["promos"];
        this.playerType = this.gameData["pt"]; //duplicate?
        this.resigned = this.gameStatus.hasResigned();
        //Note: do not make these state variables. Multiple changes need to be made BEFORE re-rendering:
        this.unsavedProgress = false;
        this.specialCase = "none";
        this.aiDisplay = false;
        this.firstMoveCurrent = true;
        this.firstTime = false;
        // this.aiColor = this.setAiColor();
        this.aiColor = "B";
        this.promo = false;
        this.navExpanded = true;
        this.helpTitle = null;
        this.helpText = null;
        this.hmChildName = null;
        this.hmChildren = {none: null};
        this.confirmRedirectModal = false;
        this.redirectPath = null;
        this.save = this.save.bind(this);
        this.resign = this.resign.bind(this);
        this.triggerRender = this.triggerRender.bind(this);
        this.updateTurnData = this.updateTurnData.bind(this);
        this.updateSpecialCase = this.updateSpecialCase.bind(this);
        this.getRangeBoard = this.getRangeBoard.bind(this);
        this.prepareAiMove = this.prepareAiMove.bind(this);
        this.aiMakeMove = this.aiMakeMove.bind(this);
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

    /**
     * @param pieceId: range of piece with id pieceId
     * @returns binary board where only inRange values set to true
     */
    getRangeBoard(pieceId) {
        if (pieceId[0] !== this.turn) {
            return getBinaryBoarAllFalse()
        }
        let range = this.ranges[pieceId]
        let inRange = rankfiles.filter(rf => range.includes(rf))
        let rangeBoard = getBinaryBoarAllFalse()
        for (let rf of Object.keys(rangeBoard)) {
            rangeBoard[rf] = inRange.includes(rf);
        }
        return rangeBoard;
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
    }

    isAiTurn() {
        return (
            this.aiDisplay &&
            this.aiStart &&
            this.aiDest &&
            this.specialCase !== "promo"
            && !this.isGameOver()
        );
    }

    aiMakeMove() {
        this.aiDisplay = false;
        move(this, this.aiStart, this.aiDest);
        this.toggleTurn();
        this.updateFen(this.aiStart, this.aiDest);
        this.updateTurnData();
        this.triggerRender();
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
        this.setState({bValue: !this.state.bValue});
    }

    updateSpecialCase(specialCase) {
        this.specialCase = specialCase;
    }

    /**
     * called after a move is made.
     * */
    updateTurnData() {
        let turnData;

        if (this.gameType === "council") {
            turnData = updateCouncil(
                this.board,
                this.jsonRecords,
                this.turn,
                this.playerType,
                this.defs,
                this.idDict
            );
        } else {
            turnData = update(
                this.board,
                this.jsonRecords,
                this.turn,
                this.playerType,
                this.defs,
                this.idDict
            );
        }

        this.ranges = turnData.ranges;
        this.enemyRanges = turnData.enemy_ranges;
        this.specialMoves.update(turnData.special_moves);
        this.aiStart = turnData.ai_start;
        this.aiDest = turnData.ai_dest;
        this.updateGameStatus(turnData);
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

    updateGameStatus(turnData) {
        if (this.isCouncil)
            this.gameStatus.update(
                this.board,
                this.ranges,
                this.getColorLastMove(),
                turnData.tal
            );
        else
            this.gameStatus.update(
                this.board,
                this.ranges,
                this.getColorLastMove(),
                turnData.npck
            );
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
        const pieceDefs = gameDefsOffsetListsToStrs(this.defs);
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

    setUnsavedProgress(boolVal) {
        /**Do not make this a state variable*/
        this.unsavedProgress = boolVal;
    }

    modals(screenCase) {
        return (
            <>
                {this.saveAsModal && (
                    <SaveAs
                        save={this.save}
                        togleSaveAs={this.toggleSaveAs}
                        changeName={this.changeName}
                        theme={this.state.theme}
                        triggerRender={this.triggerRender}
                    />
                )}
                {this.specialCase === "promo" && (
                    <Promo
                        board={this.board}
                        idDict={this.idDict}
                        aiColor={this.aiColor}
                        pieceDefs={this.defs}
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
                {this.specialCase === "save-success" && (
                    <AnimatePresencePortal>
                        <PieceSavedSuccessfully
                            callback={() => {
                                this.updateSpecialCase('none')
                                this.triggerRender()
                            }}
                            theme={this.state.theme}
                        />
                    </AnimatePresencePortal>
                )}
            </>
        );
    }

    render() {
        return (
            <>
                <Board gameroot={this} />
                {/*<MediaQuery minDeviceWidth={768}>*/}
                {/*    <PermanentDrawer*/}
                {/*        theme={this.state.theme}*/}
                {/*        width={drawerWidth}*/}
                {/*        drawerType="right"*/}
                {/*        content={*/}
                {/*            <div>*/}
                {/*                <GameBoard gameroot={this} />*/}
                {/*                {this.isAiTurn() && (*/}
                {/*                    <AIDisplay*/}
                {/*                        theme={this.state.theme}*/}
                {/*                        aiStart={this.aiStart}*/}
                {/*                        aiDest={this.aiDest}*/}
                {/*                        aiMakeMove={this.aiMakeMove}*/}
                {/*                    />*/}
                {/*                )}*/}
                {/*            </div>*/}
                {/*        }*/}
                {/*        appBarContent={*/}
                {/*            <StatusBar*/}
                {/*                turn={this.turn}*/}
                {/*                theme={this.state.theme}*/}
                {/*                condition={this.getCondition()}*/}
                {/*                winner={this.gameStatus.winner}*/}
                {/*            />*/}
                {/*        }*/}
                {/*    >*/}
                {/*        <GameInfo*/}
                {/*            gameName={this.gameName}*/}
                {/*            gameType={this.gameType}*/}
                {/*            playerType={this.playerType}*/}
                {/*            theme={this.state.theme}*/}
                {/*        />*/}
                {/*        <SaveResignTool*/}
                {/*            save={this.save}*/}
                {/*            resign={this.resign}*/}
                {/*            toggleSaveAs={this.toggleSaveAs}*/}
                {/*            updateSpecialCase={this.updateSpecialCase}*/}
                {/*            theme={this.state.theme}*/}
                {/*        />*/}
                {/*        <BoardTool*/}
                {/*            board={this.board}*/}
                {/*            theme={this.state.theme}*/}
                {/*            screenCase={'desktop'}*/}
                {/*            allRanges={{ ...this.ranges, ...this.enemyRanges }}*/}
                {/*            pieceDefs={this.pieceDefs}*/}
                {/*            idDict={this.idDict}*/}
                {/*            triggerRender={this.triggerRender}*/}
                {/*        />*/}
                {/*    </PermanentDrawer>*/}
                {/*    <SideBar*/}
                {/*        drawerType="left"*/}
                {/*        theme={this.state.theme}*/}
                {/*        width={sideBarWidth}*/}
                {/*    >*/}
                {/*        <NavBar*/}
                {/*            currentPage="GameRoot"*/}
                {/*            flexDirection="column"*/}
                {/*            theme={this.state.theme}*/}
                {/*            style={{*/}
                {/*                width: navBarWidth,*/}
                {/*                fontSize: fontSize * 1.5,*/}
                {/*            }}*/}
                {/*            buttonStyle={{*/}
                {/*                fontSize: fontSize * 1.5,*/}
                {/*                justifyContent: "flex-start",*/}
                {/*                width: navBarButtonWidth,*/}
                {/*                height: "2.5em",*/}
                {/*            }}*/}
                {/*            helpTitle={HelpTitle(fontSize, this.state.theme)}*/}
                {/*            helpText={HelpText(fontSize, this.state.theme)}*/}
                {/*            redirectMessage={gamePageRedirectMessage}*/}
                {/*            isUnsavedChanges={this.isUnsavedChanges}*/}
                {/*        />*/}
                {/*    </SideBar>*/}
                {/*</MediaQuery>*/}
                {/*<MediaQuery maxDeviceWidth={767}>*/}
                {/*    <PersistentDrawer*/}
                {/*        theme={this.state.theme}*/}
                {/*        drawer={*/}
                {/*            <NavBar*/}
                {/*                currentPage="GameRoot"*/}
                {/*                flexDirection="column"*/}
                {/*                theme={this.state.theme}*/}
                {/*                style={{ width: "100%" }}*/}
                {/*                buttonStyle={{*/}
                {/*                    fontSize: fontSize * 1.2,*/}
                {/*                    justifyContent: "flex-start",*/}
                {/*                    width: "99%",*/}
                {/*                    height: "2.5em",*/}
                {/*                }}*/}
                {/*                helpTitle={HelpTitle(fontSize, this.state.theme)}*/}
                {/*                helpText={HelpText(fontSize, this.state.theme)}*/}
                {/*                redirectMessage={gamePageRedirectMessage}*/}
                {/*                isUnsavedChanges={this.isUnsavedChanges}*/}
                {/*            />*/}
                {/*        }*/}
                {/*        appBarContent={*/}
                {/*            <StatusBar*/}
                {/*                turn={this.turn}*/}
                {/*                theme={this.state.theme}*/}
                {/*                condition={this.getCondition()}*/}
                {/*                winner={this.gameStatus.winner}*/}
                {/*            />*/}
                {/*        }*/}
                {/*    >*/}
                {/*        <GameBoard gameroot={this} />*/}
                {/*        {this.isAiTurn() && (*/}
                {/*            <AIDisplay*/}
                {/*                theme={this.state.theme}*/}
                {/*                aiStart={this.aiStart}*/}
                {/*                aiDest={this.aiDest}*/}
                {/*                aiMakeMove={this.aiMakeMove}*/}
                {/*            />*/}
                {/*        )}*/}
                {/*        <MuiAccordion theme={this.state.theme}>*/}
                {/*            {[*/}
                {/*                {*/}
                {/*                    id: "game-info",*/}
                {/*                    title: <Typography>Game Info</Typography>,*/}
                {/*                    body: (*/}
                {/*                        <GameInfo*/}
                {/*                            gameName={this.gameName}*/}
                {/*                            gameType={this.gameType}*/}
                {/*                            playerType={this.playerType}*/}
                {/*                            theme={this.state.theme}*/}
                {/*                        />*/}
                {/*                    ),*/}
                {/*                },*/}
                {/*                {*/}
                {/*                    id: "save-resign",*/}
                {/*                    title: <Typography>Save/Resign</Typography>,*/}
                {/*                    body: (*/}
                {/*                        <SaveResignTool*/}
                {/*                            save={this.save}*/}
                {/*                            resign={this.resign}*/}
                {/*                            toggleSaveAs={this.toggleSaveAs}*/}
                {/*                            updateSpecialCase={*/}
                {/*                                this.updateSpecialCase*/}
                {/*                            }*/}
                {/*                            theme={this.state.theme}*/}
                {/*                        />*/}
                {/*                    ),*/}
                {/*                },*/}
                {/*                {*/}
                {/*                    id: "range-display",*/}
                {/*                    title: (*/}
                {/*                        <Typography>*/}
                {/*                            Range GameBoard*/}
                {/*                        </Typography>*/}
                {/*                    ),*/}
                {/*                    body: (*/}
                {/*                        <BoardTool*/}
                {/*                            board={this.board}*/}
                {/*                            theme={this.state.theme}*/}
                {/*                            screenCase={'mobile'}*/}
                {/*                            allRanges={{*/}
                {/*                                ...this.ranges,*/}
                {/*                                ...this.enemyRanges,*/}
                {/*                            }}*/}
                {/*                            pieceDefs={this.pieceDefs}*/}
                {/*                            idDict={this.idDict}*/}
                {/*                            triggerRender={this.triggerRender}*/}
                {/*                        />*/}
                {/*                    ),*/}
                {/*                },*/}
                {/*            ]}*/}
                {/*        </MuiAccordion>*/}
                {/*    </PersistentDrawer>*/}
                {/*</MediaQuery>*/}
            </>
        );
    }
}

export default withStyles(styles)(GameRoot);
