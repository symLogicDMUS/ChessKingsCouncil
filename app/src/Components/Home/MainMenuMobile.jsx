import React from "react";
import Box from "@material-ui/core/Box";
import { PageLinkMobile } from "./PageLinkMobile";
import { SignOutMobile } from "./SignOutMobile";
import { fontSize002 } from "../styles/fontSizes.jss";
import { useStyles } from "./MainMenuMoblile.jss";
import {Background} from "../Reuseables/Background";

export function MainMenuMobile(props) {
    const classes = useStyles({ theme: props.theme });
    return (
        <>
            <Background isFixed={true} theme={props.theme} />
            <div className={classes.main_menu}>
                <img
                    src={`/Images/titles/mobile/main-menu/title-${props.theme}.svg`}
                    className={classes.title}
                />
                <Box>
                    <SignOutMobile signOut={props.signOut} theme={props.theme} />
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
                        pageName="My Pieces"
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
                        pageName="Author's GitHub"
                        theme={props.theme}
                    />
                </Box>
            </div>
        </>
    );
}
