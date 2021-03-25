import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import MediaQuery from "react-responsive/src";
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import "../Reuseables/Background/_backgrounds.scss";
import {Play} from "./Play";
import {PlayAs} from "./GameOptions/PlayAs";
import {PickType} from "./GameOptions/PickType";
import {GameName} from "./GameOptions/GameName";
import {NavBar} from "../Reuseables/NavBar/NavBar";
import PersistentDrawer from "../Reuseables/Drawers/PersistentDrawer";
import {pageTitleStyle} from "../Reuseables/Drawers/PersistentDrawer.jss";
import {fontSize002, fontSize0026, fontSizeW0045} from "../styles/fontSizes.jss";
import {charNotInStr} from "../helpers/charNotInStr";
import {getColorLetter} from "../helpers/getColorLetter";
import {HelpText} from "./GameOptions/HelpText";
import {HelpTitle} from "../Reuseables/NavBar/Help/HelpTitle";
import {ConfirmStandard} from "./ConfirmStandard";
import {Background} from "../Reuseables/Background/Background";
import {useStyles} from "./NewGame.jss";


function NewGame() {
    const history = useHistory();
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

    const updateTheme = (theme) => {
        setTheme(theme)
    }

    return (
        <>
            <MediaQuery minWidth={960}>
                <Background theme={theme} navBar={true} currentPage='NewGame'/>
                <NavBar
                    currentPage="NewGame"
                    screenCase='wide'
                    helpText={HelpText(fontSize002, theme)}
                    helpTitle={<HelpTitle theme={theme} fontSize={fontSize0026}>New Game</HelpTitle>}
                    additionalSettings={null}
                    updateTheme={updateTheme}
                    theme={theme}
                />
                <Box className={classes.new_game}>
                    <GameName
                        key='GameName-wide'
                        theme={theme}
                        setGameName={setGameName}
                        screenCase='wide'
                    />
                    <PickType
                        key='PickType-wide'
                        theme={theme}
                        gameType={gameType}
                        setGameType={setGameType}
                        screenCase='wide'
                    />
                    <PlayAs
                        theme={theme}
                        key='PlayAs-wide'
                        setPlayerType={setPlayerType}
                        screenCase='wide'
                    />
                    <Play
                        theme={theme}
                        onClick={finish}
                        classes={classes}
                        playerType={playerType}
                        gameType={gameType} gameName={gameName}
                        predicate={(c) => charNotInStr(c, gameName)}
                        key='Play-Button-wide'
                    />
                </Box>
                {confirmModal ? (
                    <ConfirmStandard
                        theme={theme}
                        closeClick={() => {
                            updateGameType('Standard')
                            setConfirmModal(false)
                        }}
                        onClick={() => {
                            updateGameType('Custom')
                            setConfirmModal(false)
                        }}
                    />
                ) : null}
            </MediaQuery>
            <MediaQuery maxWidth={960}>
                <Background theme={theme} appBar={true}/>
                <PersistentDrawer
                    theme={theme}
                    drawer={
                        <NavBar
                            currentPage="NewGame"
                            screenCase='thin'
                            helpText={HelpText(fontSizeW0045, theme)}
                            helpTitle={<HelpTitle theme={theme} fontSize={fontSize0026}>New Game</HelpTitle>}
                            redirectMessage={null}
                            updateTheme={updateTheme}
                            additionalSettings={null}
                            theme={theme}
                        />
                    }
                    appBarContent={
                        <Typography variant='subtitle1' style={pageTitleStyle} noWrap>
                            New Game
                        </Typography>
                    }
                >
                    <Box className={classes.new_game}>
                        <GameName
                            theme={theme}
                            key='GameName-thin'
                            setGameName={setGameName}
                            screenCase='thin'
                        />
                        <PickType
                            theme={theme}
                            key="PickType-thin"
                            gameType={gameType}
                            setGameType={setGameType}
                            screenCase='thin'
                        />
                        <PlayAs
                            theme={theme}
                            setPlayerType={setPlayerType}
                            key="PlayAs-thin"
                            screenCase='thin'
                        />
                        <Play
                            theme={theme}
                            onClick={finish}
                            classes={classes}
                            playerType={playerType}
                            gameType={gameType} gameName={gameName}
                            predicate={(c) => charNotInStr(c, gameName)}
                            key='Play-Button-thin'
                        />
                    </Box>
                    {confirmModal ? (
                        <ConfirmStandard
                            theme={theme}
                            closeClick={() => {
                                updateGameType('Standard')
                                setConfirmModal(false)
                            }}
                            onClick={() => {
                                updateGameType('Custom')
                                setConfirmModal(false)
                            }}
                        />
                    ) : null}
                </PersistentDrawer>
            </MediaQuery>
        </>
    );
}

export default NewGame;