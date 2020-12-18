import React, {useState} from "react";
import Help from "./Help/Help";
import {NavBarButton} from "./NavBarButton";
import {ConfirmRedirect} from "./ConfirmRedirect";
import {HelpButton} from "./Help/HelpButton";
import Box from "@material-ui/core/Box";
import {fontSize} from "../styles/fontSize.jss";
import {useStyles} from "./NavBar.jss";

export function NavBar(props) {


    let [isHelpModal, setIsHelpModal] = useState(false)
    let [isRedirectModal, setIsRedirectModal] = useState(false)
    let [pendingRedirect, setPendingRedirect] = useState(null)
    let [isLocalLink, setIsLocalLink] = useState(true)
    let [firstTime, setFirstTime] = useState(false)

    const classes = useStyles({theme: props.theme, fontSize: fontSize, flexDirection: props.flexDirection})

    let redirectMessage = "If you leave this page you will lose your unsaved work. Do you want to continue?";
    if (props.redirectMessage) redirectMessage = props.redirectMessage;

    const toggleHelpModal = (boolVal) => {
        setIsHelpModal(boolVal);
        setFirstTime(false)
    }

    const setIsFirstTime = (firstTime) => {
        setFirstTime(firstTime);
    }

    const toggleConfirmRedirect = (bValue, path, isLocalLink) => {
        setIsLocalLink(isLocalLink);
        setIsRedirectModal(bValue)
        setPendingRedirect(pendingRedirect)
    }

    return (
        <>
            {(isHelpModal || firstTime) && (
                <Help
                    pageName={props.currentPage}
                    firstTime={firstTime}
                    togleHelpModal={toggleHelpModal}
                    posLeft={263 / 1536}
                />
            )}
            {isRedirectModal && (
                <ConfirmRedirect
                    theme={props.theme}
                    path={pendingRedirect}
                    message={redirectMessage}
                    isLocalLink={isLocalLink}
                    toggleConfirmRedirect={toggleConfirmRedirect}
                    flexDirection={props.flexDirection}
                />
            )}
            <Box className={classes.nav_bar}>
                <HelpButton
                    currentPage={props.currentPage}
                    togleHelpModal={toggleHelpModal}
                    setIsFirstTime={setIsFirstTime}
                    theme={props.theme}
                    pageIcon="help"
                    flexDirection={props.flexDirection}
                />
                <NavBarButton
                    pageName="Home"
                    path="/"
                    pageIcon="home"
                    className="home"
                    isLocalLink={true}
                    toggleConfirmRedirect={toggleConfirmRedirect}
                    theme={props.theme}
                    unsavedChanges={props.unsavedChanges}
                    flexDirection={props.flexDirection}
                />
                <NavBarButton
                    pageName="New Game"
                    path="/NewGame"
                    pageIcon="new-game"
                    className="new_game"
                    isLocalLink={true}
                    toggleConfirmRedirect={toggleConfirmRedirect}
                    theme={props.theme}
                    unsavedChanges={props.unsavedChanges}
                    flexDirection={props.flexDirection}
                />
                <NavBarButton
                    pageName="Load Game"
                    path="/LoadGame"
                    pageIcon="load-game"
                    className="load_game"
                    isLocalLink={true}
                    toggleConfirmRedirect={toggleConfirmRedirect}
                    theme={props.theme}
                    unsavedChanges={props.unsavedChanges}
                    flexDirection={props.flexDirection}
                />
                <NavBarButton
                    pageName="Create Piece"
                    path="/CreatePiece"
                    pageIcon="create-piece"
                    className="create_piece"
                    isLocalLink={true}
                    toggleConfirmRedirect={toggleConfirmRedirect}
                    theme={props.theme}
                    unsavedChanges={props.unsavedChanges}
                    flexDirection={props.flexDirection}
                />
                <NavBarButton
                    pageName="Chess Rules"
                    path="https://www.chess.com/learn-how-to-play-chess"
                    pageIcon="chess-rules"
                    className="chess_rules"
                    isLocalLink={false}
                    toggleConfirmRedirect={toggleConfirmRedirect}
                    unsavedChanges={props.unsavedChanges}
                    theme={props.theme}
                    flexDirection={props.flexDirection}
                />
                <NavBarButton
                    pageName="Council Rules"
                    path="/CouncilRules"
                    pageIcon="council-rules"
                    className="council_rules"
                    isLocalLink={true}
                    toggleConfirmRedirect={toggleConfirmRedirect}
                    theme={props.theme}
                    unsavedChanges={props.unsavedChanges}
                    flexDirection={props.flexDirection}
                />
                <NavBarButton
                    pageName="My Pieces"
                    path="/MyPieces"
                    pageIcon="my-pieces"
                    className="my_pieces"
                    isLocalLink={true}
                    toggleConfirmRedirect={toggleConfirmRedirect}
                    theme={props.theme}
                    unsavedChanges={props.unsavedChanges}
                    flexDirection={props.flexDirection}
                />
                <NavBarButton
                    pageName="Author Github"
                    path="https://github.com/symLogicDMUS"
                    pageIcon="author-github"
                    className="author_github"
                    isLocalLink={false}
                    toggleConfirmRedirect={toggleConfirmRedirect}
                    theme={props.theme}
                    unsavedChanges={props.unsavedChanges}
                    flexDirection={props.flexDirection}
                />
            </Box>
        </>
    );
}
