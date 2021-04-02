import React from "react";
import {HelpText} from "./HelpText";
import {HelpTitle} from "../Reuseables/NavBar/Help/HelpTitle";
import {SearchBox} from "../Reuseables/UserInput/SearchBox";
import {Portal, Typography} from "@material-ui/core";
import {NavBar} from "../Reuseables/NavBar/NavBar";
import {MuiGrid} from "../Reuseables/Modals/MuiGrid";
import {Background} from "../Reuseables/Background/Background";
import {fontSize002, fontSize0026, fontSizeW0045} from "../styles/fontSizes.jss";
import ResponsiveDrawer from "../Reuseables/Drawers/ResponsiveDrawer";
import {useStyles} from "./SavedGames.jss";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
                    <Typography variant="subtitle1" noWrap className={classes.title}>
                        Load Game
                    </Typography>,
                    <SearchBox
                        theme={props.theme}
                        className={classes.search_box}
                        updateSearchText={props.updateSearchText}
                    />,
                ]}
                appBarType='2item'
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
                    topFlexbox={null}
                    onClose={null}
                >
                    {props.children}
                </MuiGrid>
            </ResponsiveDrawer>
        </>
    );
}