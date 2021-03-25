import React from "react";
import {copy} from "../helpers/copy";
import {Portal} from "@material-ui/core";
import "../Reuseables/Background/_backgrounds.scss";
import withStyles from "@material-ui/core/styles/withStyles";
import MediaQuery from "react-responsive/src";
import {saveGame} from "../../API/saveGame";
import {rankfiles} from "../helpers/rankfiles";
import {OVER} from "../helpers/gStatusTypes";
import {isPawn} from "../helpers/isPawn";
import {getBinaryBoarAllFalse} from "../helpers/getBinaryBoardAllFalse";
import {replacePawnIdWithCurrentLoc} from "../helpers/replacePawnIdWithCurrentLoc";
import {getFen} from "../../game_logic/fenParser/getFen/top/getFen";
import {kingStartingRf, rookStartingRf} from "../helpers/castleRankfiles";
import {updateCouncil} from "../../game_logic/callHierarchyTop/updateCouncil";
import {getFullFen} from "../../game_logic/fenParser/getFen/getFullFen";
import {initPawnIds} from "../../game_logic/JsonRecords/initPawnIds";
import {update} from "../../game_logic/callHierarchyTop/update";
import {SaveResignTool} from "./SaveResignTool/SaveResignTool";
import {BoardTool} from "./BoardTool/BoardTool";
import {doNothing} from "../helpers/doNothing";
import {GameInfo} from "./GameInfo/GameInfo";
import {HelpText} from "./Help/HelpText";
import {Board} from "./GameBoard/Board";
import {Fen} from "../../game_logic/fenParser/Fen";
import {GameStatus} from "../../game_logic/fenParser/GameStatus/GameStatus";
import {SpecialMoves} from "../../game_logic/ranges/specialMoves/SpecialMoves";
import {JsonRecords} from "../../game_logic/JsonRecords/JsonRecords";
import {NavBar} from "../Reuseables/NavBar/NavBar";
import {CapturedPieceImages} from "./CapturedPieceImg/CapturedPieceImages";
import {getFranchiseThemeOverride} from "../MyPieces/getFranchiseThemeOverride";
import {fontSize0026, fontSizeW0045} from "../styles/fontSizes.jss";
import {gameDefsOffsetListsToStrs} from "../../API/apiHelpers/gameDefsOffsetListsToStrs";
import {AnimatePresencePortal} from "../Reuseables/Animations/AnimatePresencePortal";
import {GameSavedSuccessfully} from "../CreatePiece/animations/GameSavedSuccessfully";
import {input_label} from "../Reuseables/NavBar/SettingsModal.jss";
import {HelpTitle} from "../Reuseables/NavBar/Help/HelpTitle";
import {specialThemeMenuItemList} from "../styles/themes.jss";
import {newData, newStandardImgUrls} from "../NewGame/NewData";
import {MuiCheckbox} from "../Reuseables/Clickables/MuiCheckbox";
import {MuiDropdown} from "../Reuseables/UserInput/MuiDropdown";
import {standardPieceDefs} from "../NewGame/standardPieceDefs/dev1";
import {incrementImgRefCounts} from "../../API/incrementImgRefCounts";
import {getDoesGameExist} from "../../API/getDoesGameExist";
import {ToolButton} from "../Reuseables/Clickables/ToolButton";
import {ResignModal} from "./SaveResignTool/ResignModal";
import ResponsiveDrawer from "../Reuseables/Drawers/ResponsiveDrawer";
import MuiAccordion from "../Reuseables/Drawers/MuiAccordion";
import {SaveAs} from "./SaveResignTool/SaveAs";
import {styles} from "./GameRoot.jss";

class GameRoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bValue: true,
            theme: "dark",
            miniVariantTool: null,
            resignModal: false,
            saveProcess: false,
            messageModal: false,
            secondaryDrawer: false,
            showProfileOnClick: true,
        };
        this.unsavedProgress = false;
        this.isTouchscreen = this.props.isTouchscreen;
        this.gameName = this.props.location.state.gameName;
        this.gameType = this.props.location.state.gameType;
        this.playerType = this.props.location.state.playerType;
        let gameData;
        if (this.gameType === "Custom" || (this.props.location.state.currentPath === "/LoadGame")) {
            gameData = this.props.location.state.gameData;
        } else {
            gameData = {...copy(newData), piece_defs: copy(standardPieceDefs), imgUrlList: copy(newStandardImgUrls)};
        }
        this.board = gameData.board;
        this.turn = gameData.color;
        this.imgUrlList = gameData.imgUrlList;
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
        if (!this.capturedIds) this.capturedIds = copy(newData.captured)
        if (!this.capturedIds.W) this.capturedIds.W = []
        if (!this.capturedIds.B) this.capturedIds.B = []
        this.captured = ''
        if (this.playerType === "Test") this.aiColor = "none";
        else if (this.playerType === "W") this.aiColor = "B";
        else if (this.playerType === "B") this.aiColor = "W";
        if (this.gameType === "council") this.promoChoices.push("King");
        this.aiStart = null;
        this.aiDest = null;
        this.aiCapture = null;
        this.save = this.save.bind(this);
        this.resign = this.resign.bind(this);
        this.saveToDb = this.saveToDb.bind(this);
        this.toggleMiniVariantTool = this.toggleMiniVariantTool.bind(this);
        this.triggerRender = this.triggerRender.bind(this);
        this.toggleSaveProcess = this.toggleSaveProcess.bind(this);
        this.toggleSecondaryDrawer = this.toggleSecondaryDrawer.bind(this);
        this.updateTurnData = this.updateTurnData.bind(this);
        this.updateTheme = this.updateTheme.bind(this);
        this.getRangeBoard = this.getRangeBoard.bind(this);
        this.changeName = this.changeName.bind(this);
    }

    componentDidMount() {
        document.body.className = "dark-background";
    }

    componentDidUpdate() {
        if (this.state.theme === 'tan') {
            document.body.className = 'tan-background-alt';
        } else {
            document.body.className = `${this.state.theme}-background`;
        }
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
        const posFen = getFen(this.board);
        const fenData = this.fenObj.getData();
        const fen = getFullFen(posFen, fenData);
        const records = this.jsonRecords.getRecords();
        records.pawn_histories = replacePawnIdWithCurrentLoc(
            records.pawn_histories
        );
        const pieceDefs = gameDefsOffsetListsToStrs(this.defs);
        const status = this.gameStatus.getStatus();

        getDoesGameExist(this.gameName).then(([gameExists]) => {
            if (!gameExists) {
                incrementImgRefCounts(this.imgUrlList).then(r => {
                    this.saveToDb(fen, records, pieceDefs, status);
                })
            } else {
                this.saveToDb(fen, records, pieceDefs, status);
            }
        })
    }

    saveToDb(fen, records, pieceDefs, status) {
        saveGame(this.gameName, {
            fen: fen,
            status: status,
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

    toggleMiniVariantTool(toolName) {
        if (this.state.miniVariantTool === toolName) {
            this.setState({miniVariantTool: null});
        } else {
            this.setState({miniVariantTool: toolName});
        }
    }

    toggleSecondaryDrawer(bValue) {
        this.setState({secondaryDrawer: bValue})
    }

    toggleSaveProcess(bValue) {
        this.setState({saveProcess: bValue});
    }

    getColorLastMove() {
        if (this.turn === "W") {
            return "B";
        } else {
            return "W";
        }
    }

    changeName(newName) {
        this.gameName = newName;
    }

    setUnsavedProgress(boolVal) {
        /**Do not make this a state variable*/
        this.unsavedProgress = boolVal;
    }

    triggerRender() {
        this.setState({bValue: !this.state.bValue});
    }

    updateTheme(theme) {
        this.setState({theme: theme})
    }

    render() {
        return (
            <>
                <div>
                    {this.state.miniVariantTool === "Save" ? (
                        <AnimatePresencePortal>
                            <GameSavedSuccessfully
                                callback={() =>
                                    this.toggleMiniVariantTool(null)
                                }
                                theme={this.state.theme}
                            />
                        </AnimatePresencePortal>
                    ) : null}
                    {this.state.miniVariantTool === "Save-As" ? (
                        <Portal>
                            <SaveAs
                                changeName={this.changeName}
                                close={() => this.toggleMiniVariantTool(null)}
                                save={() => this.toggleSaveProcess(true)}
                                theme={this.state.theme}
                            />
                        </Portal>
                    ) : null}
                    {this.state.miniVariantTool === "Captured-Pieces" ? (
                        <CapturedPieceImages
                            captured={this.captured}
                            capturedIds={this.capturedIds}
                            idDict={this.idDict}
                            defs={this.defs}
                            gameType={this.gameType}
                            theme={this.state.theme}
                        />
                    ) : null}
                    {this.state.miniVariantTool === "Resign" ? (
                        <ResignModal
                            theme={this.state.theme}
                            onClick={() => {
                                this.toggleMiniVariantTool(null)
                                this.resign()
                            }}
                            onClick1={() => this.toggleMiniVariantTool(null)}
                        />
                    ) : null}
                </div>
                <ResponsiveDrawer
                    theme={this.state.theme}
                    tools={
                        <>
                            <GameInfo
                                gameName={this.gameName}
                                gameType={this.gameType}
                                theme={this.state.theme}
                                playerType={this.playerType}
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
                                gameType={this.gameType}
                                pieceDefs={this.defs}
                                idDict={this.idDict}
                                start={this.aiStart}
                                allRanges={{...this.ranges, ...this.enemyRanges}}
                                showProfileOnClick={this.state.showProfileOnClick}
                                triggerRender={this.triggerRender}
                                toggleSecondaryDrawer={doNothing}
                            />
                            <CapturedPieceImages
                                captured={this.captured}
                                capturedIds={this.capturedIds}
                                gameType={this.gameType}
                                theme={this.state.theme}
                                idDict={this.idDict}
                                defs={this.defs}
                            />
                        </>
                    }
                    toolButtons={
                        <>
                            <ToolButton
                                text='save'
                                iconName={"save_alt"}
                                theme={this.state.theme}
                                isActive={this.state.miniVariantTool === "Save"}
                                onClick={() => this.toggleMiniVariantTool("Save")}
                            />
                            <ToolButton
                                text='save as'
                                iconName={"save_as_alt"}
                                theme={this.state.theme}
                                isActive={this.state.miniVariantTool === "Save-As"}
                                onClick={() => this.toggleMiniVariantTool("Save-As")}
                            />
                            <ToolButton
                                text='captured pieces'
                                theme={this.state.theme}
                                iconName={"captured_pieces"}
                                isActive={this.state.miniVariantTool === "Captured-Pieces"}
                                onClick={() => this.toggleMiniVariantTool("Captured-Pieces")}
                            />
                            <ToolButton
                                text='game info'
                                iconName={"game_info"}
                                theme={this.state.theme}
                                isActive={this.state.miniVariantTool === "Game-Info"}
                                onClick={() => this.toggleMiniVariantTool("Game-Info")}
                            />
                            <ToolButton
                                text='resign game'
                                iconName={"resign_alt"}
                                theme={this.state.theme}
                                isActive={this.state.miniVariantTool === "Resign"}
                                onClick={() => this.toggleMiniVariantTool("Resign")}
                            />
                        </>
                    }
                    navBar={
                        <NavBar
                            currentPage="GameRoot"
                            helpText={HelpText(fontSizeW0045, this.state.theme)}
                            helpTitle={<HelpTitle theme={this.state.theme} fontSize={fontSize0026}>Playing a
                                Game</HelpTitle>}
                            isUnsavedChanges={this.isUnsavedChanges}
                            updateTheme={this.updateTheme}
                            theme={this.state.theme}
                            additionalSettings={
                                <>
                                    {(this.gameType === 'Standard') ? (
                                        <MuiDropdown
                                            updateParent={this.updateTheme}
                                            theme={this.state.theme}
                                            fullWidth={true}
                                            size='medium'
                                            variant='outlined'
                                            label='franchise theme'
                                            inputLabel='franchise theme'
                                            inputLabelStyle={
                                                input_label(this.state.theme)
                                            }
                                            genStyle={{marginTop: 'auto', marginBottom: 'auto'}}
                                            overrideItem={getFranchiseThemeOverride(this.state.theme)}
                                        >
                                            {specialThemeMenuItemList}
                                        </MuiDropdown>
                                    ) : null}
                                    <MuiCheckbox
                                        theme={this.state.theme}
                                        rootClassProp={this.props.classes.sqr_text_checkbox}
                                        defaultChecked={this.state.showProfileOnClick}
                                        onClick={() => this.setState({showProfileOnClick: !this.state.showProfileOnClick})}
                                    >
                                        Show Piece Profile on Click (Range Board)
                                    </MuiCheckbox>
                                </>
                            }
                        />
                    }
                    neighborOpen={this.state.secondaryDrawer}
                >
                    <Board gameRoot={this}/>
                    {/*<MuiAccordion />*/}
                </ResponsiveDrawer>
            </>
        );
    }
}

export default withStyles(styles)(GameRoot);
