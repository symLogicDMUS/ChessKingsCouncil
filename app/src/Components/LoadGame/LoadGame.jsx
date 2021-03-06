import React from "react";
import { Redirect } from "react-router-dom";
import { copy } from "../helpers/copy";
import { getGames } from "../../API/getGames";
import { deleteGame } from "../../API/deleteGame";
import { initEmptyRanges } from "../../apiHelpers/initEmptyRanges";
import { offsetStrsToList } from "../../apiHelpers/offsetStrsToList";
import { parseData } from "../../apiHelpers/parseData";
import {Background} from "../Reuseables/Background";
import { SavedGames } from "./SavedGames";
import "../styles/_backgrounds.scss";

class LoadGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "tan",
            selectedGame: null,
            userChoseGame: false,
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
        getGames().then(([games]) => {
            if (games) {
                this.games = games;
            } else {
                this.games = {};
            }
            this.reloadGameImgComponentsDict();
            this.setState({ userChoseGame: false });
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
        this.setState({ selectedGame: gameName });
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
        this.setState({ userChoseGame: true });
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
                <Background theme={this.state.theme} />
                <SavedGames
                    load={this.load}
                    imgDict={this.imgDict}
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
