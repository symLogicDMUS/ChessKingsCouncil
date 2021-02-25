import React from "react";
import {Portal} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import MediaQuery from "react-responsive/src";
import {saveGame} from "../../API/saveGame";
import {rankfiles} from "../helpers/rankfiles";
import {OVER} from "../helpers/gStatusTypes";
import {isPawn} from "../helpers/isPawn";
import {getBinaryBoarAllFalse} from "../helpers/getBinaryBoardAllFalse";
import {replacePawnIdWithCurrentLoc} from "../helpers/replacePawnIdWithCurrentLoc";
import {gameDefsOffsetListsToStrs} from "../../apiHelpers/gameDefsOffsetListsToStrs";
import {getFen} from "../../game_logic/fenParser/getFen/top/getFen";
import {kingStartingRf, rookStartingRf} from "../helpers/castleRankfiles";
import {updateCouncil} from "../../game_logic/callHierarchyTop/updateCouncil";
import {getFullFen} from "../../game_logic/fenParser/getFen/getFullFen";
import {initPawnIds} from "../../game_logic/JsonRecords/initPawnIds";
import {update} from "../../game_logic/callHierarchyTop/update";
import {Board} from "./GameBoard/Board";
import {GameInfo} from "./GameInfo/GameInfo";
import {BoardTool} from "./BoardTool/BoardTool";
import {SaveResignTool} from "./SaveResignTool/SaveResignTool";
import {Fen} from "../../game_logic/fenParser/Fen";
import {GameStatus} from "../../game_logic/fenParser/GameStatus/GameStatus";
import {SpecialMoves} from "../../game_logic/ranges/specialMoves/SpecialMoves";
import {JsonRecords} from "../../game_logic/JsonRecords/JsonRecords";
import {NavBar} from "../Reuseables/NavBar/NavBar";
import {SideBar} from "../Reuseables/SidBar";
import {StatusBar} from "./StatusBar/StatusBar";
import MuiAccordion from "../Reuseables/MuiAccordion";
import PermanentDrawer from "../Reuseables/PermanentDrawer";
import PersistentDrawer from "../Reuseables/PersistentDrawer";
import {getBoardImgBase64Str} from "./GameBoard/getBoardImgBase64Str";
import {CapturedPieceImages} from "./CapturedPieceImg/CapturedPieceImages";
import {fontSize002, fontSizeW0045} from "../styles/fontSizes.jss";
import {HelpTitle} from "../Reuseables/HelpTitle";
import {HelpText} from "./Help/HelpText";
import "../styles/_backgrounds.scss";
import {copy} from "../helpers/copy";
import {newData} from "../NewGame/NewData";
import {getPieceImg} from "../MyPieces/getPieceImg";
import {boardSizes} from "../Reuseables/Board.jss";
import {accordion_root, styles} from "./GameRoot.jss";

class GameRoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bValue: true,
            messageModal: false,
            saveProcess: false,
            theme: "dark",
        };
        this.unsavedProgress = false;
        this.gameName = this.props.location.state.gameName;
        this.gameType = this.props.location.state.gameType;
        this.playerType = this.props.location.state.playerType;
        let gameData;
        if (this.gameType === "Custom" || (this.props.location.state.currentPath === "/LoadGame")) {
            gameData = this.props.location.state.gameData;
        } else {
            gameData = copy(newData);
        }
        this.img = gameData.img;
        this.board = gameData.board;
        this.turn = gameData.color;
        this.fenObj = new Fen(gameData.fen_data);
        this.gameStatus = new GameStatus(gameData.status);
        this.specialMoves = new SpecialMoves(gameData.special_moves);
        this.jsonRecords = new JsonRecords(
            initPawnIds(gameData.json_records, this.board)
        );
        this.idDict = gameData.id_dict;
        this.defs = gameData.piece_defs;
        this.ranges = gameData.ranges;
        this.promoChoices = gameData.promos;
        this.enemyRanges = gameData.enemy_ranges;
        this.capturedIds = gameData.captured;
        if (! this.capturedIds) this.capturedIds = copy(newData.captured)
        if (! this.capturedIds.W) this.capturedIds.W = []
        if (! this.capturedIds.B) this.capturedIds.B = []
        this.capturedDict = {
            W: this.capturedIds.W.map(id => getPieceImg(id, this.idDict, this.defs)),
            B: this.capturedIds.B.map(id => getPieceImg(id, this.idDict, this.defs)),
        }
        this.captured = ''
        if (this.playerType === "Test") this.aiColor = "none";
        else if (this.playerType === "W") this.aiColor =  "B";
        else if (this.playerType === "B") this.aiColor =  "W";
        if (this.gameType === "council") this.promoChoices.push("King");
        this.aiStart = null;
        this.aiDest = null;
        this.aiCapture = null;
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
            return getBinaryBoarAllFalse();
        }
        let range = this.ranges[pieceId];
        let inRange = rankfiles.filter((rf) => range.includes(rf));
        let rangeBoard = getBinaryBoarAllFalse();
        for (let rf of Object.keys(rangeBoard)) {
            rangeBoard[rf] = inRange.includes(rf);
        }
        return rangeBoard;
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
        this.setState({saveProcess: bValue});
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

        if (this.gameType === "council")
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
        const boardImgBase64Str = getBoardImgBase64Str(pieces, this.board);
        const records = this.jsonRecords.getRecords();
        records.pawn_histories = replacePawnIdWithCurrentLoc(
            records.pawn_histories
        );
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
            captured: this.capturedIds,
        }).then(([res]) => {
            this.setUnsavedProgress(false);
            this.setState({isSaveMessage: true, saveProcess: false});
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
                <MediaQuery minDeviceWidth={1040}>
                    <PermanentDrawer
                        theme={this.state.theme}
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
                            triggerSaveProcess={() =>
                                this.toggleSaveProcess(true)
                            }
                            save={this.save}
                            resign={this.resign}
                            theme={this.state.theme}
                            changeName={this.changeName}
                            isSaveMessage={this.state.isSaveMessage}
                            messageCallback={() =>
                                this.setState({isSaveMessage: false})
                            }
                        />
                        <BoardTool
                            board={this.board}
                            theme={this.state.theme}
                            pieceDefs={this.defs}
                            idDict={this.idDict}
                            start={this.aiStart}
                            screenCase='desktop'
                            allRanges={{...this.ranges, ...this.enemyRanges}}
                            triggerRender={this.triggerRender}
                        />
                        <CapturedPieceImages theme={this.state.theme} capturedDict={this.capturedDict} />
                    </PermanentDrawer>
                    <SideBar
                        drawerType="left"
                        theme={this.state.theme}
                    >
                        <NavBar
                            currentPage="GameRoot"
                            theme={this.state.theme}
                            screenCase='desktop'
                            helpTitle={<HelpTitle theme={this.state.theme}>Playing a Game</HelpTitle>}
                            helpText={HelpText(fontSize002, this.state.theme)}
                            isUnsavedChanges={this.isUnsavedChanges}
                        />
                    </SideBar>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1040}>
                    <PersistentDrawer
                        theme={this.state.theme}
                        spacing={0}
                        drawer={
                            <NavBar
                                currentPage="GameRoot"
                                screenCase='mobile'
                                theme={this.state.theme}
                                helpText={HelpText(fontSizeW0045, this.state.theme)}
                                helpTitle={<HelpTitle theme={this.state.theme}>Playing a Game</HelpTitle>}
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
                        <MuiAccordion
                            theme={this.state.theme}
                            rootStyle={accordion_root()}
                            neighborContentSize={boardSizes.mobile}
                        >
                            {[
                                {
                                    id: "game-info",
                                    title: 'Game Info',
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
                                    title: 'Save / Resign',
                                    body: (
                                        <SaveResignTool
                                            triggerSaveProcess={() =>
                                                this.toggleSaveProcess(true)
                                            }
                                            save={this.save}
                                            resign={this.resign}
                                            theme={this.state.theme}
                                            changeName={this.changeName}
                                            isSaveMessage={this.state.isSaveMessage}
                                            messageCallback={() =>
                                                this.setState({
                                                    isSaveMessage: false,
                                                })
                                            }
                                        />
                                    ),
                                },
                                {
                                    id: "range-display",
                                    title: 'Range Display Board',
                                    body: (
                                        <BoardTool
                                            board={this.board}
                                            theme={this.state.theme}
                                            screenCase='mobile'
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
