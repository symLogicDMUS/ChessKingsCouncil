import React from "react";
import { Redirect } from "react-router-dom";
import { SavedGames } from "./SavedGames";
import { copy } from "../helpers/copy";
import { getGames } from "../../API/getGames";
import { getBoardObjs } from "./getBoardObjs";
import { deleteGame } from "../../API/deleteGame";
import "../Reuseables/Background/_backgrounds.scss";
import { getGameSnapshots } from "./getGameSnapshots";
import { parseData } from "../../API/apiHelpers/parseData";
import { initEmptyRanges } from "../../API/apiHelpers/initEmptyRanges";
import { offsetStrsToList } from "../../API/apiHelpers/offsetStrsToList";
import {decrementImgRefCounts} from "../../API/decrementImgRefCounts";
import {deleteImgsWithNoRef} from "../../API/deleteImgsWithNoRef";

class LoadGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "tan",
            selectedGame: null,
            userChoseGame: false,
            firstVisit: false,
            loaded: false,
            searchText: "",
            showNames: true,
            bValue: true,
        };
        this.games = {};
        this.boardObjs = {};
        this.loadGame = this.loadGame.bind(this);
        this.updateTheme = this.updateTheme.bind(this);
        this.isDisabled = this.isDisabled.bind(this);
        this.setChoice = this.setChoice.bind(this);
        this.deleteGame = this.deleteGame.bind(this);
        this.updateSnapshots = this.updateSnapshots.bind(this);
        this.updateSearchText = this.updateSearchText.bind(this);
        this.toggleShowNames = this.toggleShowNames.bind(this);
        this.triggerRender = this.triggerRender.bind(this);
    }

    componentDidUpdate() {
        document.body.className = `${this.state.theme}-background`;
    }

    componentDidMount() {
        document.body.className = "tan-background";
        getGames().then(([games]) => {
            if (games) {
                this.games = games;
                this.boardObjs = getBoardObjs(this.games);
                this.gameSnapshotComponents = getGameSnapshots(
                    this.boardObjs,
                    this.setChoice,
                    this.state.selectedGame,
                    this.state.searchText,
                    this.state.showNames,
                    this.state.theme
                );
                this.setState({ loaded: true });
            } else {
                this.games = {}
            }
        });
    }

    loadGame() {
        this.gameData = this.games[this.state.selectedGame];
        this.gameData.defs = initEmptyRanges(this.gameData.defs);
        this.gameData.defs = offsetStrsToList(this.gameData.defs);
        this.gameData = {...this.gameData, ...parseData(this.gameData)};
        this.setState({ userChoseGame: true });
    }

    deleteGame(gameName) {
        decrementImgRefCounts(this.games[gameName].imgUrlStrs).then(r => {
            deleteImgsWithNoRef(this.games[gameName].imgUrlStrs).then(r => {
                deleteGame(gameName).then(([r]) => {
                    delete this.games[gameName];
                    delete this.boardObjs[gameName];
                    this.gameSnapshotComponents = getGameSnapshots(
                        this.boardObjs,
                        this.setChoice,
                        this.state.selectedGame,
                        this.state.searchText,
                        this.state.showNames,
                        this.state.theme
                    );
                    this.setState({
                        selectedGame: "none",
                        userChoseGame: false,
                    });
                });
            })
        })
    }

    isDisabled() { //TODO: bug: delete button not disabled when no selection
        return this.state.selectedGame === "None" || !this.state.selectedGame;
    }

    setChoice(gameName) {
        this.setState({ selectedGame: gameName }, () => {
            this.gameSnapshotComponents = getGameSnapshots(
                this.boardObjs,
                this.setChoice,
                this.state.selectedGame,
                this.state.searchText,
                this.state.showNames,
                this.state.theme,
            );
            this.triggerRender()
        });
    }

    updateSnapshots() {
        this.gameSnapshotComponents = getGameSnapshots(
            this.boardObjs,
            this.setChoice,
            this.state.selectedGame,
            this.state.searchText,
            this.state.showNames,
            this.state.theme,
        );
    }

    updateTheme(theme) {
        this.setState({ theme: theme }, () => {
            this.updateSnapshots()
            this.triggerRender()
        });
    }

    updateSearchText(newText) {
        this.setState({ searchText: newText }, () => {
            this.updateSnapshots()
            this.triggerRender()
        });
    }

    toggleShowNames() {
        this.setState({showNames: ! this.state.showNames}, () => {
            this.updateSnapshots()
            this.triggerRender()
        })
    }

    triggerRender() {
        this.setState({bValue: ! this.state.bValue})
    }

    render() {
        if (this.state.userChoseGame) {
            return (
                <Redirect
                    to={{
                        pathname: "/Play",
                        state: {
                            currentPath: "/LoadGame",
                            gameName: copy(this.state.selectedGame),
                            gameType: copy(this.gameData.type),
                            playerType: copy(this.gameData.pt),
                            gameData: copy(this.gameData),
                        },
                    }}
                />
            );
        }

        return (
            <>
                <SavedGames
                    load={this.loadGame}
                    imgDict={this.imgDict}
                    loaded={this.state.loaded}
                    searchText={this.state.searchText}
                    updateSearchText={this.updateSearchText}
                    confirmDeleteMessage={`Are you sure you want to delete game ${this.state.selectedGame}?`}
                    deleteGame={() => this.deleteGame(this.state.selectedGame)}
                    selectedGame={this.state.selectedGame}
                    toggleShowNames={this.toggleShowNames}
                    showNames={this.state.showNames}
                    isDisabled={this.isDisabled}
                    updateTheme={this.updateTheme}
                    theme={this.state.theme}
                >
                    {this.gameSnapshotComponents}
                </SavedGames>
            </>
        );
    }
}

export default LoadGame;
