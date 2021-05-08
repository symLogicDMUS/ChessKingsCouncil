import React, {useContext} from "react";
import { Redirect } from "react-router-dom";
import { SavedGames } from "./SavedGames";
import { copy } from "../helpers/copy";
import { getGames } from "../../API/getGames";
import { getBoardObjs } from "./getBoardObjs";
import { deleteGame } from "../../API/deleteGame";
import "../Reuseables/Background/_backgrounds.scss";
import {filterSamples} from "../../API/filterSamples";
import { getGameSnapshots } from "./getGameSnapshots";
import { parseData } from "../../API/apiHelpers/parseData";
import { decrementImgRefCounts } from "../../API/decrementImgRefCounts";
import {getSampleGames} from "../../API/sampleData/getSampleGames";
import {UserContext} from "../../UserContext";

class LoadGame extends React.Component {
    state = {
        theme: "tan",
        selectedGame: null,
        userChoseGame: false,
        firstVisit: false,
        loaded: false,
        searchText: "",
        showNames: true,
        bValue: true,
        uid: null,
    };
    games = {};
    boardObjs = {};

    static contextType = UserContext;

    componentDidMount() {
        document.body.className = "tan-background";
        const uid = this.context;
        if (uid) {
            getGames().then(([games]) => {
                if (! games) {
                    this.games = {};
                } else {
                    this.games = games;
                }
                this._initLoad(uid)
            });
        }
        else {
            this.games = getSampleGames();
            this._initLoad(null)
        }
    }

    _initLoad = (uid) => {
        this.boardObjs = getBoardObjs(this.games);
        this.gameSnapshotComponents = getGameSnapshots(
            this.boardObjs,
            this.setChoice,
            this.state.selectedGame,
            this.state.searchText,
            this.state.showNames,
            this.state.theme
        );
        this.setState({uid: uid, loaded: true });
    }

    componentDidUpdate() {
        const uid = this.context;
        if (this.state.uid !== uid) {
            this.setState({uid: uid}, () => {
                if (uid) {
                    getGames().then(([games]) => {
                        if (! games) {
                            this.games = {};
                        } else {
                            this.games = games;
                        }
                        this._initLoad(uid)
                    });
                }
                else {
                    this.games = getSampleGames();
                    this._initLoad(null)
                }
            })
        }
        document.body.className = `${this.state.theme}-background`;
    }

    loadGame = () => {
        this.gameData = this.games[this.state.selectedGame];
        this.gameData = { ...this.gameData, ...parseData(this.gameData) };
        this.setState({ userChoseGame: true });
    }

    deleteGame = (gameName) => {
        const imgUrlStrs = filterSamples(this.games[gameName].imgUrlStrs)

        decrementImgRefCounts(imgUrlStrs).then((r) => {
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
                    selectedGame: null,
                    userChoseGame: false,
                });
            });
        });
    }

    setChoice = (gameName) => {
        this.setState({ selectedGame: gameName }, () => {
            this.gameSnapshotComponents = getGameSnapshots(
                this.boardObjs,
                this.setChoice,
                this.state.selectedGame,
                this.state.searchText,
                this.state.showNames,
                this.state.theme
            );
            this.triggerRender();
        });
    }

    updateSnapshots = () => {
        this.gameSnapshotComponents = getGameSnapshots(
            this.boardObjs,
            this.setChoice,
            this.state.selectedGame,
            this.state.searchText,
            this.state.showNames,
            this.state.theme
        );
    }

    updateTheme = (theme) => {
        this.setState({ theme: theme }, () => {
            this.updateSnapshots();
            this.triggerRender();
        });
    }

    updateSearchText = (newText) => {
        this.setState({ searchText: newText }, () => {
            this.updateSnapshots();
            this.triggerRender();
        });
    }

    toggleShowNames = () => {
        this.setState({ showNames: !this.state.showNames }, () => {
            this.updateSnapshots();
            this.triggerRender();
        });
    }

    triggerRender = () => {
        this.setState({ bValue: !this.state.bValue });
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
