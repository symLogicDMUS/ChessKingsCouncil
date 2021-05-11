import React, {useContext, useState} from "react";
import {useHistory} from "react-router-dom";
import Box from "@material-ui/core/Box";
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
import {useStyles} from "./NewGame.jss";
import {ThemeContext} from "../ThemeContext";

const ResponsiveDrawer = React.lazy(() => import('../Reuseables/Drawers/ResponsiveDrawer'));
const NavBar = React.lazy(() => import('../Reuseables/NavBar/NavBar'));


function NewGame() {
    const history = useHistory();

    const themes = useContext(ThemeContext);

    const [gameName, updateGameName] = useState("");
    const [gameType, updateGameType] = useState(null);
    const [playerType, updatePlayerType] = useState(null);

    const isThin = useMediaQuery("(max-width:960px)");
    const isWide = useMediaQuery("(min-width:960px)");

    const classes = useStyles({theme: themes.newGame});

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
        //setTheme(theme)
        return null;
    }

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
                        updateTheme={updateTheme}
                        additionalSettings={null}
                        theme={themes.newGame}
                    />
                }
                navHorizontal={isWide}
                appBarContent={<AppBarTitle theme={themes.newGame}>New Game</AppBarTitle>}
                appBarType="title"
                toolButtons={null}
                tools={null}
            >
                <Box className={classes.new_game}>
                    <GameName
                        theme={themes.newGame}
                        key='GameName'
                        setGameName={setGameName}
                        screenCase={isWide ? 'wide' : 'thin'}
                    />
                    <PickType
                        theme={themes.newGame}
                        key="PickType"
                        gameType={gameType}
                        setGameType={setGameType}
                        screenCase={isWide ? 'wide' : 'thin'}
                    />
                    <PlayAs
                        theme={themes.newGame}
                        setPlayerType={setPlayerType}
                        key="PlayAs"
                        screenCase={isWide ? 'wide' : 'thin'}
                    />
                    <Play
                        theme={themes.newGame}
                        onClick={finish}
                        classes={classes}
                        playerType={playerType}
                        gameType={gameType} gameName={gameName}
                        predicate={(c) => charNotInStr(c, gameName)}
                        key='Play-Button-thin'
                    />
                </Box>
            </ResponsiveDrawer>
        </>
    );
}

export default NewGame;