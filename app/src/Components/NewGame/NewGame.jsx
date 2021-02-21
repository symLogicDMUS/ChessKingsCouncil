import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import "../styles/_backgrounds.scss";
import "../styles/scrollbar.scss";
import MediaQuery from "react-responsive/src";
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {PlayAs} from "./GameOptions/PlayAs";
import {PickType} from "./GameOptions/PickType";
import {GameName} from "./GameOptions/GameName";
import {NavBar} from "../Reuseables/NavBar/NavBar";
import PersistentDrawer from "../Reuseables/PersistentDrawer";
import {charNotInStr} from "../helpers/charNotInStr";
import {getColorLetter} from "../helpers/getColorLetter";
import {resolveScreenCase} from "../helpers/resolveScreenCase";
import {fontSize002, fontSizeW0045} from "../styles/fontSizes.jss";
import {HelpText} from "./GameOptions/HelpText";
import {HelpTitle} from "../Reuseables/HelpTitle";
import {Background} from "../Reuseables/Background";
import {useStyles} from "./NewGame.jss";
import * as PropTypes from "prop-types";
import {Play} from "./Play";

Play.propTypes = {
    onClick: PropTypes.func,
    classes: PropTypes.any,
    theme: PropTypes.string,
    playerType: PropTypes.any,
    gameType: PropTypes.any,
    gameName: PropTypes.string,
    predicate: PropTypes.func
};

function NewGame() {
    let history = useHistory();

    const [gameName, updateGameName] = useState("");
    const [gameType, updateGameType] = useState(null);
    const [playerType, updatePlayerType] = useState(null);
    const [focus, setFocus] = useState(null);
    const [theme, setTheme] = useState("tan");

    useEffect(() => {
        document.body.className = "tan-background";
    });

    const classes = useStyles();

    const setGameName = (e) => {
        updateGameName(e.target.value);
    };

    const setPlayerType = (typePlayer) => {
        if (typePlayer !== "Test") updatePlayerType(getColorLetter(typePlayer));
        else updatePlayerType(typePlayer);
    };

    const setGameType = (gameType) => {
        updateGameType(gameType);
    };

    const finish = () => {
        if (gameType === 'Custom') {
            history.push("/Customize", {
                gameName: gameName,
                gameType: gameType,
                playerType: playerType
            });
        } else {
            history.push("/Play", {
                gameName: gameName,
                gameType: gameType,
                playerType: playerType
            });
        }
    };

    return (
        <>
            <div className={`scrollbar-${theme}`}>
                <MediaQuery minAspectRatio={'1/1'} minDeviceWidth={992}>
                    <Background theme={theme} navBar={true} currentPage='NewGame'/>
                    <NavBar
                        currentPage="NewGame"
                        screenCase='desktop'
                        helpText={HelpText(fontSize002, theme)}
                        helpTitle={<HelpTitle theme={theme}>New Game</HelpTitle>}
                        theme={theme}
                    />
                    <Box className={classes.new_game}>
                        <GameName
                            key='GameName-Desktop'
                            theme={theme}
                            setGameName={setGameName}
                            screenCase='desktop'
                        />
                        <PickType
                            key='PickType-Desktop'
                            theme={theme}
                            gameType={gameType}
                            setGameType={setGameType}
                            screenCase='desktop'
                        />
                        <PlayAs
                            theme={theme}
                            key='PlayAs-Desktop'
                            setPlayerType={setPlayerType}
                            screenCase='desktop'
                        />
                        <Play
                            theme={theme}
                            onClick={finish}
                            classes={classes}
                            playerType={playerType}
                            gameType={gameType} gameName={gameName}
                            predicate={(c) => charNotInStr(c, gameName)}
                            key='Play-Button-Desktop'
                        />
                    </Box>
                </MediaQuery>
                <MediaQuery maxAspectRatio={'1/1'}>
                    <Background theme={theme} appBar={true}/>
                    <PersistentDrawer
                        theme={theme}
                        drawer={
                            <NavBar
                                currentPage="NewGame"
                                screenCase={resolveScreenCase('mobile')}
                                helpText={HelpText(fontSizeW0045, theme)}
                                helpTitle={<HelpTitle theme={theme}>New Game</HelpTitle>}
                                redirectMessage={null}
                                theme={theme}
                            />
                        }
                        appBarContent={
                            <Box width='100%'
                                 style={{
                                     width: '100%',
                                     display: 'flex',
                                     flexDirection: 'row',
                                     flexWrap: 'nowrap',
                                     alignItems: 'center',
                                     justifyContent: 'space-between',
                                 }}
                            >
                                <Typography variant='h6' noWrap>
                                    New Game
                                </Typography>
                                <Play
                                    theme={theme}
                                    onClick={finish}
                                    classes={classes}
                                    playerType={playerType}
                                    gameType={gameType} gameName={gameName}
                                    predicate={(c) => charNotInStr(c, gameName)}
                                    key='Play-Button-Mobile'
                                />
                            </Box>

                        }
                    >
                        <Box className={classes.new_game}>
                            <GameName
                                theme={theme}
                                key='GameName-Mobile'
                                setGameName={setGameName}
                                screenCase='mobile'
                                onFocus={() => setFocus('game-name')}
                            />
                            <PickType
                                theme={theme}
                                key="PickType-Mobile"
                                gameType={gameType}
                                setGameType={setGameType}
                                screenCase='mobile'
                            />
                            <PlayAs
                                theme={theme}
                                setPlayerType={setPlayerType}
                                onFocus={() => setFocus('play-as')}
                                key="PlayAs-Mobile"
                                screenCase='mobile'
                            />
                        </Box>
                    </PersistentDrawer>
                </MediaQuery>
                {/*<MediaQuery minAspectRatio={'1/1'} maxDeviceWidth={767}>*/}
                {/*        <PersistentDrawer*/}
                {/*            theme={theme}*/}
                {/*            drawer={*/}
                {/*                <NavBar*/}
                {/*                    currentPage="NewGame"*/}
                {/*                    screenCase={resolveScreenCase('mobile')}*/}
                {/*                    helpText={HelpText(fontSizeW0045, theme)}*/}
                {/*                    helpTitle={<HelpTitle theme={theme}>New Game</HelpTitle>}*/}
                {/*                    redirectMessage={null}*/}
                {/*                    theme={theme}*/}
                {/*                />*/}
                {/*            }*/}
                {/*            appBarContent={<Typography variant='h6' noWrap>New Game</Typography>}*/}
                {/*        >*/}
                {/*            <Box className={classes.new_game}>*/}
                {/*                {focus === 'game-name' ? (*/}
                {/*                    <GameName*/}
                {/*                        key='GameName-Focused'*/}
                {/*                        theme={theme}*/}
                {/*                        screenCase='mobile'*/}
                {/*                        setGameName={setGameName}*/}
                {/*                    />*/}
                {/*                ) : null}*/}
                {/*                {focus === 'play-as' ? (*/}
                {/*                    <PlayAs setPlayerType={setPlayerType} theme={theme} onFocus={() => setFocus('play-as')} screenCase='mobile' key="PlayAs-Focus" />*/}
                {/*                ) : null}*/}
                {/*            </Box>*/}
                {/*        </PersistentDrawer>*/}
                {/*</MediaQuery>*/}
            </div>
        </>
    );
}

export default NewGame;