import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import Box from "@material-ui/core/Box";
import "../Reuseables/Background/_backgrounds.scss";
import {Play} from "./Play";
import {PlayAs} from "./GameOptions/PlayAs";
import {PickType} from "./GameOptions/PickType";
import {GameName} from "./GameOptions/GameName";
import {NavBar} from "../Reuseables/NavBar/NavBar";
import {fontSize002, fontSize0026, fontSizeW0045} from "../styles/fontSizes.jss";
import {charNotInStr} from "../helpers/charNotInStr";
import {getColorLetter} from "../helpers/getColorLetter";
import {HelpText} from "./GameOptions/HelpText";
import {HelpTitle} from "../Reuseables/NavBar/Help/HelpTitle";
import {ConfirmStandard} from "./ConfirmStandard";
import {Background} from "../Reuseables/Background/Background";
import ResponsiveDrawer from "../Reuseables/Drawers/ResponsiveDrawer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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

    const isThin = useMediaQuery("(max-width:960px)");
    const isWide = useMediaQuery("(min-width:960px)");

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
            <Background theme={theme} appBar={isThin} navBar={isWide}/>
            <ResponsiveDrawer
                theme={theme}
                navBar={
                    <NavBar
                        currentPage="NewGame"
                        helpText={HelpText(fontSizeW0045, theme)}
                        helpTitle={<HelpTitle theme={theme} fontSize={fontSize0026}>New Game</HelpTitle>}
                        redirectMessage={null}
                        updateTheme={updateTheme}
                        additionalSettings={null}
                        theme={theme}
                    />
                }
                navHorizontal={isWide}
                appBarContent="New Game"
                appBarType="title"
                toolButtons={null}
                tools={null}
            >
                <Box className={classes.new_game}>
                    <GameName
                        theme={theme}
                        key='GameName'
                        setGameName={setGameName}
                        screenCase={isWide ? 'wide' : 'thin'}
                    />
                    <PickType
                        theme={theme}
                        key="PickType"
                        gameType={gameType}
                        setGameType={setGameType}
                        screenCase={isWide ? 'wide' : 'thin'}
                    />
                    <PlayAs
                        theme={theme}
                        setPlayerType={setPlayerType}
                        key="PlayAs"
                        screenCase={isWide ? 'wide' : 'thin'}
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
            </ResponsiveDrawer>
        </>
    );
}

export default NewGame;