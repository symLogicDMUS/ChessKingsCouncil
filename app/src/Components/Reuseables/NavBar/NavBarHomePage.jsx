import React from "react";
import clsx from "clsx";
import { Slide, Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import NavBarButton from "./NavBarButton";
import HelpButton from "./Help/HelpButton";
import SettingsButton from "./SettingsButton";
import SignInOutButton from "../../Home/Sign In/SignInOutButton";
import { updateFirstVisit } from "../../CreatePiece/reducers/updateFirstVisit";
import { marginLeftZero, useStyles } from "./NavBarRow.jss";

/**
 * This component is intended to be wrapped in ternary condition and only rendered for view widths > 960px
 */
function NavBarRow(props) {
    const {
        theme,
        show,
        fullWidth,
        currentPage,
        screenCase,
        isUnsavedChanges,
        additionalSettings,
        ...other
    } = props;

    const classes = useStyles({ theme });

    const indexes = {
        Home: 0,
        Help: 1,
        Settings: 2,
        NewGame: 3,
        LoadGame: 4,
        CreatePiece: 5,
        MyPieces: 6,
        ChessRules: 7,
        CouncilRules: 8,
        AuthorGithub: 9,
        SignInOut: 10,
    };

    return (
        <div className={classes.root}>
            <AppBar
                className={clsx(classes.nav_tab_row, {
                    [classes.full_width]: fullWidth,
                    [classes.condensed]: !fullWidth,
                })}
                {...other}
            >
                <Slide in={show} direction={"right"}>
                    <Tabs
                        variant="scrollable"
                        value={indexes[currentPage]}
                        indicatorColor={"secondary"}
                    >
                        <Tab
                            id={"Home"}
                            label={
                                <NavBarButton
                                    path="/"
                                    key="/"
                                    pageName="Home"
                                    pageIcon="home"
                                    isRow={true}
                                    theme={theme}
                                    isLocalLink={true}
                                    screenCase={screenCase}
                                    currentPage={currentPage}
                                    isUnsavedChanges={isUnsavedChanges}
                                />
                            }
                        />
                        <Tab
                            id={"Help"}
                            label={
                                <HelpButton
                                    key="Help"
                                    pageIcon="help"
                                    theme={theme}
                                    screenCase={screenCase}
                                    currentPage={currentPage}
                                />
                            }
                        />
                        <Tab
                            id={"Settings"}
                            label={
                                <SettingsButton
                                    theme={theme}
                                    key="MuiSettings-Tab"
                                    currentPage={currentPage}
                                    screenCase={screenCase}
                                >
                                    {additionalSettings}
                                </SettingsButton>
                            }
                        />
                        <Tab
                            id={"NewGame"}
                            label={
                                <NavBarButton
                                    path="/NewGame"
                                    pageName="New Game"
                                    pageIcon="new-game"
                                    theme={theme}
                                    isLocalLink={true}
                                    screenCase={screenCase}
                                    currentPage={currentPage}
                                    isUnsavedChanges={isUnsavedChanges}
                                />
                            }
                        />
                        <Tab
                            id={"LoadGame"}
                            label={
                                <NavBarButton
                                    path="/LoadGame"
                                    key="/LoadGame"
                                    pageName="Load Game"
                                    pageIcon="load-game"
                                    theme={theme}
                                    isLocalLink={true}
                                    screenCase={screenCase}
                                    currentPage={currentPage}
                                    isUnsavedChanges={isUnsavedChanges}
                                />
                            }
                        />
                        <Tab
                            id={"CreatePiece"}
                            label={
                                <NavBarButton
                                    path="/CreatePiece"
                                    key="/CreatePiece"
                                    pageName="Create Piece"
                                    pageIcon="create-piece"
                                    theme={theme}
                                    isLocalLink={true}
                                    screenCase={screenCase}
                                    currentPage={currentPage}
                                    isUnsavedChanges={isUnsavedChanges}
                                />
                            }
                        />
                        <Tab
                            id={"MyPieces"}
                            label={
                                <NavBarButton
                                    path="/MyPieces"
                                    key="/MyPieces"
                                    pageName="Saved Pieces"
                                    pageIcon="my-pieces"
                                    theme={theme}
                                    isLocalLink={true}
                                    screenCase={screenCase}
                                    currentPage={currentPage}
                                    isUnsavedChanges={isUnsavedChanges}
                                />
                            }
                        />
                        <Tab
                            id={"ChessRules"}
                            label={
                                <NavBarButton
                                    key="chess-dot-com"
                                    path="https://www.chess.com/learn-how-to-play-chess"
                                    pageName="Chess Rules"
                                    pageIcon="chess-rules"
                                    theme={theme}
                                    isLocalLink={false}
                                    screenCase={screenCase}
                                    currentPage={currentPage}
                                    isUnsavedChanges={isUnsavedChanges}
                                />
                            }
                        />
                        <Tab
                            id={"AuthorGithub"}
                            label={
                                <NavBarButton
                                    key="github-dot-com"
                                    path="https://github.com/symLogicDMUS"
                                    pageName="Author Github"
                                    pageIcon="author-github"
                                    isLocalLink={false}
                                    theme={theme}
                                    screenCase={screenCase}
                                    currentPage={currentPage}
                                    isUnsavedChanges={isUnsavedChanges}
                                />
                            }
                        />
                        <Tab
                            id={"SignInOut"}
                            label={
                                <SignInOutButton
                                    theme={theme}
                                    style={marginLeftZero}
                                    className={classes.sign_out_button}
                                />
                            }
                        />
                    </Tabs>
                </Slide>
            </AppBar>
        </div>
    );
}

export default NavBarRow;
