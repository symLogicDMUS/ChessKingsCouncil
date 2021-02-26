import React, {useEffect, useState} from "react";
import MediaQuery from "react-responsive/src";
import {useHistory} from "react-router-dom";
import Box from "@material-ui/core/Box";
import "../styles/_backgrounds.scss";
import "../styles/scrollbar.scss";
import {Play} from "./Play";
import {Typography} from "@material-ui/core";
import {PlayAs} from "./GameOptions/PlayAs";
import {PickType} from "./GameOptions/PickType";
import {GameName} from "./GameOptions/GameName";
import {NavBar} from "../Reuseables/NavBar/NavBar";
import PersistentDrawer from "../Reuseables/PersistentDrawer";
import {fontSize002, fontSizeW0045} from "../styles/fontSizes.jss";
import {charNotInStr} from "../helpers/charNotInStr";
import {getColorLetter} from "../helpers/getColorLetter";
import {HelpText} from "./GameOptions/HelpText";
import {HelpTitle} from "../Reuseables/HelpTitle";
import {Background} from "../Reuseables/Background";
import {useStyles} from "./NewGame.jss";
import {StandardModal} from "../Reuseables/StandardModal";
import {MuiButton} from "../Reuseables/MuiButton";

function NewGame() {
    let history = useHistory();

    const [gameName, updateGameName] = useState("");
    const [gameType, updateGameType] = useState(null);
    const [playerType, updatePlayerType] = useState(null);
    const [confirmModal, setConfirmModal] = useState(false);
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
        if (gameType === 'Standard') {
            setConfirmModal(true)
        } else {
            updateGameType(gameType);
        }
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
                <MediaQuery minDeviceWidth={1040}>
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
                    {confirmModal ? (
                        <StandardModal
                            theme={theme}
                            title={"Are you sure you don't want to try Custom?"}
                            text={"Exercise your creativity with the exciting custom feature, create your own unique Chess game!"}
                            closeClick={() => {
                                updateGameType('Standard')
                                setConfirmModal(false)
                            }}
                        >
                            <MuiButton onClick={() => {
                                updateGameType('Custom')
                                setConfirmModal(false)
                            }} theme={theme}>Show me the customization!</MuiButton>
                            <MuiButton onClick={() => {
                                updateGameType('Standard')
                                setConfirmModal(false)
                            }} theme={theme}>Sorry, I want to play regular old Chess.</MuiButton>
                        </StandardModal>
                    ) : null}
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1040}>
                    <Background theme={theme} appBar={true}/>
                    <PersistentDrawer
                        theme={theme}
                        drawer={
                            <NavBar
                                currentPage="NewGame"
                                screenCase='mobile'
                                helpText={HelpText(fontSizeW0045, theme)}
                                helpTitle={<HelpTitle theme={theme}>New Game</HelpTitle>}
                                redirectMessage={null}
                                theme={theme}
                            />
                        }
                        appBarContent={
                            <Typography variant='h6' noWrap>
                                New Game
                            </Typography>
                        }
                    >
                        <Box className={classes.new_game}>
                            <GameName
                                theme={theme}
                                key='GameName-Mobile'
                                setGameName={setGameName}
                                screenCase='mobile'
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
                                key="PlayAs-Mobile"
                                screenCase='mobile'
                            />
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
                    </PersistentDrawer>
                </MediaQuery>
            </div>
        </>
    );
}

export default NewGame;