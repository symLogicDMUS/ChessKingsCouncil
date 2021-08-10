import React, {useContext, useState} from "react";
import {useHistory} from "react-router-dom";
import "../styles/Background/_backgrounds.scss";
import {charNotInStr} from "../helpers/charNotInStr";
import {Background} from "../styles/Background/Background";
import {GameOptionsHelp} from "./GameOptions/Help/GameOptionsHelp";
import {HelpSlideshow} from "../Reuseables/NavBar/Help/HelpSlideshow";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {ThemeContext} from "../../Context/ThemeContext";
import SwipeableViews from 'react-swipeable-views';
import GameName from "./GameOptions/GameName";
import PickType from "./GameOptions/PickType";
import PlayAs from "./GameOptions/PlayAs";
import {views} from "./NewGame.jss";

const Play = React.lazy(() => import('./Play'));
const TabBar = React.lazy(() => import('./Tabs/TabBar'));
const TabPanel = React.lazy(() => import('./Tabs/TabPanel'));

function NewGame() {
    const history = useHistory();

    const {themes, themeDispatch} = useContext(ThemeContext);
    const isThin = useMediaQuery("(max-width:960px)");
    const isWide = useMediaQuery("(min-width:960px)");

    const [value, setValue] = React.useState(0);
    const [gameName, updateGameName] = useState("");
    const [gameType, updateGameType] = useState(null);
    const [playerType, updatePlayerType] = useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const setGameName = (e) => {
        updateGameName(e.target.value);
    };

    const setGameType = (gameType) => {
        updateGameType(gameType);
    };

    const setPlayerType = (e) => {
        updatePlayerType(e.target.value)
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
            <HelpSlideshow
                title={"New Game"}
                theme={themes.newGame}
                currentPage={"NewGame"}
                initialState={{pos: 0, numSlides: 4}}
            >
                {GameOptionsHelp(themes.newGame)}
            </HelpSlideshow>
            <TabBar
                wide={isWide}
                value={value}
                gameName={gameName}
                gameType={gameType}
                playerType={playerType}
                theme={themes.newGame}
                onChange={handleChange}
            />
            <SwipeableViews
                index={value}
                style={views}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel
                    index={0}
                    value={value}
                    theme={themes.newGame}
                >
                    <GameName
                        key='GameName'
                        gameName={gameName}
                        theme={themes.newGame}
                        setGameName={setGameName}
                    />
                </TabPanel>
                <TabPanel
                    index={1}
                    value={value}
                    theme={themes.newGame}
                >
                    <PickType
                        key="PickType"
                        gameType={gameType}
                        theme={themes.newGame}
                        setGameType={setGameType}
                    />
                </TabPanel>
                <TabPanel
                    index={2}
                    value={value}
                    theme={themes.newGame}
                >
                    <PlayAs
                        key="PlayAs"
                        theme={themes.newGame}
                        playerType={playerType}
                        setPlayerType={setPlayerType}
                    />
                </TabPanel>
            </SwipeableViews>
            <Play
                finish={finish}
                gameName={gameName}
                gameType={gameType}
                playerType={playerType}
                theme={themes.newGame}
                predicate={(c) => charNotInStr(c, gameName)}
                key='Play-Button'
            />
        </>
    );
}

export default NewGame;