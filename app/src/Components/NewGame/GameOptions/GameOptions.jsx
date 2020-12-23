import React, {useEffect, useState} from "react";
import {NavBar} from "../../NavBar/NavBar";
import {PickType} from "./PickType";
import {PickName} from "./PickName";
import {PlayAs} from "./PlayAs";
import {invalids} from "../../helpers/invalids";
import {MuiButton as PlayGameButton} from "../../Reuseables/MuiButton";
import {charNotInStr} from "../../helpers/charNotInStr";
import {getColorLetter} from "../../helpers/getColorLetter";
import {fontSize} from "../../styles/fontSize.jss";
import {Background} from "../../Reuseables/Background";
import {useStyles, submit_button} from "./GameOptions.jss";
import "../../styles/_backgrounds.scss";

export function GameOptions({setGameOptions}) {
    let [playerType, updatePlayerType] = useState(null);
    let [gameName, updateGameName] = useState("");
    let [gameType, updateGameType] = useState(null);
    let [theme, setTheme] = useState("black");

    useEffect(() => {
        document.body.className = "light-background";
    });

    const classes = useStyles({fontSize});

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
        <div>
            <NavBar
                currentPage="GameOptions"
                flexDirection='row'
                theme={theme}
                style={{fontSize: fontSize, width: '100%', height: '2.25em'}}
                buttonStyle={{fontSize: fontSize, height: '2.25em', justifyContent: 'center'}}
                unsavedChanges={false}
            />
            <div className={classes.game_options}>
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
                <PlayAs setPlayerType={setPlayerType} theme={theme}/>
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
            </div>
                <Background theme={theme}/>
        </div>
    );
}
