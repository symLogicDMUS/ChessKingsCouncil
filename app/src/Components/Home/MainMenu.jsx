import React, {useEffect, useState} from "react";
import Box from "@material-ui/core/Box";
import {PageLink} from "./PageLink";
import {MuiButton as Button} from "../Reuseables/MuiButton";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {fontSize} from "../styles/fontSize.jss";
import "./Home.scss";
import "../styles/_backgrounds.scss"
import {useStyles} from "./MainMenu.jss";


export function MainMenu(props) {

    const classes = useStyles({theme: props.theme, fontSize: fontSize});

    return (
        <>
            <Box className={classes.top}>
                <Button
                    onClick={props.signOut}
                    startIcon={<AccountBoxIcon />}
                    theme={props.theme}
                    variant="contained"
                >
                    Sign Out
                </Button>
            </Box>
            <Box className={classes.main_menu}>
                <img src={`/Images/titles/title-${props.theme}.svg`} className={classes.title} />
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
                        icon='my-pieces-cutout'
                        path="/MyPieces"
                        pathType="local"
                        line1='My'
                        line2='Pieces'
                        theme={props.theme}
                    />
                    <PageLink
                        icon='author-github-cutout'
                        path="https://github.com/symLogicDMUS/ChessKingsCouncil"
                        pathType="remote"
                        line1="Author's"
                        line2="Github"
                        theme={props.theme}
                    />
                </Box>
            </Box>
        </>
    );
}
