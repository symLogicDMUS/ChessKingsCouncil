import React from "react";
import clsx from "clsx";
import {Tabs} from "@material-ui/core";
import {Tab} from "@material-ui/core";
import {AppBar} from "@material-ui/core";
import NavBarButton from "./NavBarButton";
import HelpButton from "./Help/HelpButton";
import SettingsButton from "./SettingsButton";
import SignInOutButton from "../../Home/SignInOutButton";
import {marginLeftZero, useStyles as useMoreStyles} from "./NavBarRow.jss";
import {updateFirstVisit} from "../../CreatePiece/reducers/updateFirstVisit";
import { useStyles } from "./NavTabRow.jss";

/**
 * This component is intended to be wrapped in ternary condition and only rendered for view widths > 960px
 */
function NavTabRow(props) {
    const {
        theme,
        fullWidth,
        currentPage,
        helpText,
        helpTitle,
        screenCase,
        isUnsavedChanges,
        additionalSettings,
    } = props;

    const classes = useStyles({theme});
    const classes2 = useMoreStyles({theme});

    const indexes = {
        "Home": 0,
        "NewGame": 1,
        "LoadGame": 2,
        "CreatePiece": 3,
        "MyPieces": 4,
        "ChessRules": 6,
        "CouncilRules": 7,
        "AuthorGithub": 8,
        "Help": 9,
        "Settings": 10,
        "SignInOut": 11,
    }

    return (
        <div className={classes.root}>
            <AppBar className={classes2.nav_tab_row}>
                <Tabs
                    variant="scrollable"
                    value={indexes[currentPage]}
                    indicatorColor={"secondary"}
                    className={clsx(classes.nav_tab_row, {
                        [classes2.full_width]: fullWidth,
                    })}
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
                        id={"NewGame"}
                        label={
                            <NavBarButton
                                path="/NewGame"
                                pageName="New Game"
                                pageIcon="new-game"
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
                        id={"LoadGame"}
                        label={
                            <NavBarButton
                                path="/LoadGame"
                                key="/LoadGame"
                                pageName="Load Game"
                                pageIcon="load-game"
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
                        id={"CreatePiece"}
                        label={
                            <NavBarButton
                                path="/CreatePiece"
                                key="/CreatePiece"
                                pageName="Create Piece"
                                pageIcon="create-piece"
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
                        id={"MyPieces"}
                        label={
                            <NavBarButton
                                path="/MyPieces"
                                key="/MyPieces"
                                pageName="Saved Pieces"
                                pageIcon="my-pieces"
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
                        id={"ChessRules"}
                        label={
                            <NavBarButton
                                key="chess-dot-com"
                                path="https://www.chess.com/learn-how-to-play-chess"
                                pageName="Chess Rules"
                                pageIcon="chess-rules"
                                isRow={true}
                                theme={theme}
                                isLocalLink={false}
                                screenCase={screenCase}
                                currentPage={currentPage}
                                isUnsavedChanges={isUnsavedChanges}
                            />
                        }
                    />
                    <Tab
                        id={"CouncilRules"}
                        label={
                            <NavBarButton
                                key="/CouncilRules"
                                path="/CouncilRules"
                                pageName="Council Rules"
                                pageIcon="council-rules"
                                isLocalLink={true}
                                theme={theme}
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
                                isRow={true}
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
                                isRow={true}
                                currentPage={currentPage}
                                helpTitle={helpTitle}
                                screenCase={screenCase}
                                updateFirstVisit={updateFirstVisit}
                            >
                                {helpText}
                            </HelpButton>
                        }
                    />
                    <Tab
                        id={"Settings"}
                        label={
                            <SettingsButton
                                theme={theme}
                                isRow={true}
                                key="MuiSettings-Tab"
                                currentPage={currentPage}
                                screenCase={screenCase}
                            >
                                {additionalSettings}
                            </SettingsButton>
                        }
                    />
                    <Tab
                        id={"SignInOut"}
                        label={
                            <SignInOutButton
                                theme={theme}
                                style={marginLeftZero}
                                className={classes2.sign_out_button}
                            />
                        }
                    />
                </Tabs>
            </AppBar>
        </div>
    );
}

export default NavTabRow;