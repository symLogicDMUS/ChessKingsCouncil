import React, {useContext, useEffect, useReducer} from "react";
import {useHistory} from "react-router-dom";
import {copy} from "../helpers/copy";
import {getGames} from "../../API/getGames";
import "../styles/Background/_backgrounds.scss";
import {deleteGame} from "../../API/deleteGame";
import {filterSamples} from "../../API/filterSamples";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Background} from "../styles/Background/Background";
import {getSampleGames} from "../../API/sampleData/getSampleGames";
import {decrementImgRefCounts} from "../../API/decrementImgRefCounts";
import ResponsiveDrawer from "../Reuseables/Drawers/ResponsiveDrawer";
import {TwoItemAppBarContent} from "../Reuseables/AppBar/Content/TwoItemAppBarContent";
import {HelpTitle} from "../Reuseables/NavBar/Help/HelpTitle";
import {PageTitle} from "../Reuseables/AppBar/PageTitle";
import {SearchBox} from "../Reuseables/UserInput/SearchBox";
import {MuiGrid} from "../Reuseables/Modals/MuiGrid";
import SearchIcon from "@material-ui/icons/Search";
import NavBar from "../Reuseables/NavBar/NavBar";
import {LoadGameTitle} from "./LoadGameTitle";
import {LoadGameHelp} from "./LoadGameHelp";
import GameSnapshots from "./GameSnapshots";
import {UserContext} from "../../UserContext";
import {ThemeContext} from "../ThemeContext";
import {reducer} from "./LoadGame.red";
import {useStyles} from "./LoadGame.jss";

function LoadGame() {
    const history = useHistory();
    const uid = useContext(UserContext);
    const {themes, setThemes} = useContext(ThemeContext);
    const isThin = useMediaQuery("(max-width:960px)");
    const isWide = useMediaQuery("(min-width:960px)");
    const classes = useStyles({theme: themes.loadGame});

    const [state, dispatch] = useReducer(reducer, {
        selectedGame: null,
        userChoseGame: false,
        firstVisit: false,
        loaded: false,
        searchText: "",
        showNames: true,
        uid: null,
        games: {},
        gameData: null,
    });

    useEffect(() => {
        let games;
        if (uid) {
            getGames().then(([dbGames]) => {
                if (! dbGames) {
                    games = {};
                } else {
                    games = dbGames;
                }
                dispatch({type: 'init-load', uid: uid, games, theme: themes.loadGame})
            });
        }
        else {
            games = getSampleGames();
            dispatch({type: 'init-load', uid: null, games: games, theme: themes.loadGame})
        }
    }, [uid])

    const updateSearchText = (e) => {
        dispatch({type: "update-search-text", newText: e.target.value});
    };

    const deleteGameEntry = () => {
        const newState = copy(state)
        const imgUrlStrs = filterSamples(newState.games[state.selectedGame].imgUrlStrs)
        decrementImgRefCounts(imgUrlStrs).then((r) => {
            deleteGame(state.selectedGame).then(([r]) => {
                dispatch({type: 'delete-game'})
            });
        });
    };

    const setChoice = (gameName) => {
        dispatch({type: 'set-choice', gameName: gameName})
    };

    if (state.useChoseGame) {
        history.push("/Play", {
            currentPath: "/LoadGame",
            gameName: copy(state.selectedGame),
            gameType: copy(state.gameData.type),
            playerType: copy(state.gameData.pt),
            gameData: copy(state.gameData),
        });
    }

    return (
        <>
            <Background theme={themes.loadGame} appBar={isThin} navBar={isWide}/>
            <ResponsiveDrawer
                theme={themes.loadGame}
                navBar={
                    <NavBar
                        show={true}
                        fullWidth={true}
                        lgDirection={"row"}
                        currentPage="LoadGame"
                        redirectMessage={null}
                        helpText={LoadGameHelp(themes.loadGame)}
                        helpTitle={
                            <HelpTitle theme={themes.loadGame} fontSize='2.6vh'>
                                Loading a Game
                            </HelpTitle>
                        }
                        theme={themes.loadGame}
                        additionalSettings={null}
                    />
                }
                tools={null}
                toolButtons={null}
                navHorizontal={isWide}
                appBarContent={
                    <TwoItemAppBarContent
                        theme={themes.loadGame}
                        seeMoreIcon={<SearchIcon className={classes.see_more_icon} />}
                    >
                        <PageTitle theme={themes.loadGame} className={classes.title}>
                            Load Game
                        </PageTitle>
                        <SearchBox
                            theme={themes.loadGame}
                            className={classes.search_box}
                            updateSearchText={updateSearchText}
                        />
                    </TwoItemAppBarContent>
                }
                appBarType='2item'
                seeMoreIcon={<SearchIcon className={classes.see_more_icon} />}
            >
                <div className={classes.load_game}>
                    <MuiGrid
                        loaded={state.loaded}
                        theme={themes.loadGame}
                        onDeleteClick={deleteGameEntry}
                        searchText={state.searchText}
                        selectedItem={state.selectedGame}
                        defaultChecked={state.showNames}
                        onOkClick={() => dispatch({type: 'load-game'})}
                        toggleShowNames={() => dispatch({type: 'toggle-show-names'})}
                        confirmDeleteMessage={`Are you sure you want to delete game ${state.selectedGame}?`}
                        title={
                            isWide ? <LoadGameTitle theme={themes.loadGame} updateSearchText={updateSearchText} /> : null
                        }
                        topFlexbox={null}
                        onClose={null}
                        className={isThin ? classes.mui_grid_padding : null}
                    >
                        <GameSnapshots
                            games={state.games}
                            setChoice={setChoice}
                            selectedGame={state.selectedGame}
                            searchText={state.searchText}
                            showNames={state.showNames}
                            loaded={state.loaded}
                            theme={themes.loadGame}
                        />
                    </MuiGrid>
                </div>
            </ResponsiveDrawer>
        </>
    );
}

export default LoadGame;