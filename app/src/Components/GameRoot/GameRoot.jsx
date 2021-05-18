import React from "react";
import {copy} from "../helpers/copy";
import "../styles/Background/_backgrounds.scss";
import withStyles from "@material-ui/core/styles/withStyles";
import MediaQuery from "react-responsive/src";
import {saveGame} from "../../API/saveGame";
import {rankfiles} from "../helpers/rankfiles";
import {OVER} from "../helpers/gStatusTypes";
import {isPawn} from "../helpers/isPawn";
import {doNothing} from "../helpers/doNothing";
import {flipKeysValues} from "../helpers/flipKeysValues";
import {getFen} from "../../game_logic/fenParser/getFen/top/getFen";
import {getBinaryBoarAllFalse} from "../helpers/getBinaryBoardAllFalse";
import {replacePawnIdWithCurrentLoc} from "../helpers/replacePawnIdWithCurrentLoc";
import {kingStartingRf, rookStartingRf} from "../helpers/castleRankfiles";
import {updateCouncil} from "../../game_logic/callHierarchyTop/updateCouncil";
import {getFullFen} from "../../game_logic/fenParser/getFen/getFullFen";
import {initPawnIds} from "../../game_logic/JsonRecords/initPawnIds";
import {update} from "../../game_logic/callHierarchyTop/update";
import {incrementImgRefCounts} from "../../API/incrementImgRefCounts";
import {updateCountsOnOverwrite} from "../../API/updateCountsOnOverwrite";
import {AnimatePresencePortal} from "../Reuseables/Animations/AnimatePresencePortal";
import {GameSavedSuccessfully} from "../Reuseables/Animations/GameSavedSuccessfully";
import {gameDefsOffsetListsToStrs} from "../../API/apiHelpers/gameDefsOffsetListsToStrs";
import {standardPieceDefs} from "../NewGame/standardPieceDefs";
import {getGameImgUrlStrs} from "../../API/getGameImgUrlStrs";
import {getDoesGameExist} from "../../API/getDoesGameExist";
import {MuiSwitch} from "../Reuseables/Clickables/MuiSwitch";
import {ShowProfileOnClick} from "./RangeAnalysis/ShowProfileOnClick";
import {CapturedPieceImages} from "./CapturedPieceImg/CapturedPieceImages";
import {GameStatus} from "../../game_logic/fenParser/GameStatus/GameStatus";
import {SpecialMoves} from "../../game_logic/ranges/specialMoves/SpecialMoves";
import {JsonRecords} from "../../game_logic/JsonRecords/JsonRecords";
import {HelpTitle} from "../Reuseables/NavBar/Help/HelpTitle";
import {PlayingGameHelp} from "./Help/PlayingGameHelp";
import {filterSamples} from "../../API/filterSamples";
import {Fen} from "../../game_logic/fenParser/Fen";
import AskLoginButton from "../Home/AskLoginButton";
import GameRootToolbar from "./GameRootToolbar";
import {UserContext} from "../../UserContext";
import {ThemeContext} from "../ThemeContext";
import {newData} from "../NewGame/NewData";
import {styles} from "./GameRoot.jss";

const Board = React.lazy(() => import('./GameBoard/Board'));
const NavBar = React.lazy(() => import('../Reuseables/NavBar/NavBar'));
const StatusBar = React.lazy(() => import('./Title/StatusBar'));
const GameInfo = React.lazy(() => import('./GameInfo/GameInfo'));
const ToolButton = React.lazy(() => import('../Reuseables/MiniVariantTool/ToolButton'));
const SaveResignTool = React.lazy(() => import('./SaveResignTool/SaveResignTool'));
const RangeAnalysis = React.lazy(() => import('./RangeAnalysis/RangeAnalysis'));
const ResponsiveDrawer = React.lazy(() => import('../Reuseables/Drawers/ResponsiveDrawer'));


class GameRoot extends React.Component {
    constructor(props) {
        super(props);
        this.gameName = this.props.location.state.gameName;
        this.gameType = this.props.location.state.gameType;
        this.playerType = this.props.location.state.playerType;
        this.parentPage = this.props.location.state.currentPath;
        let gameData;
        if (
            this.gameType === "Custom" ||
            this.parentPage === "/LoadGame"
        ) {
            gameData = this.props.location.state.gameData;
        } else {
            gameData = {
                ...copy(newData),
                defs: copy(standardPieceDefs),
            };
        }
        this.board = gameData.board;
        this.imgUrlStrs = gameData.imgUrlStrs;
        this.fenObj = new Fen(gameData.fenData);
        this.turn =this.fenObj.turn.toUpperCase();
        this.gameStatus = new GameStatus(gameData.status);
        this.specialMoves = new SpecialMoves(gameData.specialMoves);
        this.jsonRecords = new JsonRecords(
            initPawnIds(gameData.json, this.board)
        );
        this.idDict = gameData.ids;
        this.defs = gameData.defs;
        this.ranges = gameData.ranges;
        this.promoChoices = gameData.promos;
        this.enemyRanges = gameData.enemyRanges;
        this.capturedIds = gameData.captured;
        this.pieceDict = flipKeysValues(this.idDict);
        if (!this.capturedIds) this.capturedIds = copy(newData.captured);
        if (!this.capturedIds.W) this.capturedIds.W = [];
        if (!this.capturedIds.B) this.capturedIds.B = [];
        this.captured = "";
        if (this.playerType === "Test") this.aiColor = "none";
        else if (this.playerType === "W") this.aiColor = "B";
        else if (this.playerType === "B") this.aiColor = "W";
        if (this.gameType === "council") this.promoChoices.push("King");
        this.aiStart = null;
        this.aiDest = null;
        this.aiCapture = null;
    }

