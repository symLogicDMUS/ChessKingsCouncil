import React from "react";
import {SignOutMobile} from "./SignOutMobile";
import {PageLinkMobile} from "./PageLinkMobile";
import MainMenuDrawer from "../Reuseables/AppBar/MainMenuDrawer";
import {NavBar} from "../Reuseables/NavBar/NavBar";
import {MainMenuBody} from "./MainMenuBody";
import {useStyles} from "./MainMenuMobile.jss";


export function MainMenuMobile(props) {
    const classes = useStyles({theme: props.theme});
    return (
        <>
            <MainMenuDrawer
                theme={props.theme}
                content={<MainMenuBody theme={props.theme} />}
            >
                <NavBar
                    currentPage="MainMenu"
                    helpText={null}
                    helpTitle={null}
                    redirectMessage={null}
                    theme={props.theme}
                    updateTheme={props.updateTheme}
                    additionalSettings={null}
                />
            </MainMenuDrawer>
            {/*<div className={classes.main_menu}>*/}
            {/*    <SignOutMobile*/}
            {/*        theme={props.theme}*/}
            {/*        signOut={props.signOut}*/}
            {/*        screenCase='thin'*/}
            {/*    />*/}
            {/*    <PageLinkMobile*/}
            {/*        path="/NewGame"*/}
            {/*        pathType="local"*/}
            {/*        icon="new-game"*/}
            {/*        pageName="New Game"*/}
            {/*        theme={props.theme}*/}
            {/*    />*/}
            {/*    <PageLinkMobile*/}
            {/*        path="/LoadGame"*/}
            {/*        pathType="local"*/}
            {/*        icon="load-game"*/}
            {/*        pageName="Load Game"*/}
            {/*        theme={props.theme}*/}
            {/*    />*/}
            {/*    <PageLinkMobile*/}
            {/*        path="/CreatePiece"*/}
            {/*        pathType="local"*/}
            {/*        icon="create-piece"*/}
            {/*        pageName="Create Piece"*/}
            {/*        theme={props.theme}*/}
            {/*    />*/}
            {/*    <PageLinkMobile*/}
            {/*        path="/MyPieces"*/}
            {/*        pathType="local"*/}
            {/*        icon="my-pieces"*/}
            {/*        pageName="Saved Pieces"*/}
            {/*        theme={props.theme}*/}
            {/*    />*/}
            {/*    <PageLinkMobile*/}
            {/*        path="https://www.chess.com/learn-how-to-play-chess"*/}
            {/*        pathType="remote"*/}
            {/*        icon="chess-rules"*/}
            {/*        pageName="Chess Rules"*/}
            {/*        theme={props.theme}*/}
            {/*    />*/}
            {/*    <PageLinkMobile*/}
            {/*        path="/CouncilRules"*/}
            {/*        pathType="local"*/}
            {/*        icon="council-rules"*/}
            {/*        pageName="Council Rules"*/}
            {/*        theme={props.theme}*/}
            {/*    />*/}
            {/*    <PageLinkMobile*/}
            {/*        path="https://github.com/symLogicDMUS/ChessKingsCouncil"*/}
            {/*        pathType="remote"*/}
            {/*        icon="author-github"*/}
            {/*        pageName="Author GitHub"*/}
            {/*        theme={props.theme}*/}
            {/*    />*/}
            {/*</div>*/}
        </>
    );
}
