import React from "react";
import {Redirect} from "react-router-dom";
import {getGames} from "../../API/getGames";
import {deleteGame} from "../../API/deleteGame";
import {sampleGames} from "../../API/apiHelpers/sampleGames";
import {initEmptyRanges} from "../../apiHelpers/initEmptyRanges";
import {offsetStrsToList} from "../../apiHelpers/offsetStrsToList";
import {getSampleGames} from "../../API/getSampleGames";
import { saveGameDict } from "../../API/saveGameDict";
import {parseData} from "../../apiHelpers/parseData";
import {SavedGames} from "./SavedGames";
import {copy} from "../helpers/copy";
import "../styles/_backgrounds.scss";

class LoadGame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: "tan",
            selectedGame: null,
            userChoseGame: false,
            firstVisit: false,
            loaded: false,
        };
        this.games = {};
        this.imgDict = {};
        this.load = this.load.bind(this);
        this.isDisabled = this.isDisabled.bind(this);
        this.changeName = this.changeName.bind(this);
        this.deleteGame = this.deleteGame.bind(this);
        this.getGameImgDict = this.getGameImgDict.bind(this);
    }

    componentDidMount() {
        document.body.className = "tan-background";
        // this.games = getSampleGames()
        // this.reloadGameImgComponentsDict();
        // this.setState({ loaded: true });
        getGames().then(([games]) => {
            if (games) {
                this.games = games;
                this.reloadGameImgComponentsDict();
                this.setState({ loaded: true });
            } else {
                saveGameDict(sampleGames).then(([r]) => {
                    this.games = getSampleGames()
                    this.reloadGameImgComponentsDict();
                    this.setState({ loaded: true });
                })
            }
        });
    }

    reloadGameImgComponentsDict() {
        this.imgDict = {}
        Object.keys(this.games).forEach(gameName => {
            this.imgDict[gameName] = this.games[gameName].img
        })
    }

    isDisabled() {
        return this.state.selectedGame === "None" || !this.state.selectedGame;
    }

    changeName(gameName) {
        this.setState({selectedGame: gameName});
    }

    deleteGame(gameName) {
        deleteGame(gameName).then(([r]) => {
            delete this.games[gameName];
            this.reloadGameImgComponentsDict();
            this.setState({
                selectedGame: "none",
                userChoseGame: false,
            });
        });
    }

    getGameImgDict() {
        const imgDict = {}
        Object.keys(this.games).forEach(gameName => {
            imgDict[gameName] = this.games[gameName].img
        })
        return imgDict;
    }

    load() {
        this.gameData = this.games[this.state.selectedGame];
        this.gameData.defs = initEmptyRanges(this.gameData.defs);
        this.gameData.defs = offsetStrsToList(this.gameData.defs);
        this.gameData = parseData(this.gameData);
        this.setState({userChoseGame: true});
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
                    load={this.load}
                    imgDict={this.imgDict}
                    loaded={this.state.loaded}
                    confirmDeleteMessage={`Are you sure you want to delete game ${this.state.selectedGame}?`}
                    deleteGame={() => this.deleteGame(this.state.selectedGame)}
                    selectedGame={this.state.selectedGame}
                    changeName={this.changeName}
                    isDisabled={this.isDisabled}
                    theme={this.state.theme}
                />
            </>
        );
    }
}

export default LoadGame;
