import React, {useEffect, useState} from "react";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import {HelpText} from "./HelpText";
import {HelpTitle} from "../Reuseables/NavBar/Help/HelpTitle";
import {SearchBox} from "../Reuseables/UserInput/SearchBox";
import {Portal, Typography} from "@material-ui/core";
import StorageIcon from '@material-ui/icons/Storage';
import {Background} from "../Reuseables/Background/Background";
import {NavBar} from "../Reuseables/NavBar/NavBar";
import {MuiGrid} from "../Reuseables/Modals/MuiGrid";
import PersistentDrawer from "../Reuseables/Drawers/PersistentDrawer";
import {fontSize002, fontSize0026, fontSizeW0045} from "../styles/fontSizes.jss";
import {pageTitleStyle} from "../Reuseables/Drawers/PersistentDrawer.jss";
import {useStyles} from "./SavedGames.jss";

export function SavedGames(props) {
    const classes = useStyles({theme: props.theme});

    return (
        <>
            <MediaQuery minWidth={1040}>
                <Background theme={props.theme} navBar={true} currentPage='LoadGame'/>
                <NavBar
                    currentPage="LoadGame"
                    screenCase='desktop'
                    theme={props.theme}
                    updateTheme={props.updateTheme}
                    helpText={HelpText(fontSize002, props.theme)}
                    helpTitle={<HelpTitle theme={props.theme} fontSize={fontSize0026}>Loading a Game</HelpTitle>}
                    additionalSettings={null}
                />
                <Portal>
                    <div className={`scrollbar-${props.theme}`}>
                        <div className={classes.flexbox}>
                            <MuiGrid
                                title={
                                    <>
                                        <Box className={classes.title_box}>
                                            <Typography className={classes.title}>Load Game</Typography>
                                            <StorageIcon className={classes.title_icon} size="large"/>
                                        </Box>
                                        <SearchBox theme={props.theme}
                                                   updateSearchText={props.updateSearchText}
                                                   classProp={classes.search_box}
                                                   style={{marginRight: '2.25vw'}}
                                                   width='20em'
                                        />
                                    </>
                                }
                                onClose={null}
                                topFlexbox={null}
                                theme={props.theme}
                                loaded={props.loaded}
                                onOkClick={props.load}
                                defaultChecked={props.showNames}
                                rootClassProp={classes.img_grid_root}
                                searchText={props.searchText}
                                onDeleteClick={props.deleteGame}
                                selectedItem={props.selectedGame}
                                toggleShowNames={props.toggleShowNames}
                                confirmDeleteMessage={props.confirmDeleteMessage}
                            >
                                {props.children}
                            </MuiGrid>
                        </div>
                    </div>
                </Portal>
            </MediaQuery>
            <MediaQuery maxWidth={1040}>
                <Background theme={props.theme} appBar={true} currentPage='LoadGame'/>
                <PersistentDrawer
                    drawer={
                        <NavBar
                            currentPage="LoadGame"
                            screenCase="mobile"
                            redirectMessage={null}
                            helpText={HelpText(fontSizeW0045, props.theme)}
                            helpTitle={<HelpTitle theme={props.theme} fontSize={fontSize0026}>Loading a
                                Game</HelpTitle>}
                            updateTheme={props.updateTheme}
                            theme={props.theme}
                            additionalSettings={null}
                        />
                    }
                    appBarContent={
                        <>
                            <Typography variant="subtitle1" noWrap style={pageTitleStyle}>
                                Load Game
                            </Typography>
                            <SearchBox
                                width='20em'
                                theme={props.theme}
                                classProp={classes.search_box}
                                updateSearchText={props.updateSearchText}
                            />
                        </>
                    }
                    theme={props.theme}
                    spacing={0}
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
                </PersistentDrawer>
            </MediaQuery>
        </>
    );
}