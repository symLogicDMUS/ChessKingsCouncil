import React from "react";
import { Redirect } from "react-router-dom";
import { getGames } from "../../API/getGames";
import { deleteGame } from "../../API/deleteGame";
import { initEmptyRanges } from "../../apiHelpers/initEmptyRanges";
import { offsetStrsToList } from "../../apiHelpers/offsetStrsToList";
import { parseData } from "../../apiHelpers/parseData";
import { copy } from "../helpers/copy";
import MenuItem from "@material-ui/core/MenuItem";
import { LoadGameFromList } from "./LoadGameFromList";
import "../styles/_backgrounds.scss";

class LoadGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "black",
            selectedGame: null,
            userChoseGame: false,
        };
        this.games = {};
        this.gameList = [
            <MenuItem value="None">
                <em>None</em>
            </MenuItem>,
        ];
        this.load = this.load.bind(this);
        this.isDisabled = this.isDisabled.bind(this);
        this.changeName = this.changeName.bind(this);
        this.deleteGame = this.deleteGame.bind(this);
    }

    componentDidMount() {
        document.body.className = "light-background";
        getGames().then(([games]) => {
            if (games) {
                this.games = games;
            } else {
                this.games = {};
            }
            this.resetGameList();
            this.setState({ userChoseGame: false });
        });
    }

    resetGameList() {
        this.gameList = [];
        for (const name of Object.keys(this.games)) {
            this.gameList.push(<MenuItem value={name}>{name}</MenuItem>);
        }
    }

    isDisabled() {
        return this.state.selectedGame === "None" || !this.state.selectedGame;
    }

    changeName(gameName) {
        this.setState({ selectedGame: gameName });
    }

    deleteGame() {
        deleteGame(this.state.selectedGame).then(([r]) => {
            delete this.games[this.state.selectedGame];
            this.resetGameList();
            this.setState({
                selectedGame: "none",
                userChoseGame: false,
                confirmDeleteModal: false,
            });
        });
    }

    load() {
        this.gameData = this.games[this.state.selectedGame];
        this.gameData["defs"] = initEmptyRanges(this.gameData["defs"]);
        this.gameData["defs"] = offsetStrsToList(this.gameData["defs"]);
        this.gameData = parseData(this.gameData);
        this.setState({ userChoseGame: true });
    }

    render() {
        if (this.state.userChoseGame) {
            return (
                <Redirect
                    to={{
                        pathname: "/LoadGame/Play",
                        state: {
                            currentPath: "/LoadGame/Play",
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
                <LoadGameFromList
                    load={this.load}
                    deleteGame={this.deleteGame}
                    selectedGame={this.state.selectedGame}
                    changeName={this.changeName}
                    isDisabled={this.isDisabled}
                    gameList={this.gameList}
                    theme={this.state.theme}
                />
            </>
        );
    }
}

export default LoadGame;
