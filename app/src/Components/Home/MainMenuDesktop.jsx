import React from "react";
import Box from "@material-ui/core/Box";
import "../styles/_backgrounds.scss"
import {PageLink} from "./PageLink";
import {MuiButton as Button} from "../Reuseables/MuiButton";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {fontSize002} from "../styles/fontSizes.jss";
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
                    <PageLink
                        icon='new-game-cutout'
                        path="/NewGame"
                        pathType="local"
                        line1='New'
                        line2='Game'
                        theme={props.theme}
                    />
                    <PageLink
                        icon='load-game-cutout'
                        path="/LoadGame"
                        pathType="local"
                        line1='Load'
                        line2='Game'
                        theme={props.theme}
                    />
                    <PageLink
                        icon='create-piece-cutout'
                        path="/CreatePiece"
                        pathType="local"
                        line1='Create'
                        line2='Piece'
                        theme={props.theme}
                    />
                    <PageLink
                        icon='my-pieces-cutout'
                        path="/MyPieces"
                        pathType="local"
                        line1='My'
                        line2='Pieces'
                        theme={props.theme}
                    />
                    <PageLink
                        icon='chess-rules-cutout'
                        path="https://www.chess.com/learn-how-to-play-chess"
                        pathType="remote"
                        line1='Chess'
                        line2='Rules'
                        theme={props.theme}
                    />
                    <PageLink
                        icon='council-rules-cutout'
                        path="/CouncilRules"
                        pathType="local"
                        line1='Council'
                        line2='Rules'
                        theme={props.theme}
                    />
                    <PageLink
                        icon='author-github-cutout'
                        path="https://github.com/symLogicDMUS/ChessKingsCouncil"
                        pathType="remote"
                        line1="Author's"
                        line2="GitHub"
                        theme={props.theme}
                    />
                </Box>
            </Box>
        </>
    );
}