    state = {
        bValue: true,
        rangeAnalysis: false,
        saveAnimation: false,
        resignModal: false,
        messageModal: false,
        secondaryDrawer: false,
        showProfileOnClick: true,
    };
    unsavedProgress = false;

    static contextType = UserContext;

    /**
     * called after a move is made. update the game reducers so know where other player can now move.
     * */
    updateTurnData = () => {
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
        this.enemyRanges = turnData.enemyRanges;
        this.specialMoves.update(turnData.specialMoves);

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
    updateJsonRecords = (start, dest) => {
        const pieceId = this.board[dest];
        const fenId = pieceId[1].toLowerCase();

        //if a pawn was captured, delete its history
        if (isPawn(this.captured)) {
            delete this.jsonRecords.pawnHistories[this.captured];
        }

        /* if the piece that just moved was a pawn add the destination to its history and restart the non-pawn moves counter.
         * otherwise it wasn't a pawn that moved so add to the counter, then if it was a king or rook (or sub for a rook)
         * that moved from its starting position than record this.
         * */
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

    updateFen = (start, dest) => {
        this.fenObj.update(
            this.specialMoves,
            this.jsonRecords,
            start,
            dest,
            this.captured,
            this.turn
        );
    }

    save = () => {
        const posFen = getFen(this.board);
        const fenData = this.fenObj.getData();
        const fen = getFullFen(posFen, fenData);
        const records = this.jsonRecords.getRecords();
        records.pawn_histories = replacePawnIdWithCurrentLoc(
            records.pawn_histories
        );
        const defs = gameDefsOffsetListsToStrs(this.defs);
        const status = this.gameStatus.getStatus();

        const imgUrlStrs = filterSamples(this.imgUrlStrs)

        getDoesGameExist(this.gameName).then(([gameExists]) => {
            if (gameExists) {
                getGameImgUrlStrs(this.gameName).then(prevImgUrlStrs => {
                    updateCountsOnOverwrite(prevImgUrlStrs, imgUrlStrs).then(r => {
                        this.saveToDb(fen, records, defs, status);
                    })
                })
            }
            else {
                incrementImgRefCounts(imgUrlStrs).then((r) => {
                    this.saveToDb(fen, records, defs, status);
                });
            }
        });
    }

    saveToDb = (fen, records, defs, status) => {
        saveGame(this.gameName, {
            fen: fen,
            status: status,
            type: this.gameType,
            pt: this.playerType,
            promos: this.promoChoices,
            json: records,
            defs: defs,
            ids: this.idDict,
            captured: this.capturedIds,
            imgUrlStrs: this.imgUrlStrs,
        }).then(([res]) => {
            this.setUnsavedProgress(false);
            this.setState({saveAnimation: true});
        });
    }

    resign = () => {
        if (this.gameStatus.status !== OVER) {
            this.gameStatus.updateByObj({
                status: OVER,
                condition: "resigned",
                winner: this.getColorLastMove(),
            });
            this.triggerRender();
        }
    }

    /**
     * @param pieceId: range of piece with id pieceId
     * @returns binary board where only inRange values set to true
     */
    getRangeBoard = (pieceId) => {
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

    toggleSecondaryDrawer = (bValue) => {
        this.setState({ secondaryDrawer: bValue });
    }

    toggleRangeAnalysis = () => {
        this.setState({rangeAnalysis: ! this.state.rangeAnalysis})
    }

    getColorLastMove = () => {
        if (this.turn === "W") {
            return "B";
        } else {
            return "W";
        }
    }

    changeName = (newName) => {
        this.gameName = newName;
    }

    setUnsavedProgress = (boolVal) => {
        /**Do not make this a state variable*/
        this.unsavedProgress = boolVal;
    }

    triggerRender = () => {
        this.setState({ bValue: !this.state.bValue });
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {value => <>
                    {this.state.saveAnimation && (
                        <AnimatePresencePortal>
                            <GameSavedSuccessfully
                                theme={value.themes.gameRoot}
                                callback={() => this.setState({saveAnimation: false})}
                            />
                        </AnimatePresencePortal>
                    )}
                    <ResponsiveDrawer
                        theme={value.themes.gameRoot}
                        appBarType={"custom"}
                        appBarContent={
                            <StatusBar
                                turn={this.turn}
                                theme={value.themes.gameRoot}
                                winner={this.gameStatus.winner}
                                isRangeAnalysis={this.state.rangeAnalysis}
                                condition={this.gameStatus.condition}
                                onChange={this.toggleRangeAnalysis}
                            />
                        }
                        tools={
                            <>
                                <GameInfo
                                    gameName={this.gameName}
                                    gameType={this.gameType}
                                    theme={value.themes.gameRoot}
                                    playerType={this.playerType}
                                />
                                <SaveResignTool
                                    save={this.save}
                                    resign={this.resign}
                                    theme={value.themes.gameRoot}
                                    changeName={this.changeName}
                                />
                                <RangeAnalysis
                                    board={this.board}
                                    theme={value.themes.gameRoot}
                                    gameType={this.gameType}
                                    pieceDefs={this.defs}
                                    idDict={this.idDict}
                                    start={this.aiStart}
                                    allRanges={{
                                        ...this.ranges,
                                        ...this.enemyRanges,
                                    }}
                                    showProfileOnClick={
                                        this.state.showProfileOnClick
                                    }
                                    triggerRender={this.triggerRender}
                                    toggleSecondaryDrawer={doNothing}
                                />
                                <CapturedPieceImages
                                    capturedIds={this.capturedIds}
                                    captured={this.captured}
                                    gameType={this.gameType}
                                    theme={value.themes.gameRoot}
                                    idDict={this.idDict}
                                    defs={this.defs}
                                />
                            </>
                        }
                        toolButtons={
                            <>
                                {this.context ? (
                                    <ToolButton
                                        text="Save"
                                        iconName={"save_alt"}
                                        onClick={this.save}
                                        isActive={false}
                                        theme={value.themes.gameRoot}
                                    />
                                ) : (
                                    <AskLoginButton
                                        text="Save"
                                        iconName={"save_alt"}
                                        theme={value.themes.gameRoot}
                                        isGameOption={true}
                                    />
                                )}
                                <GameRootToolbar
                                    defs={this.defs}
                                    idDict={this.idDict}
                                    captured={this.captured}
                                    capturedIds={this.capturedIds}
                                    playerType={this.playerType}
                                    gameName={this.gameName}
                                    gameType={this.gameType}
                                    theme={value.themes.gameRoot}
                                    changeName={this.changeName}
                                    onChange={this.toggleRangeAnalysis}
                                    resign={this.resign}
                                    save={this.save}
                                />
                            </>
                        }
                        navBar={
                            <NavBar
                                currentPage="GameRoot"
                                parentPage={this.parentPage}
                                helpText={PlayingGameHelp(value.themes.gameRoot)}
                                helpTitle={
                                    <HelpTitle theme={value.themes.gameRoot} fontSize='2.6vh'>
                                        Playing a Game
                                    </HelpTitle>
                                }
                                isUnsavedChanges={this.isUnsavedChanges}
                                updateTheme={this.updateTheme}
                                theme={value.themes.gameRoot}
                                additionalSettings={
                                    <>
                                        <MuiSwitch
                                            theme={value.themes.gameRoot}
                                            control={
                                                <ShowProfileOnClick
                                                    checked={
                                                        this.state.showProfileOnClick
                                                    }
                                                    onChange={() =>
                                                        this.setState({
                                                            showProfileOnClick: !this.state
                                                                .showProfileOnClick,
                                                        })
                                                    }
                                                    theme={value.themes.gameRoot}
                                                />
                                            }
                                        >
                                            Show Piece Profile on Click (Range Board)
                                        </MuiSwitch>
                                    </>
                                }
                            />
                        }
                        navHorizontal={false}
                        neighborOpen={this.state.secondaryDrawer}
                    >
                        <MediaQuery maxWidth={960}>
                            {this.state.rangeAnalysis ? (
                                <RangeAnalysis
                                    theme={value.themes.gameRoot}
                                    board={this.board}
                                    gameType={this.gameType}
                                    allRanges={{
                                        ...this.ranges,
                                        ...this.enemyRanges,
                                    }}
                                    pieceDefs={this.defs}
                                    idDict={this.idDict}
                                    toggleSecondaryDrawer={this.toggleSecondaryDrawer}
                                    showProfileOnClick={this.state.showProfileOnClick}
                                />
                            ) : (
                                <Board gameRoot={this} theme={value.themes.gameRoot} />
                            )}
                        </MediaQuery>
                        <MediaQuery minWidth={960}>
                            <Board gameRoot={this} theme={value.themes.gameRoot} />
                        </MediaQuery>
                    </ResponsiveDrawer>
                </>}
            </ThemeContext.Consumer>
        );
    }
}

export default withStyles(styles)(GameRoot);