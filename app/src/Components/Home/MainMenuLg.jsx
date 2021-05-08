import React from "react";
import {PageLink} from "./PageLink";
import Box from "@material-ui/core/Box";
import SignInOutButton from "./SignInOutButton";
import "../Reuseables/Background/_backgrounds.scss"
import {Background} from "../Reuseables/Background/Background";
import {useStyles} from "./MainMenuLg.jss";


export function MainMenuLg(props) {

    const classes = useStyles({theme: props.theme});

    return (
        <>
            <Background theme={props.theme} isFixed={true} />
            <Box className={classes.top_area}>
                <SignInOutButton theme={props.theme} variant={'contained'} className={classes.signOutButton} />
            </Box>
            <Box className={classes.main_menu}>
                <img src={`/Images/titles/desktop/title-${props.theme}.svg`} className={classes.title} />
                <Box className={classes.page_links}>
                    <PageLink
                        icon='new-game-cutout'
                        path="/NewGame"
                        pageName="New Game"
                        pathType="local"
                        theme={props.theme}
                    />
                    <PageLink
                        icon='load-game-cutout'
                        path="/LoadGame"
                        pageName="Load Game"
                        pathType="local"
                        theme={props.theme}
                    />
                    <PageLink
                        icon='create-piece-cutout'
                        path="/CreatePiece"
                        pageName="Create Piece"
                        pathType="local"
                        theme={props.theme}
                    />
                    <PageLink
                        icon='my-pieces-cutout'
                        path="/MyPieces"
                        pageName="Saved Pieces"
                        pathType="local"
                        theme={props.theme}
                    />
                    <PageLink
                        icon='chess-rules-cutout'
                        path="https://www.chess.com/learn-how-to-play-chess"
                        pageName="Chess Rules"
                        pathType="remote"
                        theme={props.theme}
                    />
                    <PageLink
                        icon='council-rules-cutout'
                        path="/CouncilRules"
                        pageName="Council Rules"
                        pathType="local"
                        theme={props.theme}
                    />
                    <PageLink
                        icon='author-github-cutout'
                        path="https://github.com/symLogicDMUS/ChessKingsCouncil"
                        pageName="Author GitHub"
                        pathType="remote"
                        theme={props.theme}
                    />
                </Box>
            </Box>
        </>
    );
}
