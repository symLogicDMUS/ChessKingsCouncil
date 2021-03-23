import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import { HelpButton } from "./Help/HelpButton";
import { SettingsButton } from "./SettingsButton";
import { NavBarButton } from "./NavBarButton";
import { useStyles } from "./NavBar.jss";

/**
 * children is settings content unique to parent page.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export function NavBar(props) {
    const classes = useStyles();

    return (
        <>
            <Box
                className={clsx(classes.nav_bar, {
                    [classes.nav_drawer]: props.screenCase === "mobile",
                    [classes.row_direction]:
                        props.screenCase === "desktop" &&
                        (props.currentPage === "NewGame" ||
                            props.currentPage === "LoadGame" ||
                            props.currentPage === "MyPieces" ||
                            props.currentPage === "CouncilRules"),
                    [classes.column_direction]:
                        props.screenCase === "desktop" &&
                        (props.currentPage === "CreatePiece" ||
                            props.currentPage === "GameRoot" ||
                            props.currentPage === "Customize"),
                })}
            >
                <HelpButton
                    key="Help"
                    pageIcon="help"
                    theme={props.theme}
                    currentPage={props.currentPage}
                    screenCase={props.screenCase}
                    helpTitle={props.helpTitle}
                    updateFirstVisit={props.updateFirstVisit}
                >
                    {props.helpText}
                </HelpButton>
                <SettingsButton
                    key="MuiSettings-Button"
                    theme={props.theme}
                    updateTheme={props.updateTheme}
                    currentPage={props.currentPage}
                    screenCase={props.screenCase}
                >
                    {props.additionalSettings}
                </SettingsButton>
                <NavBarButton
                    path="/"
                    key="/"
                    pageName="Home"
                    pageIcon="home"
                    className="home"
                    isLocalLink={true}
                    theme={props.theme}
                    currentPage={props.currentPage}
                    screenCase={props.screenCase}
                    isUnsavedChanges={props.isUnsavedChanges}
                />
                <NavBarButton
                    path="/NewGame"
                    pageName="New Game"
                    pageIcon="new-game"
                    className="new_game"
                    isLocalLink={true}
                    theme={props.theme}
                    currentPage={props.currentPage}
                    screenCase={props.screenCase}
                    isUnsavedChanges={props.isUnsavedChanges}
                />
                <NavBarButton
                    path="/LoadGame"
                    key="/LoadGame"
                    pageName="Load Game"
                    pageIcon="load-game"
                    className="load_game"
                    isLocalLink={true}
                    theme={props.theme}
                    currentPage={props.currentPage}
                    screenCase={props.screenCase}
                    isUnsavedChanges={props.isUnsavedChanges}
                />
                <NavBarButton
                    path="/CreatePiece"
                    key="/CreatePiece"
                    pageName="Create Piece"
                    pageIcon="create-piece"
                    className="create_piece"
                    isLocalLink={true}
                    theme={props.theme}
                    currentPage={props.currentPage}
                    screenCase={props.screenCase}
                    isUnsavedChanges={props.isUnsavedChanges}
                />
                <NavBarButton
                    path="/MyPieces"
                    key="/MyPieces"
                    pageName="Saved Pieces"
                    pageIcon="my-pieces"
                    className="my_pieces"
                    isLocalLink={true}
                    theme={props.theme}
                    currentPage={props.currentPage}
                    screenCase={props.screenCase}
                    isUnsavedChanges={props.isUnsavedChanges}
                />
                <NavBarButton
                    key="chess-dot-com"
                    path="https://www.chess.com/learn-how-to-play-chess"
                    pageName="Chess Rules"
                    pageIcon="chess-rules"
                    className="chess_rules"
                    isLocalLink={false}
                    theme={props.theme}
                    currentPage={props.currentPage}
                    screenCase={props.screenCase}
                    isUnsavedChanges={props.isUnsavedChanges}
                />
                <NavBarButton
                    key="/CouncilRules"
                    path="/CouncilRules"
                    pageName="Council Rules"
                    pageIcon="council-rules"
                    className="council_rules"
                    isLocalLink={true}
                    theme={props.theme}
                    currentPage={props.currentPage}
                    screenCase={props.screenCase}
                    isUnsavedChanges={props.isUnsavedChanges}
                />
                <NavBarButton
                    key="github-dot-com"
                    path="https://github.com/symLogicDMUS"
                    pageName="Author Github"
                    pageIcon="author-github"
                    className="author_github"
                    isLocalLink={false}
                    theme={props.theme}
                    currentPage={props.currentPage}
                    screenCase={props.screenCase}
                    isUnsavedChanges={props.isUnsavedChanges}
                />
            </Box>
        </>
    );
}
