import React from "react";
import { Redirect } from "react-router-dom";
import { NavBar } from "../NavBar/NavBarRegular3";
import { getGames } from "../../API/getGames";
import { deleteGame } from "../../API/deleteGame";
import { initEmptyRanges } from "../../apiHelpers/initEmptyRanges";
import { offsetStrsToList } from "../../apiHelpers/offsetStrsToList";
import { parseData } from "../../apiHelpers/parseData";
import { ConfirmDeleteGameModal } from "./ConfirmDeleteGameModal";
import "./LoadGame.css";

export class LoadGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = { gameName: "none", loaded: false, reload: 0, bValue: false, confirmDeleteModal: false };
        this.council = false;
        this.selected = false;
        this.dataEntry = null;
        this.pieceDefs = null;
        this.navExpanded = true;
        this.games = {};
        this.load = this.load.bind(this);
        this.togleNav = this.togleNav.bind(this);
        this.changeName = this.changeName.bind(this);
        this.askDeleteGame = this.askDeleteGame.bind(this);
        this.acceptDeleteGame = this.acceptDeleteGame.bind(this);
        this.cancelDeleteGame = this.cancelDeleteGame.bind(this);
    }

    componentDidMount() {
        document.body.className = "load-game-body";

        getGames().then(([games]) => {
            if (games) {
                this.games = games;
            } else {
                this.games = {};
            }

            this.setState({ gameName: "none", loaded: false, reload: !this.state.reload });
        });
    }

    getGameList() {
        const gameList = [<option value="choose">Choose...</option>];
        for (var name of Object.keys(this.games)) {
            gameList.push(<option value={name}>{name}</option>);
        }
        return gameList;
    }

    changeName(e) {
        const name = e.target.value;
        if (name === "choose") {
            this.selected = false;
            this.setState({loaded: false, bValue: ! this.state.bValue})
        } else {
            this.selected = true;
            this.setState({ gameName: name });
        }
    }

    togleNav(boolVal) {
        this.navExpanded = boolVal;
        this.setState({ bValue: !this.state.bValue });
    }

    askDeleteGame() {
        this.setState({ confirmDeleteModal: true });
    }

    acceptDeleteGame() {
        deleteGame(this.state.gameName).then(([res]) => {
            delete this.games[this.state.gameName];
            this.selected = false;
            this.setState({
                gameName: "none",
                loaded: false,
                confirmDeleteModal: false,
            });
        });
    }

    cancelDeleteGame() {
        this.setState({ confirmDeleteModal: false });
    }

    load() {
        this.gameData = this.games[this.state.gameName];
        this.gameData["defs"] = initEmptyRanges(this.gameData["defs"]);
        this.gameData["defs"] = offsetStrsToList(this.gameData["defs"]);
        this.gameData = parseData(this.gameData);
        this.setState({ loaded: true });
    }

    render() {
        if (this.state.loaded === false) {
            if (this.selected) {
                return (
                    <>
                        <div>
                            <NavBar
                                navBarPos="relative"
                                navBarPosTop={0}
                                navBarPosLeft="22.2vw"
                                expandColapseColor="000000"
                            />
                            <div className="load-game">
                                <div>
                                    <img
                                        src="/Images/text-labels/LoadGame.svg"
                                        className="load-game-text"
                                        alt="title for loading game"
                                    />
                                </div>
                                <div className="button-options">
                                    <br />
                                    <br />
                                    <select id="games" onChange={this.changeName}>
                                        {this.getGameList()}
                                    </select>
                                    <button onClick={this.load}>Play</button>
                                    <button onClick={this.askDeleteGame}>Delete</button>
                                </div>
                            </div>
                        </div>
                        {this.state.confirmDeleteModal && (
                            <ConfirmDeleteGameModal
                                gameName={this.state.gameName}
                                acceptDeleteGame={this.acceptDeleteGame}
                                cancelDeleteGame={this.cancelDeleteGame}
                            />
                        )}
                    </>
                );
            } else {
                return (
                    <div>
                        <NavBar
                            navBarPos="relative"
                            navBarPosTop={0}
                            navBarPosLeft="22.2vw"
                            expandColapseColor="000000"
                        />
                        <div className="load-game">
                            <div>
                                <img
                                    src="/Images/text-labels/LoadGame.svg"
                                    className="load-game-text"
                                    alt="text that reads 'Load Game'"
                                />
                            </div>
                            <div className="button-options">
                                <br />
                                <br />
                                <select id="games" onChange={this.changeName}>
                                    {this.getGameList()}
                                </select>
                                <button
                                    style={{
                                        backgroundColor: "grey",
                                        opacity: "0.6",
                                        color: "dark-grey",
                                        cursor: "not-allowed",
                                    }}
                                >
                                    Play
                                </button>
                                <button
                                    style={{
                                        backgroundColor: "grey",
                                        opacity: "0.6",
                                        color: "dark-grey",
                                        cursor: "not-allowed",
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                );
            }
        } else {
            return (
                <Redirect
                    to={{
                        pathname: "/LoadGame/Play",
                        state: {
                            currentPage: "/LoadGame/Play",
                            gameName: JSON.parse(JSON.stringify(this.state.gameName)),
                            gameType: JSON.parse(JSON.stringify(this.gameData["type"])),
                            playerType: JSON.parse(JSON.stringify(this.gameData["pt"])),
                            gameData: JSON.parse(JSON.stringify(this.gameData)),
                        },
                    }}
                />
            );
        }
        /**
         * note: the pieceDefs attribute passed as seperate prop because NewGame passes it is a seperate prop
         * because pieceDefs is not the same for every new game data, it is defined by the user.
         */
    }
}

export default LoadGame;
