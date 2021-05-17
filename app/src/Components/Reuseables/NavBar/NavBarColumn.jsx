import React from "react";
import Box from "@material-ui/core/Box";
import HelpButton from "./Help/HelpButton";
import NavBarButton from "./NavBarButton";
import SettingsButton from "./SettingsButton";
import {updateFirstVisit} from
        "../../CreatePiece/reducers/updateFirstVisit";
import { useStyles } from "./NavBarColumn.jss";

function NavBarColumn(props) {
    const {
        theme,
        screenCase,
        currentPage,
        helpTitle,
        helpText,
        additionalSettings,
        isUnsavedChanges
    } = props;

    const classes = useStyles();

    return (
        <Box className={classes.nav_bar}>
            <NavBarButton
                path="/"
                key="/"
                pageName="Home"
                pageIcon="home"
                isLocalLink={true}
                theme={theme}
                isRow={false}
                screenCase={screenCase}
                currentPage={currentPage}
                isUnsavedChanges={isUnsavedChanges}
            />
            <HelpButton
                key="Help"
                pageIcon="help"
                theme={theme}
                isRow={false}
                currentPage={currentPage}
                helpTitle={helpTitle}
                screenCase={screenCase}
                updateFirstVisit={updateFirstVisit}
            >
                {helpText}
            </HelpButton>
            <SettingsButton
                theme={theme}
                isRow={false}
                key="MuiSettings-Button"
                currentPage={currentPage}
                screenCase={screenCase}
            >
                {additionalSettings}
            </SettingsButton>
            <NavBarButton
                path="/NewGame"
                pageName="New Game"
                pageIcon="new-game"
                isLocalLink={true}
                theme={theme}
                isRow={false}
                screenCase={screenCase}
                currentPage={currentPage}
                isUnsavedChanges={isUnsavedChanges}
            />
            <NavBarButton
                path="/LoadGame"
                key="/LoadGame"
                pageName="Load Game"
                pageIcon="load-game"
                isLocalLink={true}
                theme={theme}
                isRow={false}
                screenCase={screenCase}
                currentPage={currentPage}
                isUnsavedChanges={isUnsavedChanges}
            />
            <NavBarButton
                path="/CreatePiece"
                key="/CreatePiece"
                pageName="Create Piece"
                pageIcon="create-piece"
                isLocalLink={true}
                theme={theme}
                isRow={false}
                screenCase={screenCase}
                currentPage={currentPage}
                isUnsavedChanges={isUnsavedChanges}
            />
            <NavBarButton
                path="/MyPieces"
                key="/MyPieces"
                pageName="Saved Pieces"
                pageIcon="my-pieces"
                isLocalLink={true}
                theme={theme}
                isRow={false}
                screenCase={screenCase}
                currentPage={currentPage}
                isUnsavedChanges={isUnsavedChanges}
            />
            <NavBarButton
                key="chess-dot-com"
                path="https://www.chess.com/learn-how-to-play-chess"
                pageName="Chess Rules"
                pageIcon="chess-rules"
                isLocalLink={false}
                theme={theme}
                isRow={false}
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
                isRow={false}
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
                isRow={false}
                screenCase={screenCase}
                currentPage={currentPage}
                isUnsavedChanges={isUnsavedChanges}
            />
        </Box>
    );
}

export default NavBarColumn;