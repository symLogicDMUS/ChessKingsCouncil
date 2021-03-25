import React from "react";
import MediaQuery from "react-responsive/src";
import {SignOutMobile} from "./SignOutMobile";
import {PageLinkMobile} from "./PageLinkMobile";
import {Background} from "../Reuseables/Background/Background";
import {useStyles} from "./MainMenuMobile.jss";


export function MainMenuMobile(props) {
    const classes = useStyles({theme: props.theme});
    return (
        <>
            <Background isFixed={true} theme={props.theme}/>
            <div className={classes.main_menu}>
                <MediaQuery maxWidth={767}>
                    <img
                        src={`/Images/titles/mobile/main-menu/title-${props.theme}.svg`}
                        className={classes.title}
                    />
                </MediaQuery>
                <MediaQuery minWidth={768}>
                    <img
                        src={`/Images/titles/wide/title-${props.theme}.svg`}
                        className={classes.title}
                    />
                </MediaQuery>
                <SignOutMobile
                    theme={props.theme}
                    signOut={props.signOut}
                    screenCase='thin'
                />
                <PageLinkMobile
                    path="/NewGame"
                    pathType="local"
                    icon="new-game"
                    pageName="New Game"
                    theme={props.theme}
                />
                <PageLinkMobile
                    path="/LoadGame"
                    pathType="local"
                    icon="load-game"
                    pageName="Load Game"
                    theme={props.theme}
                />
                <PageLinkMobile
                    path="/CreatePiece"
                    pathType="local"
                    icon="create-piece"
                    pageName="Create Piece"
                    theme={props.theme}
                />
                <PageLinkMobile
                    path="/MyPieces"
                    pathType="local"
                    icon="my-pieces"
                    pageName="Saved Pieces"
                    theme={props.theme}
                />
                <PageLinkMobile
                    path="https://www.chess.com/learn-how-to-play-chess"
                    pathType="remote"
                    icon="chess-rules"
                    pageName="Chess Rules"
                    theme={props.theme}
                />
                <PageLinkMobile
                    path="/CouncilRules"
                    pathType="local"
                    icon="council-rules"
                    pageName="Council Rules"
                    theme={props.theme}
                />
                <PageLinkMobile
                    path="https://github.com/symLogicDMUS/ChessKingsCouncil"
                    pathType="remote"
                    icon="author-github"
                    pageName="Author GitHub"
                    theme={props.theme}
                />
            </div>
        </>
    );
}
