import React, {useEffect, useState} from "react";
import MediaQuery from "react-responsive/src";
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {PlayAs} from "./PlayAs";
import {PickType} from "./PickType";
import {PickName} from "./PickName";
import {NavBar} from "../../Reuseables/NavBar/NavBar";
import {invalids} from "../../helpers/invalids";
import PersistentDrawer from "../../Reuseables/PersistentDrawer";
import {MuiButton} from "../../Reuseables/MuiButton";
import {charNotInStr} from "../../helpers/charNotInStr";
import {getColorLetter} from "../../helpers/getColorLetter";
import {fontSize002} from "../../styles/fontSizes.jss";
import {HelpText, HelpTitle} from "./HelpText";
import {Background} from "../../Reuseables/Background";
import "../../styles/_backgrounds.scss";
import "../../styles/Scrollbar.scss";
import {useStyles, play_button} from "./GameOptions.jss";

export function GameOptions({setGameOptions}) {

    let [playerType, updatePlayerType] = useState(null);
    let [gameName, updateGameName] = useState("");
    let [gameType, updateGameType] = useState(null);
    let [theme, setTheme] = useState("tan");

    useEffect(() => {
        document.body.className = "tan-background";
    });

    const classes = useStyles({fontSize: fontSize002});

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

    return (

        <>
            {/*<Background theme={theme}/>*/}
            <div className={`scrollbar-${theme}`}>
                <MediaQuery minWidth={768}>
                    <NavBar
                        currentPage="GameOptions"
                        flexDirection="row"
                        theme={theme}
                        style={{
                            fontSize: fontSize002,
                            width: "100%",
                            height: "2.25em",
                        }}
                        helpTitle={HelpTitle(fontSize002, theme)}
                        helpText={HelpText(fontSize002, theme)}
                        buttonStyle={{
                            fontSize: fontSize002,
                            height: "2.25em",
                            justifyContent: "center",
                        }}
                    />
                    <Box className={classes.game_options}>
                        <PickName
                            setGameName={setGameName}
                            gameName={gameName}
                            theme={theme}
                            screenCase='desktop'
                        />
                        <PickType
                            setGameType={setGameType}
                            gameType={gameType}
                            theme={theme}
                            screenCase='desktop'
                        />
                        <PlayAs setPlayerType={setPlayerType} theme={theme} screenCase='desktop'/>
                        <MuiButton
                            onClick={() => setGameOptions(gameName, gameType, playerType)}
                            style={play_button(theme)}
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
                            screenCase='desktop'
                        >
                            Play
                        </MuiButton>
                    </Box>
                </MediaQuery>
                <MediaQuery maxWidth={767}>
                    <PersistentDrawer
                        theme={theme}
                        drawer={
                            <NavBar
                                currentPage="GameOptions"
                                flexDirection="column"
                                style={{width: "100%"}}
                                buttonStyle={{
                                    fontSize: fontSize002 * 1.2,
                                    justifyContent: "flex-start",
                                    width: "99%",
                                    height: "2.5em",
                                }}
                                helpTitle={HelpTitle(fontSize002, theme)}
                                helpText={HelpText(fontSize002, theme)}
                                redirectMessage={null}
                                theme={theme}
                            />
                        }
                        appBarContent={<Typography variant='h6' noWrap>Game Options</Typography>}
                    >
                        <Box className={classes.game_options}>
                            <PickName
                                setGameName={setGameName}
                                gameName={gameName}
                                theme={theme}
                                screenCase='mobile'
                            />
                            <PickType
                                setGameType={setGameType}
                                gameType={gameType}
                                theme={theme}
                                screenCase='mobile'
                            />
                            <PlayAs setPlayerType={setPlayerType} theme={theme} screenCase='mobile'/>
                            <MuiButton
                                onClick={() =>
                                    setGameOptions(gameName, gameType, playerType)
                                }
                                style={play_button(theme)}
                                theme={theme}
                                variant={"contained"}
                                isDisabled={
                                    !(
                                        playerType &&
                                        gameType &&
                                        gameName !== "" &&
                                        invalids.every((c) => charNotInStr(c, gameName))
                                    )
                                }
                                screenCase='mobile'
                            >
                                Play
                            </MuiButton>
                        </Box>
                    </PersistentDrawer>
                </MediaQuery>
            </div>
        </>
    );
}
