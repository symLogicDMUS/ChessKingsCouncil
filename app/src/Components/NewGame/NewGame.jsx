import React, {useContext, useState} from "react";
import {useHistory} from "react-router-dom";
import TabPanel from "./TabPanel";
import TabBar from "./TabBar";
import {Play} from "./Play";
import {PlayAs} from "./GameOptions/PlayAs";
import {PickType} from "./GameOptions/PickType";
import {GameName} from "./GameOptions/GameName";
import "../styles/Background/_backgrounds.scss";
import {charNotInStr} from "../helpers/charNotInStr";
import {Background} from "../styles/Background/Background";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {AppBarTitle} from "../Reuseables/AppBar/AppBarTitle";
import SwipeableViews from 'react-swipeable-views';
import {ThemeContext} from "../ThemeContext";
import {views} from "./NewGame.jss";

const ResponsiveDrawer = React.lazy(() => import('../Reuseables/Drawers/ResponsiveDrawer'));
const NavBar = React.lazy(() => import('../Reuseables/NavBar/NavBar'));

function NewGame() {
    const history = useHistory();

    const {themes, seThemes} = useContext(ThemeContext);
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
            <Background theme={themes.newGame} appBar={isThin} navBar={isWide}/>
            <ResponsiveDrawer
                navBar={null}
                theme={themes.newGame}
                navHorizontal={isWide}
                appBarContent={null}
                appBarType="title"
                tools={null}
                toolButtons={null}
                noScroll={true}
            >
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
            </ResponsiveDrawer>
        </>
    );
}

export default NewGame;