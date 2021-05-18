import React from "react";
import {Tabs} from "@material-ui/core";
import {Tab} from "@material-ui/core";
import NavBarButton from "./NavBarButton";
import HelpButton from "./Help/HelpButton";
import SettingsButton from "./SettingsButton";
import {updateFirstVisit} from "../../CreatePiece/reducers/updateFirstVisit";
import { useStyles } from "./NavBarColumn.jss";

/**
 * This component is intended to be wrapped in ternary condition and only rendered for view widths > 960px
 */
function NavBarColumn(props) {
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

    const indexes = {
        "Home": 0,
        "Help": 1,
        "Settings": 2,
        "NewGame": 3,
        "LoadGame": 4,
        "CreatePiece": 5,
        "MyPieces": 6,
        "ChessRules": 7,
        "CouncilRules": 8,
        "AuthorGithub": 9,
    }

    return (
        <div className={classes.root}>
            <Tabs
                variant="scrollable"
                value={indexes[currentPage]}
                indicatorColor={"secondary"}
                orientation={"vertical"}
            >
                <Tab
                    id={"Home"}
                    label={
                        <NavBarButton
                            path="/"
                            key="/"
                            pageName="Home"
                            pageIcon="home"
                            isRow={false}
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
                    id={"NewGame"}
                    label={
                        <NavBarButton
                            path="/NewGame"
                            pageName="New Game"
                            pageIcon="new-game"
                            isRow={false}
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
                            isRow={false}
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
                            isRow={false}
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
                            isRow={false}
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
                            isRow={false}
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
            </Tabs>
        </div>
    );
}

export default NavBarColumn;