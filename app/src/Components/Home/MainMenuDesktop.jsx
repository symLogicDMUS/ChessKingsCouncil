import React from "react";
import Box from "@material-ui/core/Box";
import "../styles/_backgrounds.scss"
import {PageLinkDesktop} from "./PageLinkDesktop";
import {MuiButton as Button} from "../Reuseables/MuiButton";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Background} from "../Reuseables/Background";
import {useStyles} from "./MainMenuDesktop.jss";


export function MainMenuDesktop(props) {

    const classes = useStyles({theme: props.theme});

    return (
        <>
            <Background theme={props.theme} isFixed={true} />
            <Box className={classes.top}>
                <Button
                    onClick={props.signOut}
                    startIcon={<AccountBoxIcon className={classes.icon} />}
                    classesObj={{root: classes.sign_out_button}}
                    theme={props.theme}
                    variant="contained"
                >
                    Sign Out
                </Button>
            </Box>
            <Box className={classes.main_menu}>
                <img src={`/Images/titles/desktop/title-${props.theme}.svg`} className={classes.title} />
                <Box className={classes.page_links}>
                    <PageLinkDesktop
                        icon='new-game-cutout'
                        path="/NewGame"
                        pageName="New Game"
                        pathType="local"
                        theme={props.theme}
                    />
                    <PageLinkDesktop
                        icon='load-game-cutout'
                        path="/LoadGame"
                        pageName="Load Game"
                        pathType="local"
                        theme={props.theme}
                    />
                    <PageLinkDesktop
                        icon='create-piece-cutout'
                        path="/CreatePiece"
                        pageName="Create Piece"
                        pathType="local"
                        theme={props.theme}
                    />
                    <PageLinkDesktop
                        icon='my-pieces-cutout'
                        path="/MyPieces"
                        pageName="Saved Pieces"
                        pathType="local"
                        theme={props.theme}
                    />
                    <PageLinkDesktop
                        icon='chess-rules-cutout'
                        path="https://www.chess.com/learn-how-to-play-chess"
                        pageName="Chess Rules"
                        pathType="remote"
                        theme={props.theme}
                    />
                    <PageLinkDesktop
                        icon='council-rules-cutout'
                        path="/CouncilRules"
                        pageName="Council Rules"
                        pathType="local"
                        theme={props.theme}
                    />
                    <PageLinkDesktop
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
