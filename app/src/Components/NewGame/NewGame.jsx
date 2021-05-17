import React, {useContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {a11yProps} from "./a11yProps";
import TabPanel from "./TabPanel";
import {Play} from "./Play";
import {PlayAs} from "./GameOptions/PlayAs";
import {PickType} from "./GameOptions/PickType";
import {GameName} from "./GameOptions/GameName";
import "../styles/Background/_backgrounds.scss";
import {charNotInStr} from "../helpers/charNotInStr";
import {getColorLetter} from "../helpers/getColorLetter";
import {HelpTitle} from "../Reuseables/NavBar/Help/HelpTitle";
import {Background} from "../styles/Background/Background";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {GameOptionsHelp} from "./GameOptions/Help/GameOptionsHelp";
import {AppBarTitle} from "../Reuseables/AppBar/AppBarTitle";
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import {ThemeContext} from "../ThemeContext";
import {useStyles} from "./NewGame.jss";

const ResponsiveDrawer = React.lazy(() => import('../Reuseables/Drawers/ResponsiveDrawer'));
const NavBar = React.lazy(() => import('../Reuseables/NavBar/NavBar'));



function NewGame() {
    const history = useHistory();

    const {themes, seThemes} = useContext(ThemeContext);
    const isThin = useMediaQuery("(max-width:960px)");
    const isWide = useMediaQuery("(min-width:960px)");
    const classes = useStyles({theme: themes.newGame});

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

    const setPlayerType = (typePlayer) => {
        if (typePlayer !== "Test") updatePlayerType(getColorLetter(typePlayer));
        else updatePlayerType(typePlayer);
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
                theme={themes.newGame}
                navBar={
                    <NavBar
                        currentPage="NewGame"
                        helpText={GameOptionsHelp(themes.newGame)}
                        helpTitle={<HelpTitle theme={themes.newGame} fontSize='2.6vh'>New Game</HelpTitle>}
                        redirectMessage={null}
                        additionalSettings={null}
                        theme={themes.newGame}
                    />
                }
                navHorizontal={isWide}
                appBarContent={<AppBarTitle theme={themes.newGame}>New Game</AppBarTitle>}
                appBarType="title"
                tools={null}
                toolButtons={null}
                noScroll={true}
            >
                <AppBar className={classes.tab_bar} color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant={"centered"}
                        // variant={isWide ? 'centered' : 'fullWidth'}
                    >
                        <Tab label="Item One" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel index={0} value={value} theme={themes.newGame} className={classes.new_game}>
                        <GameName
                            key='GameName'
                            theme={themes.newGame}
                            setGameName={setGameName}
                            screenCase={isWide ? 'wide' : 'thin'}
                        />
                    </TabPanel>
                    <TabPanel index={1} value={value} theme={themes.newGame} className={classes.new_game}>
                        <PickType
                            key="PickType"
                            gameType={gameType}
                            theme={themes.newGame}
                            setGameType={setGameType}
                            screenCase={isWide ? 'wide' : 'thin'}
                        />
                    </TabPanel>
                    <TabPanel index={2} value={value} theme={themes.newGame} className={classes.new_game}>
                        <PlayAs
                            key="PlayAs"
                            theme={themes.newGame}
                            setPlayerType={setPlayerType}
                            screenCase={isWide ? 'wide' : 'thin'}
                        />
                    </TabPanel>
                </SwipeableViews>
                {/*<Play*/}
                {/*    theme={themes.newGame}*/}
                {/*    onClick={finish}*/}
                {/*    classes={classes}*/}
                {/*    playerType={playerType}*/}
                {/*    gameType={gameType} gameName={gameName}*/}
                {/*    predicate={(c) => charNotInStr(c, gameName)}*/}
                {/*    key='Play-Button-thin'*/}
                {/*/>*/}
            </ResponsiveDrawer>
        </>
    );
}

export default NewGame;