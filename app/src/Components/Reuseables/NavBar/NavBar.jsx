import React, {useEffect, useState} from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {NavBarButton} from "./NavBarButton";
import {HelpButton} from "./Help/HelpButton";
import {SettingsButton} from "./SettingsButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SignInOutButton from "../../Home/SignInOutButton";
import {marginLeftZero, useStyles} from "./NavBar.jss";


/**
 * children is settings content unique to parent page.
 */
function NavBar(props) {
    const isWide = useMediaQuery("(min-width:960px)");
    const screenCase = isWide ? "wide" : "thin";

    const classes = useStyles({ theme: props.theme });

    const isRowDirection =
        screenCase === "wide" &&
        (props.currentPage === "NewGame" ||
            props.currentPage === "LoadGame" ||
            props.currentPage === "MyPieces" ||
            props.currentPage === "CouncilRules");

    const isColumnDirection =
        screenCase === "wide" &&
        (props.currentPage === "CreatePiece" ||
            props.currentPage === "GameRoot" ||
            props.currentPage === "Customize" ||
            props.currentPage === "MainMenu");

    return (
        <>
            <Box
                className={clsx(classes.nav_bar, {
                    [classes.nav_drawer]: screenCase === "thin",
                    [classes.row_direction]: isRowDirection,
                    [classes.column_direction]: isColumnDirection,
                })}
            >
                <HelpButton
                    key="Help"
                    pageIcon="help"
                    theme={props.theme}
                    currentPage={props.currentPage}
                    helpTitle={props.helpTitle}
                    screenCase={screenCase}
                    updateFirstVisit={props.updateFirstVisit}
                >
                    {props.helpText}
                </HelpButton>
                <SettingsButton
                    key="MuiSettings-Button"
                    theme={props.theme}
                    updateTheme={props.updateTheme}
                    currentPage={props.currentPage}
                    screenCase={screenCase}
                >
                    {props.additionalSettings}
                </SettingsButton>
                <NavBarButton
                    path="/"
                    key="/"
                    pageName="Home"
                    pageIcon="home"
                    isLocalLink={true}
                    theme={props.theme}
                    screenCase={screenCase}
                    currentPage={props.currentPage}
                    isUnsavedChanges={props.isUnsavedChanges}
                />
                <NavBarButton
                    path="/NewGame"
                    pageName="New Game"
                    pageIcon="new-game"
                    isLocalLink={true}
                    theme={props.theme}
                    screenCase={screenCase}
                    currentPage={props.currentPage}
                    isUnsavedChanges={props.isUnsavedChanges}
                />
                <NavBarButton
                    path="/LoadGame"
                    key="/LoadGame"
                    pageName="Load Game"
                    pageIcon="load-game"
                    isLocalLink={true}
                    theme={props.theme}
                    screenCase={screenCase}
                    currentPage={props.currentPage}
                    isUnsavedChanges={props.isUnsavedChanges}
                />
                <NavBarButton
                    path="/CreatePiece"
                    key="/CreatePiece"
                    pageName="Create Piece"
                    pageIcon="create-piece"
                    isLocalLink={true}
                    theme={props.theme}
                    screenCase={screenCase}
                    currentPage={props.currentPage}
                    isUnsavedChanges={props.isUnsavedChanges}
                />
                <NavBarButton
                    path="/MyPieces"
                    key="/MyPieces"
                    pageName="Saved Pieces"
                    pageIcon="my-pieces"
                    isLocalLink={true}
                    theme={props.theme}
                    screenCase={screenCase}
                    currentPage={props.currentPage}
                    isUnsavedChanges={props.isUnsavedChanges}
                />
                <NavBarButton
                    key="chess-dot-com"
                    path="https://www.chess.com/learn-how-to-play-chess"
                    pageName="Chess Rules"
                    pageIcon="chess-rules"
                    isLocalLink={false}
                    theme={props.theme}
                    screenCase={screenCase}
                    currentPage={props.currentPage}
                    isUnsavedChanges={props.isUnsavedChanges}
                />
                <NavBarButton
                    key="/CouncilRules"
                    path="/CouncilRules"
                    pageName="Council Rules"
                    pageIcon="council-rules"
                    isLocalLink={true}
                    theme={props.theme}
                    screenCase={screenCase}
                    currentPage={props.currentPage}
                    isUnsavedChanges={props.isUnsavedChanges}
                />
                <NavBarButton
                    key="github-dot-com"
                    path="https://github.com/symLogicDMUS"
                    pageName="Author Github"
                    pageIcon="author-github"
                    isLocalLink={false}
                    theme={props.theme}
                    screenCase={screenCase}
                    currentPage={props.currentPage}
                    isUnsavedChanges={props.isUnsavedChanges}
                />
                {isRowDirection && (
                    <SignInOutButton
                        theme={props.theme}
                        className={classes.sign_out_button}
                        style={marginLeftZero}
                    />
                )}
            </Box>
        </>
    );
}

export default NavBar;
