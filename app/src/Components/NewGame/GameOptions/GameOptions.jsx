import React, {useEffect, useState} from "react";
import NavBar from "../../NavBar/NavBar";
import {PickType} from "./PickType";
import {GameName} from "./GameName";
import {PlayAs} from "./PlayAs";
import {invalids} from "../../helpers/invalids";
import {MuiButton as Submit} from "../../Reuseables/MuiButton";
import {charNotInStr} from "../../helpers/charNotInStr";
import "../../Reuseables/style/backgrounds.scss";
import {useStyles} from "./GameOptions.jss";

export function GameOptions({setGameOptions, fontSize}) {
    let [playerType, updatePlayerType] = useState(null);
    let [gameName, updateGameName] = useState("");
    let [gameType, updateGameType] = useState(null);


    useEffect(() => {
        document.body.className = "chessboard-background-large"
    })

    const classes = useStyles({fontSize});

    const setGameName = (e) => {
        updateGameName(e.target.value);
    };
    const setPlayerType = (e) => {
        updatePlayerType(e.target.value);
    };
    const setGameType = (gameType) => {
        updateGameType(gameType);
    };

    return (
        <div className={classes.background}>
            <NavBar currentPage="PlayAs" theme={'dark'} unsavedChanges={false}/>
            <GameName setGameName={setGameName} gameName={gameName} fontSize={fontSize}/>
            <PickType setGameType={setGameType} gameType={gameType} fontSize={fontSize}/>
            <PlayAs setPlayerType={setPlayerType} playerType={playerType} fontSize={fontSize}/>
            <Submit
                clickMethod={() => setGameOptions(gameName, gameType, playerType)}
                className={classes.submit}
                variant={"contained"}
                text={"Submit"}
                isDisabled={
                    !(playerType && gameType && gameName !== "" && invalids.every((c) => charNotInStr(c, gameName)))
                }
            />
        </div>
    );
}
