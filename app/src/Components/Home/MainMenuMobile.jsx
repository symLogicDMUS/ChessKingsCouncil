import React from "react";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import { SignOutMobile } from "./SignOutMobile";
import { PageLinkMobile } from "./PageLinkMobile";
import {Background} from "../Reuseables/Background";
import { useStyles } from "./MainMenuMoblile.jss";

export function MainMenuMobile(props) {
    const classes = useStyles({ theme: props.theme });
    return (
        <>
            <Background isFixed={true} theme={props.theme} />
            <div className={classes.main_menu}>
                <MediaQuery maxAspectRatio={'834/1194'}>
                    <Box className={classes.title_box}>
                        <img
                            src={`/Images/titles/mobile/main-menu/title-${props.theme}.svg`}
                            className={classes.title}
                        />
                    </Box>
                </MediaQuery>
                <MediaQuery minAspectRatio={'834/1194'}>
                    <img
                        src={`/Images/titles/desktop/title-${props.theme}.svg`}
                        className={classes.title}
                    />
                </MediaQuery>
                <Box className={classes.page_links}>
                    <SignOutMobile
                        signOut={props.signOut}
                        theme={props.theme}
                        style={{marginBottom: '0.5em', marginTop: '0.5em'}}
                        iconStyle={{transform: 'translate(0, -0.22em'}}
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
                        style={{marginBottom: '1em'}}
                    />
                    <PageLinkMobile
                        path="/MyPieces"
                        pathType="local"
                        icon="my-pieces"
                        pageName="My Pieces"
                        theme={props.theme}
                        style={{marginBottom: '0.5em'}}
                        iconStyle={{transform: 'translate(0, -0.22em'}}
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
                </Box>
            </div>
        </>
    );
}
