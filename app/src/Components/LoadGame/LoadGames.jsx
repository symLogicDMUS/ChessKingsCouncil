import React, {useContext, useEffect, useReducer} from "react";
import {copy} from "../helpers/copy";
import {getGames} from "../../API/getGames";
import "../styles/Background/_backgrounds.scss";
import {deleteGame} from "../../API/deleteGame";
import {filterSamples} from "../../API/filterSamples";
import {decrementImgRefCounts} from "../../API/decrementImgRefCounts";
import {getSampleGames} from "../../API/sampleData/getSampleGames";
import {UserContext} from "../../UserContext";
import {ThemeContext} from "../ThemeContext";
import {useStyles} from "./SavedGames.jss";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Background} from "../styles/Background/Background";
import ResponsiveDrawer from "../Reuseables/Drawers/ResponsiveDrawer";
import NavBar from "../Reuseables/NavBar/NavBar";
import {LoadGameHelp} from "./LoadGameHelp";
import {HelpTitle} from "../Reuseables/NavBar/Help/HelpTitle";
import {TwoItemAppBarContent} from "../Reuseables/AppBar/Content/TwoItemAppBarContent";
import SearchIcon from "@material-ui/icons/Search";
import {PageTitle} from "../Reuseables/AppBar/PageTitle";
import {SearchBox} from "../Reuseables/UserInput/SearchBox";
import {MuiGrid} from "../Reuseables/Modals/MuiGrid";
import {SavedGamesTitle} from "./SavedGamesTitle";
import {reducer} from "./LoadGames.red";

function LoadGames() {
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
        bValue: true,
        uid: null,
        games: {},
        boardObj: {},
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
                dispatch({type: 'init-load', uid: uid})
            });
        }
        else {
            games = getSampleGames();
            dispatch({type: 'init-load', uid: null})
        }
    }, [uid])

    const updateSearchText = (e) => {
        dispatch({type: "update-search-text", newText: e.target.value});
    };

    const deleteGameEntry = (gameName) => {
        const newState = copy(state)
        const imgUrlStrs = filterSamples(newState.games[gameName].imgUrlStrs)
        decrementImgRefCounts(imgUrlStrs).then((r) => {
            deleteGame(gameName).then(([r]) => {
                dispatch({type: 'delete-game', gameName: gameName})
            });
        });
    };

    return (
        <>
            <Background theme={themes.loadGame} appBar={isThin} navBar={isWide}/>
            <ResponsiveDrawer
                theme={themes.loadGame}
                navBar={
                    <NavBar
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
                        isWide ? <SavedGamesTitle theme={themes.loadGame} updateSearchText={updateSearchText} /> : null
                    }
                    topFlexbox={null}
                    onClose={null}
                    className={isThin ? classes.mui_grid_padding : null}
                >
                    {state.gameSnapshotComponents}
                </MuiGrid>
            </ResponsiveDrawer>
        </>
    );
}

export default LoadGames;