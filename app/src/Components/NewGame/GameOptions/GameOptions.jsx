import React, {useEffect, useState} from "react";
import NavBar from "../../NavBar/NavBar";
import {PickType} from "./PickType";
import {PickName} from "./PickName";
import {PlayAs} from "./PlayAs";
import {invalids} from "../../helpers/invalids";
import {MuiButton as PlayGameButton} from "../../Reuseables/MuiButton";
import {charNotInStr} from "../../helpers/charNotInStr";
import {getColorLetter} from "../../helpers/getColorLetter";
import {useStyles, submit_button} from "./GameOptions.jss";
import {themes} from "../../styles/themes.jss";
import "../../styles/backgrounds.scss";
import {getTheme} from "../../styles/getTheme.jss";

export function GameOptions({setGameOptions, fontSize}) {
    let [playerType, updatePlayerType] = useState(null);
    let [gameName, updateGameName] = useState("");
    let [gameType, updateGameType] = useState(null);
    let [theme, setTheme] = useState('black')

    useEffect(() => {
        document.body.className = "light-background"
    })

    const classes = useStyles({fontSize});

    const setGameName = (e) => {
        updateGameName(e.target.value);
    };
    const setPlayerType = (typePlayer) => {
        if (typePlayer !== 'Test') updatePlayerType(getColorLetter(typePlayer))
        else updatePlayerType(typePlayer)
    };
    const setGameType = (gameType) => {
        updateGameType(gameType);
    };

    return (
        <div>
            <NavBar currentPage="GameOptions" theme={theme} unsavedChanges={false}/>
            <PickName setGameName={setGameName} gameName={gameName} fontSize={fontSize} theme={getTheme(theme)}/>
            <PickType setGameType={setGameType} gameType={gameType} fontSize={fontSize} theme={getTheme(theme)}/>
            <PlayAs setPlayerType={setPlayerType} fontSize={fontSize} theme={getTheme(theme)}/>
            <PlayGameButton
                onClick={() => setGameOptions(gameName, gameType, playerType)}
                style={submit_button(fontSize)}
                theme={getTheme(theme)}
                variant={"contained"}
                isDisabled={
                    !(playerType && gameType && gameName !== "" && invalids.every((c) => charNotInStr(c, gameName)))
                }
            >
            Play
        </PlayGameButton>
        </div>
    );
}