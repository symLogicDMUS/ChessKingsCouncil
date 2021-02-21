import React from "react";
import {v4 as uuidv4} from "uuid";
import Box from "@material-ui/core/Box";
import {HelpButton} from "./HelpButton";
import {NavBarButton} from "./NavBarButton";
import {useStyles} from "./NavBar.jss";

export function NavBar(props) {

    const classes = useStyles({currentPage: props.currentPage, screenCase: props.screenCase});

    let redirectMessage = "If you leave this page you will lose your unsaved work. Do you want to continue?";
    if (props.redirectMessage) {
        redirectMessage = props.redirectMessage;
    }

    return (
        <>
            <Box className={classes.nav_bar}>
                <HelpButton
                    pageIcon="help"
                    key={uuidv4()}
                    theme={props.theme}
                    currentPage={props.currentPage}
                    screenCase={props.screenCase}
                    helpTitle={props.helpTitle}
                >
                    {props.helpText}
                </HelpButton>
                <NavBarButton
                    path="/"
                    pageName="Home"
                    pageIcon="home"
                    className="home"
                    key={uuidv4()}
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
                    pageName="Load Game"
                    pageIcon="load-game"
                    className="load_game"
                    key={uuidv4()}
                    isLocalLink={true}
                    theme={props.theme}
                    currentPage={props.currentPage}
                    screenCase={props.screenCase}
                    isUnsavedChanges={props.isUnsavedChanges}
                />
                <NavBarButton
                    path="/CreatePiece"
                    pageName="Create Piece"
                    pageIcon="create-piece"
                    className="create_piece"
                    key={uuidv4()}
                    isLocalLink={true}
                    theme={props.theme}
                    currentPage={props.currentPage}
                    screenCase={props.screenCase}
                    isUnsavedChanges={props.isUnsavedChanges}
                />
                <NavBarButton
                    path="/MyPieces"
                    pageName="Saved Pieces"
                    pageIcon="my-pieces"
                    className="my_pieces"
                    key={uuidv4()}
                    isLocalLink={true}
                    theme={props.theme}
                    currentPage={props.currentPage}
                    screenCase={props.screenCase}
                    isUnsavedChanges={props.isUnsavedChanges}
                />
                <NavBarButton
                    path="https://www.chess.com/learn-how-to-play-chess"
                    pageName="Chess Rules"
                    pageIcon="chess-rules"
                    className="chess_rules"
                    key={uuidv4()}
                    isLocalLink={false}
                    theme={props.theme}
                    currentPage={props.currentPage}
                    screenCase={props.screenCase}
                    isUnsavedChanges={props.isUnsavedChanges}
                />
                <NavBarButton
                    path="/CouncilRules"
                    pageName="Council Rules"
                    pageIcon="council-rules"
                    className="council_rules"
                    key={uuidv4()}
                    isLocalLink={true}
                    theme={props.theme}
                    currentPage={props.currentPage}
                    screenCase={props.screenCase}
                    isUnsavedChanges={props.isUnsavedChanges}
                />
                <NavBarButton
                    path="https://github.com/symLogicDMUS"
                    pageName="Author Github"
                    pageIcon="author-github"
                    className="author_github"
                    key={uuidv4()}
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
