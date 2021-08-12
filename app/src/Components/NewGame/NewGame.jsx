import React, {useContext, useReducer, useState} from "react";
import {useHistory} from "react-router-dom";
import TabPanel from "./Tabs/TabPanel";
import PlayAs from "./GameOptions/PlayAs";
import GameName from "./GameOptions/GameName";
import PickType from "./GameOptions/PickType";
import NavBar from "../Reuseables/NavBar/NavBar";
import "../styles/Background/_backgrounds.scss";
import {PageTitle} from "../Reuseables/AppBar/PageTitle";
import {GameOptionsHelp} from "./GameOptions/Help/GameOptionsHelp";
import {HelpSlideshow} from "../Reuseables/NavBar/Help/HelpSlideshow";
import HorizontalLinearStepper from "./HorinzontalLineStepper/HorizontalLineStepper";
import ResponsiveDrawer from "../Reuseables/Drawers/ResponsiveDrawer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {ThemeContext} from "../../Context/ThemeContext";
import {reducer} from "./NewGame.red";

function NewGame() {
    const history = useHistory();

    const {themes, themeDispatch} = useContext(ThemeContext);

    const isWide = useMediaQuery("(min-width:960px)");

    const [state, dispatch] = useReducer(reducer, {activeStep: 0, slideDirection: 'right'});

    const [gameName, updateGameName] = useState("");
    const [gameType, updateGameType] = useState(null);
    const [playerType, updatePlayerType] = useState(null);

    const setGameName = (e) => {
        updateGameName(e.target.value);
    };

    const setGameType = (gameType) => {
        updateGameType(gameType);
    };

    const setPlayerType = (e) => {
        updatePlayerType(e.target.value);
    };

    const finish = () => {
        if (gameType === "Custom") {
            history.push("/Customize", {
                gameName: gameName,
                gameType: gameType,
                playerType: playerType,
            });
        } else {
            history.push("/Play", {
                gameName: gameName,
                gameType: gameType,
                playerType: playerType,
            });
        }
    };

    return (
        <>
            <HelpSlideshow
                title={"New Game"}
                theme={themes.newGame}
                currentPage={"NewGame"}
                initialState={{ pos: 0, numSlides: 4 }}
            >
                {GameOptionsHelp(themes.newGame)}
            </HelpSlideshow>
            <ResponsiveDrawer
                theme={themes.loadGame}
                navBar={
                    <NavBar
                        show={true}
                        fullWidth={true}
                        lgDirection={"row"}
                        currentPage="NewGame"
                        redirectMessage={null}
                        theme={themes.newGame}
                        additionalSettings={null}
                    />
                }
                appBarContent={
                    <PageTitle theme={themes.newGame}>
                        New Game
                    </PageTitle>
                }
                tools={null}
                toolButtons={null}
                navHorizontal={isWide}
            >
                <HorizontalLinearStepper
                    gameName={gameName}
                    gameType={gameType}
                    playerType={playerType}
                    activeStep={state.activeStep}
                    handleBack={() => dispatch({type: 'back'})}
                    handleNext={() => dispatch({type: 'next'})}
                    theme={themes.newGame}
                    finish={finish}
                />
                <TabPanel
                    index={0}
                    value={state.activeStep}
                    theme={themes.newGame}
                    slideDirection={state.slideDirection}
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
                    value={state.activeStep}
                    theme={themes.newGame}
                    slideDirection={state.slideDirection}
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
                    value={state.activeStep}
                    theme={themes.newGame}
                    slideDirection={state.slideDirection}
                >
                    <PlayAs
                        key="PlayAs"
                        theme={themes.newGame}
                        playerType={playerType}
                        setPlayerType={setPlayerType}
                    />
                </TabPanel>
            </ResponsiveDrawer>
        </>
    );
}

export default NewGame;