import React from "react";
import { Redirect } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { getGames } from "../../API/getGames";
import { deleteGame } from "../../API/deleteGame";
import { initEmptyRanges } from "../../apiHelpers/initEmptyRanges";
import { offsetStrsToList } from "../../apiHelpers/offsetStrsToList";
import { parseData } from "../../apiHelpers/parseData";
import { ConfirmModal } from "../NavBar/ConfirmModal";
import withStyles from "@material-ui/core/styles/withStyles";
import "../Reuseables/style/backgrounds.scss";
import { styles } from "./LoadGame.jss";

class LoadGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reload: 0,
            theme: "dark",
            gameName: null,
            loaded: false,
            bValue: false,
            confirmDeleteModal: false,
        };

        this.playButton = <button onClick={this.load}>Play</button>;
        this.deleteButton = <button onClick={this.askDeleteGame}>Delete</button>;
        this.council = false;
        this.selected = false;
        this.dataEntry = null;
        this.pieceDefs = null;
        this.navExpanded = true;
        this.games = {};
        this.load = this.load.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.messageTitle = null;
        this.messageText = null;
        this.toggleMessageModal = this.toggleMessageModal.bind(this);
        this.changeName = this.changeName.bind(this);
        this.askDeleteGame = this.askDeleteGame.bind(this);
        this.acceptDeleteGame = this.acceptDeleteGame.bind(this);
        this.cancelDeleteGame = this.cancelDeleteGame.bind(this);
        this.setMessageText = this.setMessageText.bind(this);
    }

    componentDidMount() {
        document.body.className = "chessboard-background";

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
        for (const name of Object.keys(this.games)) {
            gameList.push(<option value={name}>{name}</option>);
        }
        return gameList;
    }

    changeName(e) {
        const name = e.target.value;
        if (name === "choose") {
            this.selected = false;
            this.setState({ loaded: false, bValue: !this.state.bValue });
        } else {
            this.selected = true;
            this.setState({ gameName: name });
        }
    }

    toggleNav(boolVal) {
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

    setMessageText(helpTitle, helpText) {
        this.messageTitle = helpTitle;
        this.messageText = helpText;
        this.setState({ messageModal: true });
    }

    toggleMessageModal(boolVal) {
        this.setState({ messageModal: boolVal });
    }

    render() {
        if (this.state.loaded) {
            return (
                <Redirect
                    to={{
                        pathname: "/LoadGame/Play",
                        state: {
                            currentPath: "/LoadGame/Play",
                            gameName: JSON.parse(JSON.stringify(this.state.gameName)),
                            gameType: JSON.parse(JSON.stringify(this.gameData["type"])),
                            playerType: JSON.parse(JSON.stringify(this.gameData["pt"])),
                            gameData: JSON.parse(JSON.stringify(this.gameData)),
                        },
                    }}
                />
            );
        }

        return (
            <>
                <NavBar currentPage="LoadGame" theme={this.state.theme} unsavedChanges={false} />
                <img
                    src="/Images/text-labels/LoadGame.svg"
                    className={this.props.classes.title}
                    alt="title for loading game"
                />
                <select id="games" onChange={this.changeName}>
                    {this.getGameList()}
                </select>
                <button
                    className={
                        this.state.gameName ? this.props.classes.play_enabled : this.props.classes.play_disabled
                    }
                    onClick={this.load}
                >
                    Play
                </button>
                <button
                    className={
                        this.state.gameName ? this.props.classes.delete_enabled : this.props.classes.delete_disabled
                    }
                    onClick={this.askDeleteGame}
                >
                    Delete
                </button>
                {this.state.confirmDeleteModal && (
                    <ConfirmModal
                        text={`Are You Sure you want to delete game ${this.state.gameName}?`}
                        yesClick={this.acceptDeleteGame}
                        noClick={this.cancelDeleteGame}
                    />
                )}
            </>
        );
    }
}

export default withStyles(styles)(LoadGame);
