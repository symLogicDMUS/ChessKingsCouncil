import React, {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {useHistory} from "react-router-dom";
import "../styles/_backgrounds.scss";
import "../styles/scrollbar.scss";
import MediaQuery from "react-responsive/src";
import {Portal, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {PlayAs} from "./GameOptions/PlayAs";
import {PickType} from "./GameOptions/PickType";
import {GameName} from "./GameOptions/GameName";
import {NavBar} from "../Reuseables/NavBar/NavBar";
import {invalids} from "../helpers/invalids";
import PersistentDrawer from "../Reuseables/PersistentDrawer";
import {MuiButton} from "../Reuseables/MuiButton";
import {charNotInStr} from "../helpers/charNotInStr";
import {getColorLetter} from "../helpers/getColorLetter";
import {resolveScreenCase} from "../helpers/resolveScreenCase";
import {fontSize002, fontSizeW0045} from "../styles/fontSizes.jss";
import {HelpText} from "./GameOptions/HelpText";
import {HelpTitle} from "../Reuseables/HelpTitle";
import {Background} from "../Reuseables/Background";
import {themes} from "../styles/themes.jss";
import {useStyles} from "./NewGame.jss";

function NewGame() {
    let history = useHistory();

    let [gameName, updateGameName] = useState("");
    let [gameType, updateGameType] = useState(null);
    let [playerType, updatePlayerType] = useState(null);
    let [theme, setTheme] = useState("tan");

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
                <MediaQuery minAspectRatio={'1001/1000'} minDeviceWidth={768}>
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
                        />
                        <PickType
                            key='PickType-Desktop'
                            theme={theme}
                            gameType={gameType}
                            setGameType={setGameType}
                        />
                        <PlayAs
                            theme={theme}
                            key='PlayAs-Desktop'
                            setPlayerType={setPlayerType}
                        >
                            <MuiButton
                                key="PlayButton-Desktop"
                                onClick={finish}
                                classesObj={{root: classes.play_button}}
                                style={{color: themes[theme].button_fill}}
                                variant="contained"
                                theme={theme}
                                isDisabled={
                                    !(
                                        playerType &&
                                        gameType &&
                                        gameName !== "" &&
                                        invalids.every((c) => charNotInStr(c, gameName))
                                    )
                                }
                            >
                                Play
                            </MuiButton>
                        </PlayAs>

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
                        appBarContent={<Typography variant='h6' noWrap>New Game</Typography>}
                    >
                        <Box className={classes.new_game}>
                            <GameName
                                theme={theme}
                                key='GameName-Mobile'
                                setGameName={setGameName}
                            />
                            <PickType
                                theme={theme}
                                key="PickType-Mobile"
                                gameType={gameType}
                                setGameType={setGameType}
                            />
                            <PlayAs setPlayerType={setPlayerType} theme={theme} key="PlayAs-Mobile">
                                <MuiButton
                                    theme={theme}
                                    onClick={finish}
                                    variant="contained"
                                    key="PlayButton-Mobile"
                                    classesObj={{root: classes.play_button}}
                                    style={{color: themes[theme].button_fill}}
                                    isDisabled={
                                        !(
                                            playerType &&
                                            gameType &&
                                            gameName !== "" &&
                                            invalids.every((c) => charNotInStr(c, gameName))
                                        )
                                    }
                                    screenCase={resolveScreenCase('mobile')}
                                >
                                    Play
                                </MuiButton>
                            </PlayAs>
                        </Box>
                    </PersistentDrawer>
                </MediaQuery>
            </div>
        </>
    );
}

export default NewGame;