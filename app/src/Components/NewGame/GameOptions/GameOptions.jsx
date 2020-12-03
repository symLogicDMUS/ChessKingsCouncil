import React, {useEffect, useState} from "react";
import NavBar from "../../NavBar/NavBar";
import {PickType} from "./PickType";
import {PickName} from "./PickName";
import {PlayAs} from "./PlayAs";
import {invalids} from "../../helpers/invalids";
import {MuiButton as PlayGameButton} from "../../Reuseables/MuiButton";
import {charNotInStr} from "../../helpers/charNotInStr";
import {getColorLetter} from "../../helpers/getColorLetter";
import {themes} from "../../styles/themes.jss";
import {useStyles, submit_button} from "./GameOptions.jss";
import "../../styles/backgrounds.scss";

export function GameOptions({setGameOptions, fontSize}) {
    let [playerType, updatePlayerType] = useState(null);
    let [gameName, updateGameName] = useState("");
    let [gameType, updateGameType] = useState(null);


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
            <NavBar currentPage="PlayAs" theme={'dark'} unsavedChanges={false}/>
            <PickName setGameName={setGameName} gameName={gameName} fontSize={fontSize}/>
            <PickType setGameType={setGameType} gameType={gameType} fontSize={fontSize}/>
            <PlayAs setPlayerType={setPlayerType} fontSize={fontSize}/>
            <PlayGameButton
                clickMethod={() => setGameOptions(gameName, gameType, playerType)}
                style={submit_button(fontSize)}
                theme={themes.black}
                variant={"contained"}
                text={"Play"}
                isDisabled={
                    !(playerType && gameType && gameName !== "" && invalids.every((c) => charNotInStr(c, gameName)))
                }
            />
        </div>
    );
}