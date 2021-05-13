import React, {useEffect, useState} from "react";
import {PageLink} from "./PageLink";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import InfoIcon from '@material-ui/icons/Info';
import SignInOutButton from "./SignInOutButton";
import "../styles/Background/_backgrounds.scss"
import {Background} from "../styles/Background/Background";
import {HelpButton} from "../Reuseables/NavBar/Help/HelpButton";
import {SettingsButton} from "../Reuseables/NavBar/SettingsButton";
import MainMenuDrawer from "../Reuseables/Drawers/MainMenuDrawer";
import {useStyles} from "./MainMenuLg.jss";

export function MainMenuLg(props) {

    useEffect(() => {
        document.body.className = `${props.theme}-background`;
    }, [props.theme]);

    const [about, setAbout] = useState(false);

    const classes = useStyles({theme: props.theme});

    return (
        <>
            {about ? (
                <MainMenuDrawer theme={props.theme} />
            ) : (
                <>
                    <Background theme={props.theme} isFixed={true} lgScreenBar={true} />
                    <Box className={classes.top_area}>
                        <Button
                            onClick={() => setAbout(true)}
                            className={classes.button}
                            startIcon={<InfoIcon />}
                        >
                            <Typography variant={'body1'}>
                                About
                            </Typography>
                        </Button>
                        <HelpButton
                            currentPage={"Home"}
                            theme={props.theme}
                            screenCase='wide'
                            helpTitle={null}
                            updateFirstVisit={null}
                        />
                        <SettingsButton
                            theme={props.theme}
                            screenCase='wide'
                            currentPage='Home'
                        />
                        <SignInOutButton
                            theme={props.theme}
                            variant={'contained'}
                            className={classes.button}
                        />
                    </Box>
                    <Box className={classes.main_menu}>
                        <img src={`/Images/text/app title/title-${props.theme}.svg`} className={classes.title} />
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
            )}
        </>
    );
}
