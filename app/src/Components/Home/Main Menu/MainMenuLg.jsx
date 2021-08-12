import React, { useEffect, useState } from "react";
import PageLink from "./PageLink";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import InfoIcon from "@material-ui/icons/Info";
import "../../styles/Background/_backgrounds.scss";
import { svgStyle } from "../../styles/svgStyle.jss";
import { Slide, Typography } from "@material-ui/core";
import MainMenuHelpButton from "./MainMenuHelpButton";
import SignInOutButton from "../Sign In/SignInOutButton";
import MainMenuSettingsButton from "./MainMenuSettingsButton";
import MainMenuSm from "../../Reuseables/Drawers/MainMenuSm";
import { ReactComponent as Title } from "./main menu text/title.svg";
import { ReactComponent as NewGameText } from "./main menu text/New Game.svg";
import { ReactComponent as LoadGameText } from "./main menu text/Load Game.svg";
import { ReactComponent as CreatePieceText } from "./main menu text/Create Piece.svg";
import { ReactComponent as ChessRulesText } from "./main menu text/Chess Rules.svg";
import { ReactComponent as CouncilRulesText } from "./main menu text/Council Rules.svg";
import { ReactComponent as SavedPiecesText } from "./main menu text/Saved Pieces.svg";
import { ReactComponent as AuthorGitHubText } from "./main menu text/Author GitHub.svg";
import SvgBanner from "./SvgBanner";
import {
    bannerFileNames,
    bannerStyle,
    signOutStyleOverride,
    svgBannerThemes,
    useStyles,
} from "./MainMenuLg.jss";

function MainMenuLg(props) {
    useEffect(() => {
        document.body.className = `${props.theme}-background`;
    }, [props.theme]);

    const [about, setAbout] = useState(false);

    const classes = useStyles({ theme: props.theme });

    return (
        <>
            {about ? (
                <MainMenuSm
                    theme={props.theme}
                    toggleAboutPage={() => setAbout(false)}
                />
            ) : (
                <div className={classes.root}>
                    <Box className={classes.app_bar}>
                        <Button
                            onClick={() => setAbout(true)}
                            className={classes.button}
                            startIcon={<InfoIcon />}
                        >
                            <Typography variant={"body1"}>About</Typography>
                        </Button>
                        <MainMenuHelpButton
                            currentPage={"Home"}
                            theme={props.theme}
                            screenCase="wide"
                            helpTitle={null}
                            updateFirstVisit={null}
                        />
                        <MainMenuSettingsButton
                            theme={props.theme}
                            screenCase="wide"
                            currentPage="Home"
                        />
                        <SignInOutButton
                            theme={props.theme}
                            variant={"text"}
                            className={classes.button}
                            style={signOutStyleOverride(props.theme)}
                        />
                    </Box>
                    {svgBannerThemes.includes(props.theme) ? (
                        <SvgBanner
                            theme={props.theme}
                            className={classes.banner}
                            style={bannerStyle(props.theme)}
                        />
                    ) : (
                        <img
                            className={classes.banner}
                            src={`/Images/Banner/${
                                bannerFileNames[props.theme]
                            }`}
                            alt=""
                        />
                    )}
                    <Box className={classes.main_menu_container}>
                        <Slide direction={"right"} in={true}>
                            <Box className={classes.main_menu}>
                                <Title className={classes.title} />
                                <Box className={classes.page_links}>
                                    <PageLink
                                        path="/NewGame"
                                        pathType="local"
                                        theme={props.theme}
                                    >
                                        <NewGameText
                                            style={svgStyle}
                                            className={classes.page_link}
                                        />
                                    </PageLink>
                                    <PageLink
                                        path="/LoadGame"
                                        pathType="local"
                                        theme={props.theme}
                                    >
                                        <LoadGameText
                                            style={svgStyle}
                                            className={classes.page_link}
                                        />
                                    </PageLink>
                                    <PageLink
                                        path="/CreatePiece"
                                        pathType="local"
                                        theme={props.theme}
                                    >
                                        <CreatePieceText
                                            style={svgStyle}
                                            className={classes.page_link}
                                        />
                                    </PageLink>
                                    <PageLink
                                        path="/MyPieces"
                                        pathType="local"
                                        theme={props.theme}
                                    >
                                        <SavedPiecesText
                                            style={svgStyle}
                                            className={classes.page_link}
                                        />
                                    </PageLink>
                                    <PageLink
                                        path="https://www.chess.com/learn-how-to-play-chess"
                                        pathType="remote"
                                        theme={props.theme}
                                    >
                                        <ChessRulesText
                                            style={svgStyle}
                                            className={classes.page_link}
                                        />
                                    </PageLink>
                                    <PageLink
                                        path="/CouncilRules"
                                        pathType="local"
                                        theme={props.theme}
                                    >
                                        <CouncilRulesText
                                            style={svgStyle}
                                            className={classes.page_link}
                                        />
                                    </PageLink>
                                    <PageLink
                                        path="https://github.com/symLogicDMUS/ChessKingsCouncil"
                                        pathType="remote"
                                        theme={props.theme}
                                    >
                                        <AuthorGitHubText
                                            style={svgStyle}
                                            className={classes.page_link}
                                        />
                                    </PageLink>
                                </Box>
                            </Box>
                        </Slide>
                    </Box>
                </div>
            )}
        </>
    );
}

export default MainMenuLg;
