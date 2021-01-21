import React from "react";
import MediaQuery from "react-responsive/src";
import {Portal} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import {saveGame} from "../../API/saveGame";
import {StatusBar} from "./StatusBar/StatusBar";
import {Fen} from "../../game_logic/fenParser/Fen";
import {rankfiles} from "../helpers/rankfiles";
import {OVER} from "../helpers/gStatusTypes";
import {isPawn} from "../helpers/isPawn";
import {BoardTool} from "./BoardTool/BoardTool";
import {SaveResignTool} from "./SaveResignTool/SaveResignTool";
import {getBinaryBoarAllFalse} from "../helpers/getBinaryBoardAllFalse";
import {replacePawnIdWithCurrentLoc} from "../helpers/replacePawnIdWithCurrentLoc";
import {gameDefsOffsetListsToStrs} from "../../apiHelpers/gameDefsOffsetListsToStrs";
import {GameStatus} from "../../game_logic/fenParser/GameStatus/GameStatus";
import {JsonRecords} from "../../game_logic/JsonRecords/JsonRecords";
import {SpecialMoves} from "../../game_logic/ranges/specialMoves/SpecialMoves";
import {getFen} from "../../game_logic/fenParser/getFen/top/getFen";
import {kingStartingRf, rookStartingRf} from "../helpers/castleRankfiles";
import {updateCouncil} from "../../game_logic/callHierarchyTop/updateCouncil";
import {getFullFen} from "../../game_logic/fenParser/getFen/getFullFen";
import {initPawnIds} from "../../game_logic/JsonRecords/initPawnIds";
import {update} from "../../game_logic/callHierarchyTop/update";
import {navBarButtonWidth} from "../Reuseables/NavBar/NavBarButton.jss";
import {NavBar} from "../Reuseables/NavBar/NavBar";
import {navBarWidth} from "../Reuseables/NavBar/NavBar.jss";
import {SideBar} from "../Reuseables/SidBar";
import {sideBarWidth} from "../Reuseables/SidBar.jss";
import MuiAccordion from "../Reuseables/MuiAccordion";
import PermanentDrawer from "../Reuseables/PermanentDrawer";
import PersistentDrawer from "../Reuseables/PersistentDrawer";
import {drawerWidth} from "../Reuseables/PermanentDrawer.jss";
import {boardSizes, mobileBoardPadding} from "../Reuseables/Board.jss";
import {Board} from "./GameBoard/Board";
import {GameInfo} from "./GameInfo/GameInfo";
import {fontSize002} from "../styles/fontSize.jss";
import {HelpText, HelpTitle} from "./HelpText";
import "../styles/_backgrounds.scss";
import {styles} from "./GameRoot.jss";
import {getBoardImgBase64Str} from "./GameBoard/getBoardImgBase64Str";
import {modal} from "../helpers/modal.jss";

class GameRoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bValue: true, messageModal: false, saveProcess: false, theme: "dark"};
        this.gameName = this.props.location.state.gameName;
        this.gameType = this.props.location.state.gameType;
        this.playerType = this.props.location.state.playerType;
        this.gameData = this.props.location.state.gameData;
        this.img = this.gameData.img;
        this.ranges = this.gameData.ranges;
        this.board = this.gameData.board;
        this.turn = this.gameData.color;
        this.idDict = this.gameData.id_dict;
        this.defs = this.gameData.piece_defs;
        this.promoChoices = this.gameData.promos;
        this.enemyRanges = this.gameData.enemy_ranges;
        this.playerType = this.gameData.pt; //duplicate?
        this.fenObj = new Fen(this.gameData.fen_data);
        this.gameStatus = new GameStatus(this.gameData.status)
        this.specialMoves = new SpecialMoves(this.gameData.special_moves);
        this.jsonRecords = new JsonRecords(initPawnIds(this.gameData.json_records, this.board));
        this.isCouncil = (this.gameType === "council");
        //Note: do not make these state variables. Multiple changes need to be made BEFORE re-rendering:
        this.aiColor = this.setAiColor();
        this.aiStart = null;
        this.aiDest = null;
        this.aiCapture = null;
        this.unsavedProgress = false;
        this.save = this.save.bind(this);
        this.resign = this.resign.bind(this);
        this.triggerRender = this.triggerRender.bind(this);
        this.toggleSaveProcess = this.toggleSaveProcess.bind(this);
        this.updateTurnData = this.updateTurnData.bind(this);
        this.getRangeBoard = this.getRangeBoard.bind(this);
        this.changeName = this.changeName.bind(this);
    }

    componentDidMount() {
        document.body.className = "dark-background";
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

    setAiColor() {
        if (this.playerType === "test") return "none";
        if (this.playerType === "W") return "B";
        if (this.playerType === "B") return "W";
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

    toggleSaveProcess(bValue) {
        this.setState({saveProcess: bValue})
    }

    /**
     * called after a move is made. update the game logic so know where other player can now move.
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

        if (this.isCouncil)
            this.gameStatus.updateCouncil(
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

    /**
     * update the data that need to keep for Castling, En Passants, and Pawn promotions.
     * @param start
     * @param dest
     */
    updateJsonRecords(start, dest) {
        const pieceId = this.board[dest];
        const fenId = pieceId[1].toLowerCase();

        //if a pawn was captured, delete its history
        if (isPawn(this.captured)) {
            delete this.jsonRecords.pawnHistories[this.captured];
        }

        //if the piece that just moved was a pawn add the destination to its history and restart the non-pawn moves counter.
        //otherwise it wasn't a pawn that moved so add to the counter, then if it was a king or rook (or sub for a rook)
        // that moved from its starting position than record this.
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

    save(pieces) {
        const posFen = getFen(this.board);
        const fenData = this.fenObj.getData();
        const fen = getFullFen(posFen, fenData);
        const boardImgBase64Str = getBoardImgBase64Str(pieces, this.board)
        const records = this.jsonRecords.getRecords();
        records.pawn_histories = replacePawnIdWithCurrentLoc(records.pawn_histories);
        const pieceDefs = gameDefsOffsetListsToStrs(this.defs);
        const status = this.gameStatus.getStatus();

        saveGame(this.gameName, {
            fen: fen,
            status: status,
            img: boardImgBase64Str,
            game_type: this.gameType,
            player_type: this.playerType,
            promos: this.promoChoices,
            json_records: records,
            piece_defs: pieceDefs,
            id_dict: this.idDict,
        }).then(([res]) => {
            this.setUnsavedProgress(false);
            this.setState({isSaveMessage: true, saveProcess: false})
        });
    }

    resign() {
        if (this.gameStatus.status !== OVER) {
            this.gameStatus.updateByObj({
                status: OVER,
                condition: "resigned",
                winner: this.getColorLastMove(),
            });
            this.triggerRender();
        }
    }

    changeName(newName) {
        this.gameName = newName;
    }

    setUnsavedProgress(boolVal) {
        /**Do not make this a state variable*/
        this.unsavedProgress = boolVal;
    }

    render() {
        return (
            <>
                <MediaQuery minDeviceWidth={768}>
                    <PermanentDrawer
                        theme={this.state.theme}
                        width={drawerWidth}
                        drawerType="right"
                        content={
                            <Portal>
                                <Board gameRoot={this}/>
                            </Portal>
                        }
                        appBarContent={
                            <StatusBar
                                turn={this.turn}
                                theme={this.state.theme}
                                condition={this.gameStatus.condition}
                                winner={this.gameStatus.winner}
                            />
                        }
                    >
                        <GameInfo
                            gameName={this.gameName}
                            gameType={this.gameType}
                            playerType={this.playerType}
                            theme={this.state.theme}
                        />
                        <SaveResignTool
                            triggerSaveProcess={() => this.toggleSaveProcess(true)}
                            save={this.save}
                            resign={this.resign}
                            theme={this.state.theme}
                            changeName={this.changeName}
                            isSaveMessage={this.state.isSaveMessage}
                            messageCallback={() => this.setState({isSaveMessage: false})}
                        />
                        <BoardTool
                            board={this.board}
                            theme={this.state.theme}
                            screenCase={'desktop'}
                            pieceDefs={this.defs}
                            idDict={this.idDict}
                            allRanges={{...this.ranges, ...this.enemyRanges}}
                            triggerRender={this.triggerRender}
                        />
                    </PermanentDrawer>
                    <SideBar
                        drawerType="left"
                        theme={this.state.theme}
                        width={sideBarWidth}
                    >
                        <NavBar
                            currentPage="GameRoot"
                            flexDirection="column"
                            theme={this.state.theme}
                            style={{
                                width: navBarWidth,
                                fontSize: fontSize002 * 1.5,
                            }}
                            buttonStyle={{
                                fontSize: fontSize002 * 1.5,
                                justifyContent: "flex-start",
                                width: navBarButtonWidth,
                                height: "2.5em",
                            }}
                            helpTitle={HelpTitle(fontSize002, this.state.theme)}
                            helpText={HelpText(fontSize002, this.state.theme)}
                            isUnsavedChanges={this.isUnsavedChanges}
                        />
                    </SideBar>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={767}>
                    <PersistentDrawer
                        theme={this.state.theme}
                        spacing={mobileBoardPadding}
                        drawer={
                            <NavBar
                                currentPage="GameRoot"
                                flexDirection="column"
                                theme={this.state.theme}
                                style={{width: "100%"}}
                                buttonStyle={{
                                    fontSize: fontSize002 * 1.2,
                                    justifyContent: "flex-start",
                                    width: "99%",
                                    height: "2.5em",
                                }}
                                helpTitle={HelpTitle(fontSize002, this.state.theme)}
                                helpText={HelpText(fontSize002, this.state.theme)}
                                isUnsavedChanges={this.isUnsavedChanges}
                            />
                        }
                        appBarContent={
                            <StatusBar
                                turn={this.turn}
                                theme={this.state.theme}
                                condition={this.gameStatus.condition}
                                winner={this.gameStatus.winner}
                            />
                        }
                    >
                        <Board gameRoot={this}/>
                        <MuiAccordion theme={this.state.theme} rootStyle={{
                            position: 'relative',
                            top: boardSizes.mobile,
                            width: boardSizes.mobile,
                            zIndex: 5
                        }}>
                            {[
                                {
                                    id: "game-info",
                                    title: <Typography>Game Info</Typography>,
                                    body: (
                                        <GameInfo
                                            gameName={this.gameName}
                                            gameType={this.gameType}
                                            playerType={this.playerType}
                                            theme={this.state.theme}
                                        />
                                    ),
                                },
                                {
                                    id: "save-resign",
                                    title: <Typography>Save/Resign</Typography>,
                                    body: (
                                        <SaveResignTool
                                            triggerSaveProcess={() => this.toggleSaveProcess(true)}
                                            save={this.save}
                                            resign={this.resign}
                                            toggleSaveAs={this.toggleSaveAs}
                                            theme={this.state.theme}
                                            messageCallback={() => this.setState({isSaveMessage: false})}
                                        />
                                    ),
                                },
                                {
                                    id: "range-display",
                                    title: (
                                        <Typography>
                                            Range GameBoard
                                        </Typography>
                                    ),
                                    body: (
                                        <BoardTool
                                            board={this.board}
                                            theme={this.state.theme}
                                            screenCase={'mobile'}
                                            allRanges={{
                                                ...this.ranges,
                                                ...this.enemyRanges,
                                            }}
                                            pieceDefs={this.defs}
                                            idDict={this.idDict}
                                            triggerRender={this.triggerRender}
                                        />
                                    ),
                                },
                            ]}
                        </MuiAccordion>
                    </PersistentDrawer>
                </MediaQuery>
            </>
        );
    }
}

export default withStyles(styles)(GameRoot);
