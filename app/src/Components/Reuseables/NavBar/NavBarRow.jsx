import React from "react";
import clsx from "clsx";
import MediaQuery from "react-responsive/src";
import NavBarRowMore from "./NavBarRowMore";
import Box from "@material-ui/core/Box";
import NavBarButton from "./NavBarButton";
import HelpButton from "./Help/HelpButton";
import SettingsButton from "./SettingsButton";
import SignInOutButton from "../../Home/SignInOutButton";
import {updateFirstVisit} from "../../CreatePiece/reducers/updateFirstVisit";
import {marginLeftZero, useStyles} from "./NavBarRow.jss";


/**
 * row direction is the default, but will change to column direction for smaller view widths.
 */
function NavBarRow(props) {
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

    return (
        <>
            <Box
                className={clsx(classes.nav_row, {
                    [classes.full_width]: fullWidth,
                })}
            >
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
                <MediaQuery maxWidth={1550}>
                    <NavBarRowMore
                        theme={theme}
                        screenCase={screenCase}
                        helpText={helpText}
                        helpTitle={helpTitle}
                        currentPage={currentPage}
                        updateFirstVisit={updateFirstVisit}
                        additionalSettings={additionalSettings}
                        classes={classes}
                    />
                </MediaQuery>
                <MediaQuery minWidth={1550}>
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
                    <SettingsButton
                        theme={theme}
                        isRow={true}
                        key="MuiSettings-Button"
                        currentPage={currentPage}
                        screenCase={screenCase}
                    >
                        {additionalSettings}
                    </SettingsButton>
                    <SignInOutButton
                        theme={theme}
                        style={marginLeftZero}
                        className={classes.sign_out_button}
                    />
                </MediaQuery>
            </Box>
        </>
    );
}

export default NavBarRow;