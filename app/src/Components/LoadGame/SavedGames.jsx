import React, {useContext} from "react";
import {LoadGameHelp} from "./LoadGameHelp";
import NavBar from "../Reuseables/NavBar/NavBar";
import {MuiGrid} from "../Reuseables/Modals/MuiGrid";
import {HelpTitle} from "../Reuseables/NavBar/Help/HelpTitle";
import {SearchBox} from "../Reuseables/UserInput/SearchBox";
import {Background} from "../styles/Background/Background";
import ResponsiveDrawer from "../Reuseables/Drawers/ResponsiveDrawer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {PageTitle} from "../Reuseables/AppBar/PageTitle";
import {SavedGamesTitle} from "./SavedGamesTitle";
import SearchIcon from "@material-ui/icons/Search";
import {TwoItemAppBarContent} from
        "../Reuseables/AppBar/Content/TwoItemAppBarContent";
import {useStyles} from "./SavedGames.jss";
import {ThemeContext} from "../ThemeContext";

export function SavedGames(props) {
    const {themes, setThemes} = useContext(ThemeContext);
    const classes = useStyles({theme: themes.loadGame});
    const isThin = useMediaQuery("(max-width:960px)");
    const isWide = useMediaQuery("(min-width:960px)");
    
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
                        updateTheme={props.updateTheme}
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
                            updateSearchText={props.updateSearchText}
                        />
                    </TwoItemAppBarContent>
                }
                appBarType='2item'
                seeMoreIcon={<SearchIcon className={classes.see_more_icon} />}
            >
                <MuiGrid
                    loaded={props.loaded}
                    onOkClick={props.load}
                    onDeleteClick={props.deleteGame}
                    selectedItem={props.selectedGame}
                    toggleShowNames={props.toggleShowNames}
                    defaultChecked={props.showNames}
                    searchText={props.searchText}
                    theme={themes.loadGame}
                    confirmDeleteMessage={
                        props.confirmDeleteMessage
                    }
                    title={
                        isWide ? <SavedGamesTitle theme={themes.loadGame} updateSearchText={props.updateSearchText} /> : null
                    }
                    topFlexbox={null}
                    onClose={null}
                    className={isThin ? classes.mui_grid_padding : null}
                >
                    {props.children}
                </MuiGrid>
            </ResponsiveDrawer>
        </>
    );
}