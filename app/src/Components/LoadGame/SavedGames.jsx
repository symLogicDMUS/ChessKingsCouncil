import React from "react";
import {HelpText} from "./HelpText";
import {HelpTitle} from "../Reuseables/NavBar/Help/HelpTitle";
import {SearchBox} from "../Reuseables/UserInput/SearchBox";
import {Typography} from "@material-ui/core";
import {NavBar} from "../Reuseables/NavBar/NavBar";
import {MuiGrid} from "../Reuseables/Modals/MuiGrid";
import {Background} from "../Reuseables/Background/Background";
import {fontSize0026, fontSizeW0045} from "../styles/fontSizes.jss";
import ResponsiveDrawer from "../Reuseables/Drawers/ResponsiveDrawer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {SavedGamesTitle} from "./SavedGamesTitle";
import SearchIcon from "@material-ui/icons/Search";
import {useStyles} from "./SavedGames.jss";
import {PageTitle} from "../Reuseables/AppBar/PageTitle";

export function SavedGames(props) {
    const isThin = useMediaQuery("(max-width:960px)");
    const isWide = useMediaQuery("(min-width:960px)");

    const classes = useStyles({theme: props.theme});

    return (
        <>
            <Background theme={props.theme} appBar={isThin} navBar={isWide}/>
            <ResponsiveDrawer
                theme={props.theme}
                navBar={
                    <NavBar
                        currentPage="LoadGame"
                        redirectMessage={null}
                        helpText={HelpText(fontSizeW0045, props.theme)}
                        helpTitle={
                            <HelpTitle theme={props.theme} fontSize={fontSize0026}>
                                Loading a Game
                            </HelpTitle>
                        }
                        theme={props.theme}
                        updateTheme={props.updateTheme}
                        additionalSettings={null}
                    />
                }
                tools={null}
                toolButtons={null}
                navHorizontal={isWide}
                appBarContent={[
                    <PageTitle theme={props.theme}>
                        Load Game
                    </PageTitle>,
                    <SearchBox
                        theme={props.theme}
                        className={classes.search_box}
                        updateSearchText={props.updateSearchText}
                    />,
                ]}
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
                    theme={props.theme}
                    confirmDeleteMessage={
                        props.confirmDeleteMessage
                    }
                    title={
                        isWide ? <SavedGamesTitle theme={props.theme} updateSearchText={props.updateSearchText} /> : null
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