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
import { MuiButton as Button } from "../Reuseables/MuiButton";
import "../styles/_backgrounds.scss";
import { themes } from "../styles/themes.jss";
import { Typography } from "@material-ui/core";
import { copy } from "../helpers/copy";
import { Dropdown } from "../Reuseables/Dropdown";
import { styles, dropdown, play_button, delete_button } from "./LoadGame.jss";
import MenuItem from "@material-ui/core/MenuItem";
import { getTheme } from "../styles/getTheme.jss";
import { drawerWidth } from "../CreatePiece/CreatePiece.jss";
import { fontSize } from "../styles/fontSize.jss";

class LoadGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reload: 0,
            theme: "black",
            selectedGame: null,
            bValue: false,
            navExpanded: true,
            userChoseGame: false,
            confirmDeleteModal: false,
        };
        this.gameList = [
            <MenuItem value="None">
                <em>None</em>
            </MenuItem>,
        ];
        this.playButton = <button onClick={this.load}>Play</button>;
        this.deleteButton = (
            <button onClick={this.askDeleteGame}>Delete</button>
        );
        this.council = false;
        this.selected = false;
        this.dataEntry = null;
        this.pieceDefs = null;
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

    toggleNav(boolVal) {
        this.navExpanded = boolVal;
        this.setState({ navExpanded: boolVal });
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

    setMessageText(helpTitle, helpText) {
        this.messageTitle = helpTitle;
        this.messageText = helpText;
        this.setState({ messageModal: true });
    }

    toggleMessageModal(boolVal) {
        this.setState({ messageModal: boolVal });
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
                            gameType: copy(this.gameData["type"]),
                            playerType: copy(this.gameData["pt"]),
                            gameData: copy(this.gameData),
                        },
                    }}
                />
            );
        }

        return (
            <>
                <NavBar
                    currentPage="LoadGame"
                    theme={this.state.theme}
                    style={{fontSize: fontSize, width: '100%', height: '2.25em'}}
                    buttonStyle={{fontSize: fontSize, height: '2.25em', justifyContent: 'center'}}
                    unsavedChanges={false}
                />
                <Typography className={this.props.classes.title} noWrap={true}>
                    Load Game
                </Typography>
                <Dropdown
                    list={this.gameList}
                    overwrite={null}
                    updateParent={this.changeName}
                    theme={getTheme(this.state.theme)}
                    style={dropdown}
                    variant={"outlined"}
                    labelId={"pick-name-label"}
                    inputId={"pick-name-input"}
                    selectId={"pick-name-select"}
                    label={"Pick name..."}
                    inputLabel={"Pick name..."}
                />
                <Button
                    onClick={() => this.load()}
                    variant={"contained"}
                    theme={getTheme(this.state.theme)}
                    isDisabled={this.isDisabled()}
                    style={play_button}
                >
                    Play
                </Button>
                <Button
                    onClick={() => this.askDeleteGame()}
                    variant={"contained"}
                    theme={themes.black}
                    isDisabled={this.isDisabled()}
                    style={delete_button}
                >
                    Delete
                </Button>
                {this.state.confirmDeleteModal && (
                    <ConfirmModal
                        theme={getTheme(this.state.theme)}
                        title={`Are You Sure you want to delete game ${this.state.selectedGame}?`}
                        yesClick={this.acceptDeleteGame}
                        noClick={this.cancelDeleteGame}
                        closeClick={this.cancelDeleteGame}
                    />
                )}
            </>
        );
    }
}

export default withStyles(styles)(LoadGame);
