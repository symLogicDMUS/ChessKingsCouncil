import React, {useContext, useState} from "react";
import { useHistory } from "react-router-dom";
import TabPanel from "./Tabs/TabPanel";
import PlayAs from "./GameOptions/PlayAs";
import GameName from "./GameOptions/GameName";
import PickType from "./GameOptions/PickType";
import NavBar from "../Reuseables/NavBar/NavBar";
import "../styles/Background/_backgrounds.scss";
import SwipeableViews from "react-swipeable-views";
import {PageTitle} from "../Reuseables/AppBar/PageTitle";
import { GameOptionsHelp } from "./GameOptions/Help/GameOptionsHelp";
import { HelpSlideshow } from "../Reuseables/NavBar/Help/HelpSlideshow";
import HorizontalLinearStepper from "./HorinzontalLineStepper/HorizontalLineStepper";
import ResponsiveDrawer from "../Reuseables/Drawers/ResponsiveDrawer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {ThemeContext} from "../../Context/ThemeContext";
import { views } from "./NewGame.jss";

function NewGame() {
    const history = useHistory();

    const {themes, themeDispatch} = useContext(ThemeContext);

    const isWide = useMediaQuery("(min-width:960px)");

    const [gameName, updateGameName] = useState("");
    const [gameType, updateGameType] = useState(null);
    const [playerType, updatePlayerType] = useState(null);
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

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
                    activeStep={activeStep}
                    handleBack={handleBack}
                    handleNext={handleNext}
                    theme={themes.newGame}
                    finish={finish}
                />
                <SwipeableViews style={views} index={activeStep}>
                    <TabPanel
                        index={0}
                        value={activeStep}
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
                        value={activeStep}
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
                        value={activeStep}
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
            </ResponsiveDrawer>
        </>
    );
}

export default NewGame;