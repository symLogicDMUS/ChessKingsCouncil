import React from "react";
import { Redirect } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import { getGames } from "../../API/getGames";
import { deleteGame } from "../../API/deleteGame";
import { initEmptyRanges } from "../../apiHelpers/initEmptyRanges";
import { offsetStrsToList } from "../../apiHelpers/offsetStrsToList";
import { parseData } from "../../apiHelpers/parseData";
import { ConfirmModal } from "../NavBar/ConfirmModal";
import withStyles from "@material-ui/core/styles/withStyles";
import { copy } from "../helpers/copy";
import MenuItem from "@material-ui/core/MenuItem";
import { fontSize } from "../styles/fontSize.jss";
import { LoadGameFromList } from "./LoadGameFromList";
import "../styles/_backgrounds.scss";
// import { styles } from "./LoadGame.jss";

class LoadGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "black",
            selectedGame: null,
            userChoseGame: false,
            confirmDeleteModal: false,
        };
        this.gameList = [
            <MenuItem value="None">
                <em>None</em>
            </MenuItem>,
        ];

        this.games = {};
        this.didSelect = false;
        this.load = this.load.bind(this);
        this.isDisabled = this.isDisabled.bind(this);
        this.changeName = this.changeName.bind(this);
        this.askDeleteGame = this.askDeleteGame.bind(this);
        this.acceptDeleteGame = this.acceptDeleteGame.bind(this);
        this.cancelDeleteGame = this.cancelDeleteGame.bind(this);
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

    askDeleteGame() {
        this.setState({ confirmDeleteModal: true });
    }

    acceptDeleteGame() {
        deleteGame(this.state.selectedGame).then(([res]) => {
            delete this.games[this.state.selectedGame];
            this.resetGameList();
            this.setState({
                selectedGame: "none",
                userChoseGame: false,
                confirmDeleteModal: false,
            });
        });
    }

    cancelDeleteGame() {
        this.setState({ confirmDeleteModal: false });
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
                {this.state.confirmDeleteModal && (
                    <ConfirmModal
                        theme={this.state.theme}
                        title={`Are You Sure you want to delete game ${this.state.selectedGame}?`}
                        yesClick={this.acceptDeleteGame}
                        noClick={this.cancelDeleteGame}
                        closeClick={this.cancelDeleteGame}
                    />
                )}
                <NavBar
                    currentPage="LoadGame"
                    theme={this.state.theme}
                    style={{
                        fontSize: fontSize,
                        width: "100%",
                        height: "2.25em",
                    }}
                    buttonStyle={{
                        fontSize: fontSize,
                        height: "2.25em",
                        justifyContent: "center",
                    }}
                    unsavedChanges={false}
                />
                <LoadGameFromList
                    load={this.load}
                    gameList={this.gameList}
                    theme={this.state.theme}
                    changeName={this.changeName}
                    askDeleteGame={this.askDeleteGame}
                    isDisabled={this.isDisabled}
                />
            </>
        );
    }
}

export default LoadGame;

// export default withStyles(styles)(LoadGame);
