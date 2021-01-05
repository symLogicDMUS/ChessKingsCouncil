import React, { useEffect, useState } from "react";
import MediaQuery from "react-responsive/src";
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { PlayAs } from "./PlayAs";
import { PickType } from "./PickType";
import { PickName } from "./PickName";
import { NavBar } from "../../Reuseables/NavBar/NavBar";
import { invalids } from "../../helpers/invalids";
import PersistentDrawer from "../../Reuseables/PersistentDrawer";
import { MuiButton as PlayGameButton } from "../../Reuseables/MuiButton";
import { charNotInStr } from "../../helpers/charNotInStr";
import { getColorLetter } from "../../helpers/getColorLetter";
import { fontSize } from "../../styles/fontSize.jss";
import "../../styles/_backgrounds.scss";
import {HelpText, HelpTitle} from "./HelpText";
import "../../styles/Scrollbar.scss";
import { useStyles, submit_button } from "./GameOptions.jss";

export function GameOptions({ setGameOptions }) {

    let [playerType, updatePlayerType] = useState(null);
    let [gameName, updateGameName] = useState("");
    let [gameType, updateGameType] = useState(null);
    let [theme, setTheme] = useState("black");

    useEffect(() => {
        document.body.className = "light-background";
    });

    const classes = useStyles({ fontSize });

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

    const options = <Box className={classes.game_options}>
        <PickName
            setGameName={setGameName}
            gameName={gameName}
            theme={theme}
        />
        <PickType
            setGameType={setGameType}
            gameType={gameType}
            theme={theme}
        />
        <PlayAs setPlayerType={setPlayerType} theme={theme} />
        <PlayGameButton
            onClick={() =>
                setGameOptions(gameName, gameType, playerType)
            }
            style={submit_button(fontSize, 0.9, theme)}
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
        >
            Play
        </PlayGameButton>
    </Box>

    return (
        <div className={`scrollbar-${theme}`}>
            <MediaQuery minWidth={768}>
                <NavBar
                    currentPage="GameOptions"
                    flexDirection="row"
                    theme={theme}
                    style={{
                        fontSize: fontSize,
                        width: "100%",
                        height: "2.25em",
                    }}
                    helpTitle={HelpTitle(fontSize, theme)}
                    helpText={HelpText(fontSize, theme)}
                    buttonStyle={{
                        fontSize: fontSize,
                        height: "2.25em",
                        justifyContent: "center",
                    }}
                />
                {options}
            </MediaQuery>
            <MediaQuery maxWidth={767}>
                <PersistentDrawer
                    theme={theme}
                    drawer={
                        <NavBar
                            currentPage="GameOptions"
                            flexDirection="column"
                            style={{ width: "100%" }}
                            buttonStyle={{
                                fontSize: fontSize * 1.2,
                                justifyContent: "flex-start",
                                width: "99%",
                                height: "2.5em",
                            }}
                            helpTitle={HelpTitle(fontSize, theme)}
                            helpText={HelpText(fontSize, theme)}
                            redirectMessage={null}
                            theme={theme}
                        />
                    }
                    appBarContent={<Typography variant='h6' noWrap>Game Options</Typography>}
                >
                    {options}
                </PersistentDrawer>
            </MediaQuery>
        </div>
    );
}
